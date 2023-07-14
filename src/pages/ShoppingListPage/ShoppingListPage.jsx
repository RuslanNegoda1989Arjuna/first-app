import ShoppingForm from "../../modules/ShoppingForm/ShoppingForm"
import ShoppingList from "../../modules/ShoppingList/ShoppingList"
import styles from './shoppingListPage.module.scss'

const ShoppingListPage = () => {
    return (
        <div className='container Sun'>
            <h2 className='pageTitle'>Shopping List</h2>
            <div className={styles.shopingBox}>
                <ShoppingList />
                <ShoppingForm/>
            </div>
            
        </div>
    )
}

export default ShoppingListPage