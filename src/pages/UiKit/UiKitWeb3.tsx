import {
  CoinbaseProvider,
  MetamaskProvider,
  PhantomProvider,
  ProviderDetector,
  ProviderProxyConstructor,
  PROVIDERS,
  RawProvider,
  SolflareProvider,
  WalletConnectEvmProvider,
} from '@distributedlab/w3p'
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardProps,
  Stack,
  Typography,
} from '@mui/material'
import { useMemo } from 'react'

import { useLoading, useProvider } from '@/hooks'

function Web3Card({
  providerProxy,
  providerDetector,
  ...rest
}: {
  providerProxy: ProviderProxyConstructor
  providerDetector: ProviderDetector<PROVIDERS>
} & CardProps) {
  const provider = useProvider()

  return (
    <Card {...rest}>
      <CardHeader title={providerProxy.providerType} />

      <CardContent>
        <Typography variant='body1'>Address: {provider.address}</Typography>
        <Typography variant='body1'>Chain ID: {provider.chainId}</Typography>
      </CardContent>

      <CardActions>
        <Button onClick={() => provider.init(providerProxy, { providerDetector })}>init</Button>
        <Button onClick={() => provider.connect()}>Connect</Button>
      </CardActions>
    </Card>
  )
}

export default function UiKitWeb3() {
  const providerDetector = useMemo(() => new ProviderDetector(), [])

  const { isLoading, isLoadingError } = useLoading(
    false,
    async () => {
      try {
        await providerDetector.init()

        providerDetector.addProvider({
          name: PROVIDERS.WalletConnect,
          instance: {
            projectId: '41f8085dc01ff1ca42c6efcb2c12c169',
            relayUrl: 'wss://relay.walletconnect.com',
            logger: 'info',
          } as RawProvider,
        })

        return true
      } catch (error) {
        return false
      }
    },
    {
      loadOnMount: true,
    },
  )

  if (isLoading)
    return (
      <Stack spacing={6} direction='row' flexWrap='wrap'>
        Loading...
      </Stack>
    )

  if (isLoadingError) return <Alert severity='error'>Error loading provider detector</Alert>

  return (
    <Stack spacing={6} direction='row' flexWrap='wrap'>
      <Web3Card providerProxy={MetamaskProvider} providerDetector={providerDetector} />

      <Web3Card providerProxy={CoinbaseProvider} providerDetector={providerDetector} />

      <Web3Card providerProxy={PhantomProvider} providerDetector={providerDetector} />

      <Web3Card providerProxy={SolflareProvider} providerDetector={providerDetector} />

      <Web3Card providerProxy={WalletConnectEvmProvider} providerDetector={providerDetector} />
    </Stack>
  )
}
