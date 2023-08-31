import styles from './LinksPage.module.css'

const LinksPage = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.item}><a href="https://vk.com/kv4rtz" target="_blank">vkontakte</a></li>
            <li className={styles.item}><a href="https://discordapp.com/users/901388639005736981" target="_blank">discord</a></li>
            <li className={styles.item}><a href="https://t.me/kv4rtz" target="_blank">telegram</a></li>
        </ul>
    )
}

export default LinksPage