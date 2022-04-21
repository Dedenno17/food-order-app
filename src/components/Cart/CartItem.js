import { useDispatch } from 'react-redux';
import { addOrder } from '../../features/orderedMeals';


import classes from './CartItem.module.css';

const CartItem = props => {

    const dispatch = useDispatch();

    const addOrderedMealsHandler = () => {
        const newOrderedMeals = {
            id : props.id,
            name: props.name,
            totalPrice: props.price * 1,
            amount: 1
        }

        dispatch(addOrder(newOrderedMeals));
    }

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
                <button onClick={addOrderedMealsHandler}>+</button>
                <button>-</button>
            </div>
        </li>
    );
}
 
export default CartItem;