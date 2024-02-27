import {
  Chain,
  errors,
  FallbackEvmProvider,
  MetamaskProvider,
  ProviderDetector,
  ProviderInstance,
  ProviderProxyConstructor,
  PROVIDERS,
} from '@distributedlab/w3p'
import { createContext, ReactNode, useCallback, useContext, useMemo } from 'react'

import { ErrorHandler } from '@/helpers'
import { useProvider } from '@/hooks'
import { SUPPORTED_PROVIDERS } from '@/types'

interface Web3ProviderContextValue {
  provider?: ReturnType<typeof useProvider>
  providerDetector: ProviderDetector<SUPPORTED_PROVIDERS>

  init: (providerType?: SUPPORTED_PROVIDERS) => Promise<void>
  addProvider: (provider: ProviderInstance) => void
  disconnect: () => Promise<void>
  requestSwitchChain: (chain: Chain) => Promise<void>
}

export const web3ProviderContext = createContext<Web3ProviderContextValue>({
  provider: undefined,
  providerDetector: new ProviderDetector<SUPPORTED_PROVIDERS>(),

  init: async (providerType?: SUPPORTED_PROVIDERS) => {
    throw new TypeError(`init() not implemented for ${providerType}`)
  },
  addProvider: (provider: ProviderInstance) => {
    throw new TypeError(`addProvider() not implemented for ${provider}`)
  },
  disconnect: async () => {
    throw new TypeError('disconnect() not implemented')
  },
  requestSwitchChain: async (chain: Chain) => {
    throw new TypeError(`requestSwitchChain() not implemented for ${chain}`)
  },
})

const SUPPORTED_PROVIDERS_MAP: {
  [key in SUPPORTED_PROVIDERS]?: ProviderProxyConstructor
} = {
  [PROVIDERS.Metamask]: MetamaskProvider,
  [PROVIDERS.Fallback]: FallbackEvmProvider,
}

export const Web3ProviderContextProvider = ({ children }: { children: ReactNode }) => {
  const providerDetector = useMemo(() => new ProviderDetector<SUPPORTED_PROVIDERS>(), [])

  const provider = useProvider()

  const disconnect = useCallback(async () => {
    try {
      await provider?.disconnect?.()
    } catch (error) {
      // empty
    }
  }, [provider])

  const listeners = useMemo(
    () => ({
      onDisconnect: disconnect,
    }),
    [disconnect],
  )

  const init = useCallback(
    async (providerType?: SUPPORTED_PROVIDERS) => {
      try {
        await providerDetector.init()

        if (!providerType) return

        const initializedProvider = await provider.init(
          SUPPORTED_PROVIDERS_MAP[providerType] as ProviderProxyConstructor,
          {
            providerDetector,
            listeners,
          },
        )

        if (!initializedProvider.isConnected) {
          await initializedProvider?.connect?.()
        }
      } catch (error) {
        if (
          error instanceof Error &&
          'error' in error &&
          error.error instanceof errors.ProviderUserRejectedRequest
        ) {
          await disconnect()
        }

        throw error
      }
    },
    [providerDetector, provider, listeners, disconnect],
  )

  const addProvider = (provider: ProviderInstance) => {
    if (providerDetector.providers?.[provider.name]) return

    providerDetector.addProvider(provider)
  }

  const requestAddChain = useCallback(
    async (chain: Chain) => {
      try {
        await provider?.addChain?.(chain)
      } catch (error) {
        ErrorHandler.process(error)
      }
    },
    [provider],
  )

  const requestSwitchChain = useCallback(
    async (chain: Chain) => {
      try {
        await provider?.switchChain?.(Number(chain.id))
      } catch (error) {
        if (error instanceof errors.ProviderChainNotFoundError) {
          await requestAddChain(chain)

          return
        }

        ErrorHandler.process(error)
      }
    },
    [provider, requestAddChain],
  )

  return (
    <web3ProviderContext.Provider
      value={{
        provider,
        providerDetector,

        init,
        addProvider,
        disconnect,
        requestSwitchChain,
      }}
    >
      {children}
    </web3ProviderContext.Provider>
  )
}

export const useWeb3Context = () => {
  const web3ProviderContextValue = useContext(web3ProviderContext)

  return {
    ...web3ProviderContextValue,
  }
}
