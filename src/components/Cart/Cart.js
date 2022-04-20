import { useDispatch, useSelector } from 'react-redux';
import {setModalCart} from '../../features/modalCart'

import Button from '../UI/Button';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {

    const orderedMeals = useSelector(state => state.orderedMeals.orderedMeals);
    const dispatch = useDispatch();

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
                <h2>$34000</h2>
            </div>
            <div className={classes.btn}>
                <Button onClick={() => dispatch(setModalCart(false))}>Close</Button>
                <Button>Order</Button>
            </div>
        </Modal>
    );
};

export default Cart;