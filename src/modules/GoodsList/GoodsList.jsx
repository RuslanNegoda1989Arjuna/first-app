import { useState } from 'react';
import goodsList from '../../data/goodsList.json';
import styles from './GoodsList.module.scss'
    
const GoodsList = () => {
    const [isBold, setIsBold] = useState(0);

    return (
        <div className={styles.container}>
            <ul>
                {goodsList.map(({ id, productName }, index) => {
                  const fullClassName = index === isBold ? `${styles.item} ${styles.active}` : `${styles.item}`

                    return (<li className={fullClassName} key={id} onClick={() => setIsBold(index)}>
                        <p>{ productName}</p>
                    </li>)
                })}
            </ul>
        </div>
    )

}

export default GoodsList