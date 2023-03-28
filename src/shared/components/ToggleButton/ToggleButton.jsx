import { Component } from "react"

import styles from "./toggle-button.module.scss";
import IconMoon from '../icons/MoonSvg';
import IconWeatherSunny from "../icons/SunIcon"


class ToggleButton extends Component {
    state = {
        isActive: false,
    }

    handlClick = () => {
        //  console.log(styles.btn);
        const { isActive } = this.state;
        this.setState({
            isActive: !isActive,
        })
    }
    
    


    render() {
    
        
        const { isActive } = this.state;
        const fullClassName = isActive ? `${styles.btn} ${styles.active}` : styles.btn;
        const fullIcon = isActive ? <IconMoon /> : <IconWeatherSunny />;
         console.log(styles);
        return (
            <>
                <button onClick={this.handlClick} className={fullClassName}>{fullIcon} </button>
                {isActive && <div ><IconWeatherSunny /></div>}
                {!isActive && <div><IconMoon /></div>}
            </>)
    }
} 

export default ToggleButton;