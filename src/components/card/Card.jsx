import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

/**
 * Card Component
 *
 * @version        1.0.0 - 27 Apr 2020
 * @author         Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since          1.0.0 - 27 Apr 2020
 *
 */
const Card = (props) => {
	return(
		<div className={`card-${props.type} ${props.className}`}>
			{props.children}
		</div>
	);
};

Card.defaultProps = {
	type: 'shadow',
	className: ''
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
	className: PropTypes.string,
};

export default Card;
