
import { useState } from "react";
import tabLost from "../../data/tabList.json";
import styles from './tabList.module.scss';

const TabList = () => {
  const [isActive, setIsActive] = useState("1");
  const filteredData = tabLost.find((item) => item.id === isActive);

    return (
        <div className={styles.tabs}>            
        <ul className={styles.captions}>
          {tabLost.map(({ id, title }) => {
            const fullClassName = isActive === id ? `${styles.title} ${styles.active}` : styles.title
            return (
              <li className={fullClassName} key={id} onClick={() => setIsActive(id)}>
              {title}
            </li>)
          })}
        </ul>
         {filteredData && (
        <div className={`${styles.tabsContent} ${styles.active}`}>
          {Object.values(filteredData.paragraph).map((text, index) => (
            <p className={styles.paragr} key={index}>{text}</p>
          ))}                                   
        </div>
      )}
        </div>
)
}

export default TabList