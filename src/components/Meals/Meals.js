import Card from '../UI/Card';
import classes from './Meals.module.css';

const Meals = () => {
    return (
        <Card className={classes.meals}>
            <ul>
                <li>Name</li>
                <li>Name</li>
                <li>Name</li>
                <li>Name</li>
            </ul>
        </Card>
    );
}
 
export default Meals;