import React from "react"
import { BaseLayoutProps, PageLayoutProps } from "./types"
import Navigation from "@/components/Landing/Navigation"
import Footer from "@/components/Landing/Footer"

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return <div>{children}</div>
}

export const getBaseLayout = (page: React.ReactNode) => {
  return <BaseLayout>{page}</BaseLayout>
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="bg-black text-white">
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
