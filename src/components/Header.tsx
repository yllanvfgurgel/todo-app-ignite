import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt="Logo do Todo App" />
            <p className={styles.headerText}>
                <span>to</span>
                <span>do</span>
            </p>
        </header>
    )
}