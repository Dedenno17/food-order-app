import Button from '../UI/Button';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = () => {
    return (
        <Modal className={classes.cart}>
            <ul>
            </ul>
            <div className={classes.total}>
                <h2>Total Amount</h2>
                <h2>$34000</h2>
            </div>
            <div className={classes.btn}>
                <Button>Close</Button>
                <Button>Order</Button>
            </div>
        </Modal>
    );
};

export default Cart;