import React from 'react';
import './Menu.css';
import { Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';

/**
 * Menú View
 *
 * @version  1.0.0 - 27 Apr 2020
 * @author   Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since    1.0.0 - 27 Apr 2020
 *
 */
export const Menu = () => {

	return (
		<Row>
			<Col>
				<Navbar className="nav-bar" bg="light" expand="lg">
					<img className="img" src="Pizza-icon.png" />
					<Navbar.Brand href="/delivery">Innoscripta Pizza</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/">Menú</Nav.Link>
							<Nav.Link href="/">Pro</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Col>
		</Row>
	);

}

export default Menu;
