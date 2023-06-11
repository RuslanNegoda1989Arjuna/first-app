
import styles from "./navbar-menu.module.scss";
import { NavLink } from "react-router-dom";



const  NavbarMenu = ({items}) =>  {

        const elements = items.map(({ id, text, link }, index) => {
        return (
                <li key={id}>
                    <NavLink to={link} className={styles.link} >{ text}</NavLink>
                </li>
               )
        })

        return (
            <ul className={styles.menu}>
                {elements}
            </ul>
        )
    
}

export default NavbarMenu;
