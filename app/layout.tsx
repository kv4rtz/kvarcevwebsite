import './globals.css'
import Layout from "@/app/components/global/Layout";
import {ReactNode} from "react";

interface ILayoutProps {
  children: ReactNode
}

const RootLayout = ({children}: ILayoutProps) => {
  return (
      <html lang="en">
      <body>
      <Layout>
        {children}
      </Layout>
      </body>
      </html>
  )
}

export default RootLayout
