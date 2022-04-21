import { useDispatch, useSelector } from 'react-redux';
import {setModalCart} from '../../features/modalCart'
import { setModalNotif } from '../../features/modalNotif';
import {setOrder} from '../../features/orderedMeals'


import Button from '../UI/Button';
import ModalCart from '../UI/ModalCart';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {

    const orderedMeals = useSelector(state => state.orderedMeals.orderedMeals);
    const dispatch = useDispatch();

    const totalAmount = orderedMeals.map(meal => parseInt(meal.totalPrice)).reduce((acc, curr) => acc + curr, 0);

    const orderHandler = () => {
        dispatch(setOrder());
        dispatch(setModalCart(false));
        dispatch(setModalNotif({
            status: true,
            message: 'Your meals are in process'
        }))

        const timeOut = setTimeout(() => {
            dispatch(setModalNotif({
                status: false,
                message: 'You not entered the amount yet!!'
            })) 
            clearTimeout(timeOut);
        },2800);
    }

    return (
        <ModalCart className={classes.cart}>
            <ul>
                {orderedMeals.map(meal => 
                    <CartItem 
                        key={meal.id}
                        id={meal.id}
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
                {orderedMeals.length === 0 ? '' : <Button onClick={orderHandler}>Order</Button>}
            </div>
        </ModalCart>
    );
};

export default Cart;