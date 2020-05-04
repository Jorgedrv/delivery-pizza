import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

/**
 * Modal Body Component
 *
 * @version  1.0.0 - 03 May 2020
 * @author   Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since    1.0.0 - 03 May 2020
 *
 */
const Body = props => (
    <Modal.Body>
        {props.children}
    </Modal.Body>
);

Body.propTypes = {
	children: PropTypes.node,
};

export default Body;
