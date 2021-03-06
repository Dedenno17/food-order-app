import { useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './MealsItemForm.module.css';
import Button from '../UI/Button';
import { setBump } from '../../features/bump';
import { setModalNotif } from '../../features/modalNotif';

const MealsItemForm = props => {

    const [amountValue, setAmountValue] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        if( amountValue.trim().length === 0 ) {
            dispatch(setModalNotif({
                status: true,
                message: 'You not entered the amount yet!!'
            }))

            const timeOut = setTimeout(() => {
                dispatch(setModalNotif({
                    status: false,
                    message: 'You not entered the amount yet!!'
                })) 
                clearTimeout(timeOut);
            },2800);
            return;
        }

        props.onAddOrderedMeals(amountValue);
        setAmountValue('');

        dispatch(setBump(true));
        setTimeout(() => {
            dispatch(setBump(false));
        }, 300)
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