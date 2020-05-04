import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

/**
 * Modal Header Component
 *
 * @version  1.0.0 - 03 May 2020
 * @author   Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since    1.0.0 - 03 May 2020
 *
 */
const Header = props => (
    <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
        </Modal.Title>
    </Modal.Header>
);

Header.propTypes = {
    header: PropTypes.string,
};

export default Header;

