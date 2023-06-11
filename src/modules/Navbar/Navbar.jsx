import NavbarMenu from "./NavbarMenu/NavbarMenu"
import styles from "./navbar.module.scss";

const Navbar = ({menuItems}) => {
    return (
        <div className={styles.navbar}>
            <div className="container">
                <div className={styles.navbarRow}>
                   
                    <NavbarMenu items={menuItems} />

                </div>
            </div>    
        </div>
    )

}

export default Navbar;