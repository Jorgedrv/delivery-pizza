import React, { Component } from 'react';
import './Product.css';
import axios from '../../axios';
import { Row, Col, Button, Alert, Modal } from 'react-bootstrap';
import Card from '../../components/card/Card';
import Loader from '../loader/Loader';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
			orderNumber: Number(sessionStorage.getItem("orderNumber")),
			added: false,
			count: Number(sessionStorage.getItem("count")),
			load: false,
			shoppingCartOrders: [],
			modalSuccess: false,
			modalOrders: false
		};
	};

	async componentDidMount() {
		this.setState({ load: true });
		axios.get('/api/products')
			.then(response => {
				this.setState({ products: response.data, load: false });
			})
			.catch(error => {
				this.setState({ error: true });
				console.log(error); // eslint-disable-line
			});
	}

	createOrder = (data) => {
		this.setState({ load: true });
		if (this.state.orderNumber == 0) {
			const body = {
				user_id: 1,
				description: data.name,
				date: new Date().toISOString().slice(0, 19).replace('T', ' ')
			};
			axios.post('/api/order', body)
				.then(response => {
					this.requestOrder(response.data.id, data.id);
					this.setState({
						productId: data.id,
						orderCreated: true
					});
					sessionStorage.setItem("orderNumber", response.data.id);
					this.setState({ orderNumber: sessionStorage.getItem("orderNumber") });
				})
				.catch(error => {
					this.setState({ error: true });
					console.log(error); // eslint-disable-line
				});
		}
		if (this.state.orderNumber > 0) {	
			this.requestOrder(this.state.orderNumber, data.id);
		}
	}

	requestOrder = (order_id, product_id) => {
		const body = {
			order_id: order_id,
			product_id: product_id,
			quantity: 1,
			subtotal: 0,
			price: 0
		};
		axios.post('/api/order-product', body)
			.then(response => {
				sessionStorage.setItem("count", Number(this.state.count + 1));
				this.setState({ 
					added: true, 
					modalSuccess: true, 
					load: false,
					count: Number(sessionStorage.getItem("count"))
				});
			})
			.catch(error => {
				this.setState({ error: true });
				console.log(error); // eslint-disable-line
			});
	}

	shoppingCartOrders = () => {
		this.setState({ load: true });
		axios.get(`/api/order-product/${this.state.orderNumber}`)
			.then(response => {
				this.setState({ 
					added: true,  
					load: false,
					shoppingCartOrders: [ ...response.data ],
					modalOrders: true
				});
			})
			.catch(error => {
				this.setState({ error: true });
				console.log(error); // eslint-disable-line
			});
	}

	closeModal = () => {
		this.setState({ modalSuccess: false, modalOrders: false });
	}

	/**
	 * Default JSX Wrapper
	 */
	render() {
		return (
			<Container>
				{this.state.load && <Loader/>}
				<Card>
					<h1 className="title">Come and taste the best Pizzas! Yummy</h1>
					<img
						style={{width: '500px', height: '300px'}} 
						alt="Online Training" 
						className="img-responsive" 
						src="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg" 
					/>
				</Card>
				<Modal
					size="lg"	
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.state.modalSuccess}	
				>
					<Modal.Header>
						<Modal.Title id="contained-modal-title-vcenter">
							Information
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Alert variant="success">
							Your product was added to the Shopping Cart
						</Alert>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.closeModal} >Close</Button>
					</Modal.Footer>
				</Modal>
				<Modal
					size="lg"	
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.state.modalOrders}	
				>
					<Modal.Header>
						<Modal.Title id="contained-modal-title-vcenter">
							Information
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<ShoppingCart 
							orders={this.state.shoppingCartOrders} 
							closeModal={this.closeModal}
						/>
					</Modal.Body>
					<Modal.Footer>
					</Modal.Footer>
				</Modal>
				<Row>
					<div activeClassName='active' className="shopping-cart">
						<a onClick={this.shoppingCartOrders}>
							<i className="shoppint-cart-count">{this.state.count}</i>
							<FontAwesomeIcon icon={faShoppingCart} size="lg" />
						</a>
					</div>
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
		);
	}

}

export default Product;
