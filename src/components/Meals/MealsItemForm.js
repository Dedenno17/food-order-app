import classes from './MealsItemForm.module.css';
import Button from '../UI/Button';

const MealsItemForm = props => {
    return (
        <form className={classes.form}>
            <input
                type='number'
                max='5'
                min='1'
                step='1'
            />
            <Button
                type='submit'
            >+ Add</Button>
        </form>
    );
}
 
export default MealsItemForm;