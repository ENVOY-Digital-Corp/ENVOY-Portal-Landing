import * as React from "react"
import "@/styles/globals.css"
import { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import { EmotionCache } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider } from "@emotion/react"
import { theme } from "@/utils/themes"
import createEmotionCache from "../utils/createEmotionCache"

// Client-side cache, shared for the whole session of the user in the browser.

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
