import { useState } from 'react';
import goodsList from '../../data/goodsList.json';
import styles from './GoodsList.module.scss'
    
const GoodsList = () => {
    const [isBold, setIsBold] = useState(true);
    
    return (
        <div className={styles.container}>
            <ul>
                {goodsList.map(({ id, productName }) => {
                    return (<li className={styles.item} key={id}>
                        <p>{ productName}</p>
                    </li>)
                })}
            </ul>
        </div>
    )

}

export default GoodsList