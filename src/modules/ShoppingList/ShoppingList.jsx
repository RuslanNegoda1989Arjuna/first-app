import styles from './shoppingList.module.scss'

const ShoppingList = () => {
    return ( 
        <div>
            <p>Напишіть на хуках список покупок із формою додавання списку покупок. Зліва у вас має бути блок із формою додавання нової покупки з такими полями:</p>
                <ul>
                    <li>назву;</li>
                    <li>кількість;</li>
                    <li>ціна;</li>
                    <li>термінова покупка (чек-бокс);</li>
                    <li>тип покупки (список, що випадає, з такими варіантами: побутова хімія, продукти, інше);</li>
</ul>

<p>Cправа у вас має бути список доданих покупок. Над списком потрібно виводити загальну кількість покупок та їхню ціну. При натисканні на кожен пункт його можна перекреслити - тобто він вже куплений (тоді його кількість і ціна забираються зі списку). При повторному натисканні він повертається до списку.</p>
    </div>
)
}
export default ShoppingList