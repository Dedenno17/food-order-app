import classes from './CartItem.module.css';

const CartItem = props => {
    return (
        <li className={classes['cart-item']}>
            <div className={classes.summary}>
                <h2>{props.name}</h2>
                <span className={classes.price}>
                    <p>${props.totalPrice.toFixed(2)}</p>
                    <span>X {props.amount}</span>
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