import { useDispatch, useSelector } from 'react-redux';
import {setModalCart} from '../../features/modalCart'

import Button from '../UI/Button';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {

    const orderedMeals = useSelector(state => state.orderedMeals.orderedMeals);
    const dispatch = useDispatch();

    const totalAmount = orderedMeals.map(meal => parseInt(meal.totalPrice)).reduce((acc, curr) => acc + curr, 0);

    return (
        <Modal className={classes.cart}>
            <ul>
                {orderedMeals.map(meal => 
                    <CartItem 
                        key={meal.id}
                        name={meal.name}
                        totalPrice={meal.totalPrice}
                        amount={meal.amount}
                    />
                )}
            </ul>
            <div className={classes.total}>
                <h2>Total Amount</h2>
                <h2>${totalAmount.toFixed(2)}</h2>
            </div>
            <div className={classes.btn}>
                <Button onClick={() => dispatch(setModalCart(false))}>Close</Button>
                {orderedMeals.length === 0 ? '' : <Button>Order</Button>}
            </div>
        </Modal>
    );
};

export default Cart;