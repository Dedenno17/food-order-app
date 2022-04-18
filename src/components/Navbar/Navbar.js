import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={classes.header} >
            <nav>
                <h1>FoodMeals</h1>
            </nav>
        </header>
    );
}
 
export default Navbar;