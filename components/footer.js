import Link from "next/link";
import styles from '../styles/footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <img src="/Logo_black.png" alt="logo" />
            <Link href='/newsletter'>Newsletter</Link>
            <Link href='/impressum'>Impressum</Link>
            <div id="socialmedia">
                <p>icons...</p>
            </div>
        </footer>
    );
};

export default Footer;