import { Component } from "react"

import styles from "./toggle-button.module.scss";
import IconMoon from '../icons/MoonSvg';
import IconWeatherSunny from "../icons/SunIcon"

class ToggleButton extends Component {
    state = {
        isActive: false,
    }

    handlClick = () => {
        const { isActive } = this.state;
        this.setState({
            isActive: !isActive,
        })
    }


    render() {
        // const { text } = this.props;
        const { isActive } = this.state;
        const fullClassName = isActive ? `${styles.btn} ${styles.active}` : styles.btn;
        const fullIcon = isActive ? <IconMoon/> : <IconWeatherSunny/>;
        return <button onClick={this.handlClick} className={fullClassName}>{fullIcon} </button>
    }
} 

export default ToggleButton;