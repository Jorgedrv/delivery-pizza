import React from 'react';
import './Loader.css';

/**
 * Loader Component
 *
 * @version        1.0.0 - 27 Apr 2020
 * @author         Jorge Romero - Jorgeddrv@gmail.com
 * @since          1.0.0 - 27 Apr 2020
 *
 */

/**
 * loader
 */
const Loader = (load) => (
	load ?
		<div className="loader-wrapper">
			<div className="loader rotating" />
		</div>
		: <div />
);

export default Loader;
