import { createPortal } from 'react-dom';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { setModalCart } from '../../features/modalCart';

import Card from './Card';
import classes from './Modal.module.css';


const Background = props => {

    const dispatch = useDispatch();

    return (
        <div 
            className={classes.background}
            onClick={() => dispatch(setModalCart(false))}
        ></div>
    );
}


const ModalOverlays = props => {
    return (
        <Card className={`${classes['modal-overlays']} ${props.style}`}>
            {props.children}
        </Card>
    );
}


const portals = document.getElementById('modal');

const Modal = props => {
    return (
        <Fragment>
            {createPortal(<Background />, portals)}
            {createPortal(<ModalOverlays style={props.className}>{props.children}</ModalOverlays>, portals)}
        </Fragment>
    );
}
 
export default Modal;