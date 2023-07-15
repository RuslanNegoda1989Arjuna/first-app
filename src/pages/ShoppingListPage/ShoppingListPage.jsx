import ShoppingForm from "../../modules/ShoppingForm/ShoppingForm"
import ShoppingList from "../../modules/ShoppingList/ShoppingList"
import styles from './shoppingListPage.module.scss'
import { nanoid } from 'nanoid';

import { useState } from "react"

const ShoppingListPage = () => {
    const [shoppingList, setShoppingList] = useState([]);

    const handleSubmit = (shoppingItem) => {
        shoppingItem.id = nanoid();
        setShoppingList(prevList => [...prevList, shoppingItem])
    }
    return (
        <div className='container Sun'>
            <h2 className='pageTitle'>Shopping List</h2>
            <div className={styles.shopingBox}>
                <ShoppingList />
                <ShoppingForm onClick={handleSubmit} />
            </div>
            
        </div>
    )
}

export default ShoppingListPage