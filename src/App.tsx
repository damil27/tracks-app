import { FC, ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, CssBaseline } from '@mui/material'
import { customTheme } from './theme/customTheme';
import { Dashboard } from "./pages/Dashboard"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const App: FC = (): ReactElement => {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App