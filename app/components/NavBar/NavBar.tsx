"use client"

import styles from './NavBar.module.css'
import links from "@/app/components/NavBar/links";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavBar = () => {
    const pathname = usePathname()

    return (
        <nav className={styles.nav}>
            <ul>
                {links.map((el, idx) => (
                    <li className={styles.link} key={idx}>{pathname == el.path ? '> ' : ''}[<Link href={el.path}>{el.name}</Link>]</li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
