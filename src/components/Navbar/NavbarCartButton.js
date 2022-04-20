import classes from './NavbarCartButton.module.css';
import trolli from '../../assets/cart-shopping-solid.svg';

const NavbarCartButton = props => {
    return (
        <button type='button' className={classes.button} onClick={props.onClick}>
            <span>
                <img src={trolli} alt='cartshopping' />
            </span>
            <p>Your Cart</p>
            <span>3</span>
        </button>
    );
}
 
export default NavbarCartButton;