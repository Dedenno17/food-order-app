import { useState } from 'react';

import classes from './MealsItemForm.module.css';
import Button from '../UI/Button';

const MealsItemForm = props => {

    const [amountValue, setAmountValue] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        props.onAddOrderedMeals(amountValue);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <input
                type='number'
                value={amountValue}
                max='5'
                min='1'
                step='1'
                onChange={(e) => setAmountValue(e.target.value)}
            />
            <Button
                type='submit'
            >+ Add</Button>
        </form>
    );
}
 
export default MealsItemForm;