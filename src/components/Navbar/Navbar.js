import classes from './Navbar.module.css';
import NavbarCartButton from './NavbarCartButton';

const Navbar = () => {
    return (
        <header className={classes.header} >
            <nav>
                <h1>FoodMeals</h1>
                <NavbarCartButton />
            </nav>
        </header>
    );
}
 
export default Navbar;