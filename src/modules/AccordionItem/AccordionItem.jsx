import { useState} from "react";
import styles from './accordionItem.module.scss'

const AccordionItem = () => {
    const [isExpanded, setIsExtanded] = useState(false);
    const handleClick = (e) => {
        setIsExtanded(!isExpanded);
    }
    return (
    <div className={styles.container}>
        <div className={styles.accordion}>
            <div className="accordion-item">
                <p className={`${styles.title} ${isExpanded ? styles.isexpanded : ''}`} onClick={handleClick}>
                  First Question
                </p>
                {<div className={`${styles.content} ${isExpanded ? styles.isexpanded : ''}` }>
                  <p className={`${styles.paragraf} ${isExpanded ? styles.isexpanded : ''}` }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.
        
                    Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
                  </p>
                </div>}
              </div>
        </div>
    </div>
    )

}

export default AccordionItem