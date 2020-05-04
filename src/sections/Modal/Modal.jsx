import React from 'react';
import PropTypes from 'prop-types';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import { Modal as ModalComponent, Button } from 'react-bootstrap';

/**
 * Modal Component
 *
 * @version  1.0.0 - 03 May 2020
 * @author   Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since    1.0.0 - 03 May 2020
 *
 */
const Modal = props => (
    <ModalComponent
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.showModal}
    >
        <Header title={props.title} />
        <Body>
            {props.children}
        </Body>
        <Footer buttonClose={props.buttonClose} closeModal={props.closeModal} />
    </ModalComponent>
);

Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    showModal: PropTypes.bool,
    closeModal: PropTypes.func,
    buttonClose: PropTypes.bool
};

export default Modal;
