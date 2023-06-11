
import { Component } from "react";
import styles from "./navbar-menu.module.scss";
import {Link} from "react-router-dom"


class NavbarMenu extends Component {
    state = {
        activeIndex: 0,
    }

    handleClick(index) { 
        this.setState({
            activeIndex: index,
        })
    }
    

    render() {
        const { items } = this.props;
        const {activeIndex} = this.state
        const elements = items.map(({ id, text, link }, index) => {
            const fullClassName = index === activeIndex ? `${styles.link} ${styles.active}` : styles.link;
            return (
                <li key={id}>
                    <Link to={link} className={fullClassName}>{ text}</Link>

                     {/* <a onClick={() => this.handleClick(index)} href={link} className={fullClassName}>{text}</a> */}
                </li>
            )
        })

        return (
            <ul className={styles.menu}>
                {elements}
            </ul>
        )
    }
}

export default NavbarMenu;
