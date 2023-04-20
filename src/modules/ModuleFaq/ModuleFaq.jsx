import { useState } from "react";
import styles from './ModuleFaq.module.scss';
import itemContent from '../../data/itemContent.json';

const ModuleFaq = () => {

    const [toggleBtn, setToggleBtn] = useState(false);

    const handleClick = () => {
        setToggleBtn(!toggleBtn)
    }
    return (
        <div className={styles.accordion}>
             <h1 className={styles.mainTitle}>FAQ</h1>
           <button type="button" className={styles.btn} id="expand-all" onClick={handleClick}>{toggleBtn ? "Collapse All" : "Expand All"}</button>
            {/* <button type="button" className={styles.btn} id="collapse-all" onClick={handleClick}>Collapse All</button> */}
            <ul>
                {itemContent.map(({ id, title, content }) => {
                    return ( 
                        <li key={id}>
                            <div className="accordion-item">
                                <p className={`${styles.title} ${toggleBtn ? styles.isexpanded : ''}`} >
                                  {title}
                                </p>
                                <div className={`${styles.content} ${toggleBtn ? styles.isexpanded : ''}` }>
                                    <p className={`${styles.paragraf} ${toggleBtn ? styles.isexpanded : ''}`}>{content}</p>
                                </div>
                            </div>

                        </li>
                    )
                })}
            </ul>
            
            
            
    </div>
    )
}

export default ModuleFaq