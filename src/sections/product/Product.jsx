import React, { Component } from 'react';
import './Product.css';
import axios from '../../axios';
import { Row, Col, Button, Alert } from 'react-bootstrap';
import Card from '../../components/card/Card';
import Loader from '../loader/Loader';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Menu from '../menu/Menu';
import ShoppingCart from '../shopping-cart/ShoppingCart';

/**
 * User View
 *
 * @version  1.0.0 - 27 Apr 2020
 * @author   Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since    1.0.0 - 27 Apr 2020
 *
 */
export class Product extends Component {

	/**
	 * Default Constructor
	 * @param props send by its parent
	 */
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			orderNumber: 0,
			added: false,
			count: 0,
		};
	};

	async componentDidMount() {
		axios.get('/api/products')
			.then(response => {
				this.setState({ products: response.data });
			})
			.catch(error => {
				this.setState({ error: true });
				console.log(error); // eslint-disable-line
			});
	}

	createOrder = (data) => {
		debugger;
		const body = {
			user_id: 1,
			description: data.name,
			date: new Date().toISOString().slice(0, 19).replace('T', ' ') 
		};
		axios.post('/api/order', body)
			.then(response => {
				this.setState({ orderNumber: response.id, count: this.state.count + 1 });
				this.requestOrder(data.id, this.state.orderNumber);
			})
			.catch(error => {
				this.setState({ error: true });
				console.log(error); // eslint-disable-line
			});
	}

	requestOrder = (order_id, product_id) => {
		const body = {
			order_id: order_id,
			product_id: product_id
		};
		axios.post('/api/order', body)
			.then(response => {
				this.setState({ orderNumber: response.id });
			})
			.catch(error => {
				this.setState({ error: true });
				console.log(error); // eslint-disable-line
			});
	}
	
	success = () => {
		debugger;
		return (
			<Alert variant="success">
  				Your Pizza Was added to the Shopping Cart
			</Alert>
		);
	}

	/**
	 * Default JSX Wrapper
	 */
	render() {
		return this.state.products.length > 0 ? (
			<Container>
				{this.state.added ? this.success : <div/>}
				<Menu />
				<br />
				<Row>
					<a className="shopping-cart" href="/shopping-cart">
						<i className="shoppint-cart-count">{this.state.count}</i>
						<FontAwesomeIcon icon={faShoppingCart} size="lg" />
					</a>
					{this.state.products.map(data => {
						return (
							<Col lg={4} md={6} sm={12}>
								<Card>
									<h3 className="title">{data.name}</h3>
									<h5 className="description">{data.description}</h5>
									<h3 className="title">{`$${data.price}`}</h3>
									<img alt="Online Training" className="img-pizza img-responsive" src={data.image} />
									<hr />
									<Button className="btn btn-warning btn-block" onClick={() => this.createOrder(data)}>ADD TO CART</Button>
								</Card>
							</Col>
						);
					})}
					<div class="footer-copyright text-center py-3">© 2020 Copyright:
						<a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
					</div>
				</Row>
			</Container>
		) : <Loader />;
	}

}

export default Product;
