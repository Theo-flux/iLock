import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <MantineProvider
      theme={{
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xxs: 375,
                xs: 540,
                sm: 720,
                md: 960,
                lg: 1140,
                xl: 1320,
              },
            },
          },
        },
      }}
    >
    <App />
    </MantineProvider>
  </React.StrictMode>,
)
