import classes from './MainNavigation.module.css'

export default function MainNavigaion() {
    return <nav className={classes.navbar}>
        <ul className={classes.itemsContainer}>
            <li>
                <a>Code Ville</a>
            </li>
            <li>
                <a>Home</a>
                <a>Events</a>
                <a>Blog</a>
                <a>Community</a>
                <a>About</a>
                <a>Contact</a>
            </li>
        </ul>
    </nav>
}