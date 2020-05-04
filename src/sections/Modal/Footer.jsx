import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

/**
 * Modal Footer Component
 *
 * @version  1.0.0 - 03 May 2020
 * @author   Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since    1.0.0 - 03 May 2020
 *
 */
const Footer = props => (
    <Modal.Footer>
        {props.buttonClose && <Button onClick={props.closeModal} >Close</Button>}
    </Modal.Footer>
);

Footer.propTypes = {
    buttonClose: PropTypes.bool,
    closeModal: PropTypes.func
};

export default Footer;

