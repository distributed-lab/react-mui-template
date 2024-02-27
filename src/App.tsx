import { CircularProgress, CssBaseline, Stack, ThemeProvider } from '@mui/material'
import { FC, HTMLAttributes, memo, useCallback, useEffect, useMemo, useState } from 'react'

import { ToastsManager, useWeb3Context } from '@/contexts'
import { ErrorHandler } from '@/helpers'
import { useViewportSizes } from '@/hooks'
import { AppRoutes } from '@/routes'
import { useUiState } from '@/store'
import { createTheme } from '@/theme'

const App: FC<HTMLAttributes<HTMLDivElement>> = () => {
  const [isAppInitialized, setIsAppInitialized] = useState(false)

  const { init: initWeb3Provider } = useWeb3Context()
  const { paletteMode } = useUiState()

  useViewportSizes()

  const init = useCallback(async () => {
    try {
      /* empty */
      await initWeb3Provider()
    } catch (error) {
      ErrorHandler.processWithoutFeedback(error)
    }

    setIsAppInitialized(true)
  }, [initWeb3Provider])

  const theme = useMemo(() => createTheme(paletteMode), [paletteMode])

  useEffect(() => {
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastsManager>
        <div className='App'>
          {isAppInitialized ? (
            <AppRoutes />
          ) : (
            <Stack alignItems='center' justifyContent='center' flex={1}>
              <CircularProgress color={'secondary'} />
            </Stack>
          )}
        </div>
      </ToastsManager>
    </ThemeProvider>
  )
}

export default memo(App)
