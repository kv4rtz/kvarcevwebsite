import {ReactNode} from "react";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";
import ActivePage from "@/app/components/ActivePage/ActivePage";
import styles from './Layout.module.css'

interface ILayoutProps {
    children: ReactNode
}

const Layout = ({children}: ILayoutProps) => {
    return (
        <>
            <NavBar />
            <ActivePage />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout