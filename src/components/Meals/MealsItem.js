import classes from './MealsItem.module.css';
import MealsItemForm from './MealsItemForm';

const MealsItem = props => {
    return (
        <li className={classes['meals-item']}>
            <div>
                <img src={props.image} alt="Meal" />
            </div>
            <div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p><strong>${props.price}</strong></p>
            </div>
            <div>
                <MealsItemForm />
            </div>
        </li>
    );
}
 
export default MealsItem;