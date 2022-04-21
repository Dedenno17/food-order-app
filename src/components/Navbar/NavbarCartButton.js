import { useSelector } from 'react-redux';

import classes from './NavbarCartButton.module.css';
import trolli from '../../assets/cart-shopping-solid.svg';

const NavbarCartButton = props => {

    const orderedMeals = useSelector(state => state.orderedMeals.orderedMeals);
    const cartNotif = orderedMeals.map(meal => parseInt(meal.amount)).reduce((acc, curr) => acc + curr, 0);

    const isBump = useSelector(state => state.bump.bump);


    return (
        <button type='button' className={ isBump ? `${classes.button} ${classes.bump}` : classes.button} onClick={props.onClick}>
            <span>
                <img src={trolli} alt='cartshopping' />
            </span>
            <p>Your Cart</p>
            <span>{cartNotif}</span>
        </button>
    );
}
 
export default NavbarCartButton;