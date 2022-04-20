import { useDispatch } from 'react-redux';
import { addMeals } from '../../features/orderedMeals';

import classes from './MealsItem.module.css';
import MealsItemForm from './MealsItemForm';

const MealsItem = props => {

    const dispatch = useDispatch();

    const addOrderedMealsHandler = (amountValue) => {
        const newOrderedMeals = {
            id : props.id,
            name: props.name,
            totalPrice: props.price * amountValue,
            amount: amountValue
        }

        dispatch(addMeals(newOrderedMeals));
    }


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
                <MealsItemForm onAddOrderedMeals={addOrderedMealsHandler}/>
            </div>
        </li>
    );
}
 
export default MealsItem;