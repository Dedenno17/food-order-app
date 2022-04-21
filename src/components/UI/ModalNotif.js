import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import Card from './Card';
import classes from './ModalNotif.module.css';

const ModalNotif = props => {

    const modalNotif = useSelector(state => state.modalNotif.modalNotif.status);

    return createPortal(
        <Card className={ modalNotif ? `${classes['modal-notif']} ${classes.show}` : classes['modal-notif']}>
            <div>
                <p>{props.message}</p>
            </div>
            <span></span>
        </Card>,
        document.getElementById('notif')
    );
}
 
export default ModalNotif;