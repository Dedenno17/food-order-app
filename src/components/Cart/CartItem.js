import classes from './CartItem.module.css';

const CartItem = props => {
    return (
        <li className={classes['cart-item']}>
            <div className={classes.summary}>
                <h2>Name</h2>
                <span className={classes.price}>
                    <p>price</p>
                    <span>X amount</span>
                </span>
            </div>
            <div className={classes.actions}>
                <button>+</button>
                <button>-</button>
            </div>
        </li>
    );
}
 
export default CartItem;