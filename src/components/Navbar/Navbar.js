import classes from './Navbar.module.css';
import NavbarCartButton from './NavbarCartButton';

const Navbar = props => {
    return (
        <header className={classes.header} >
            <nav>
                <h1>FoodMeals</h1>
                <NavbarCartButton onClick={props.onShowModalCart}/>
            </nav>
        </header>
    );
}
 
export default Navbar;