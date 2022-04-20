import { useDispatch } from 'react-redux';
import { setModalCart } from '../../features/modalCart';
import classes from './Navbar.module.css';
import NavbarCartButton from './NavbarCartButton';

const Navbar = props => {

    const dispatch = useDispatch();

    return (
        <header className={classes.header} >
            <nav>
                <h1>FoodMeals</h1>
                <NavbarCartButton onClick={() => dispatch(setModalCart(true))}/>
            </nav>
        </header>
    );
}
 
export default Navbar;