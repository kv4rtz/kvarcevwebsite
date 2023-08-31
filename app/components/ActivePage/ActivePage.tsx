"use client"

import {usePathname} from "next/navigation";
import styles from './ActivePage.module.css'

const ActivePage = () => {
    const pathname = usePathname()

    return (
        <div className={styles.activepage}>{pathname === '/' ? '/main' : pathname}</div>
    )
}

export default ActivePage