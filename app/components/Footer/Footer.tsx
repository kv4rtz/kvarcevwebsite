"use client"

import styles from './Footer.module.css'
import {useState} from "react";

const Footer = () => {
    const [date, setDate] = useState<Date>(new Date)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month, year, day, hours, minutes, seconds;

    const initDate = () => {
        const monthNumber = date.getMonth()
        year = date.getFullYear()
        day = date.getDate()
        hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
        minutes =  date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
        seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

        month = monthNames[monthNumber]
    }

    initDate()

    setInterval(() => {
        setDate(new Date)

        initDate()
    }, 1000)

    return (
        <footer className={styles.footer}>
            [{hours}:{minutes}:{seconds}, {day} {month} {year}] [developed by kvarcev]
        </footer>
    )
}

export default Footer