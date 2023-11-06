import React from "react"
import Header from "@/components/common/layouts/Header"
import Footer from "@/components/common/layouts/Footer"
import Head from "next/head"

const defaults = {
  title: "ENVOY Portal",
  description:
    "ENVOY Portal is the one stop Gateway for all Digital Assets, a fully decentralised (non-custodial) app where users can Buy/Sell Crypto tokens with fiat money and digital payment, easier than ordering food online.",
  image: "/og.png",
  url: "https://twitter.com/envoycorp",
}

export type PageLayoutProps = {
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, ...props }) => {
  return (
    <div className="bg-stone-950 text-white font-['Euclid_Circular_B']">
      <Head>
        <title>Envoy Portal</title>
        <link rel="icon" type="image/png" href="/envoy-logo-white.png" />

        <meta name="description" content={defaults.description} />

        {/*<!-- Google / Search Engine Tags -->*/}
        <meta itemProp="name" content={defaults.title} />
        <meta itemProp="description" content={defaults.description} />
        <meta itemProp="image" content={defaults.image} />

        {/*<!-- Facebook Meta Tags -->*/}
        <meta property="og:title" content={defaults.title} />
        <meta property="og:description" content={defaults.description} />
        <meta property="og:image" content={defaults.image} />
        <meta property="og:url" content={defaults.url} />
        <meta property="og:type" content="website" />

        {/*<!-- Twitter Meta Tags -->*/}
        <meta name="twitter:title" content={defaults.title} />
        <meta name="twitter:description" content={defaults.description} />
        <meta name="twitter:image" content={defaults.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default PageLayout
