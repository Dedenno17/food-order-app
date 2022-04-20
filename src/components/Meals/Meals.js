import {useSelector} from 'react-redux';

import Card from '../UI/Card';
import classes from './Meals.module.css';
import MealsItem from './MealsItem';

const Meals = () => {

    const meals = useSelector(state => state.meals.meals);

    return (
        <Card className={classes.meals}>
            <ul>
                {meals.map(meal => 
                    <MealsItem 
                        key={meal.id}
                        id={meal.id}
                        name={meal.name}
                        description={meal.description}
                        price={meal.price}
                        image={meal.image}
                    />    
                )}
            </ul>
        </Card>
    );
}
 
export default Meals;