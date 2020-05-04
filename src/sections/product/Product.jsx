import React, { Component } from 'react';
import './Product.css';
import axios from '../../axios';
import { Row, Col, Button, Alert } from 'react-bootstrap';
import Card from '../../components/card/Card';
import Loader from '../loader/Loader';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ShoppingCart from '../shopping-cart/ShoppingCart';
import Modal from '../Modal/Modal';

/**
 * Product Component
 *
 * @version  1.0.0 - 30 Apr 2020
 * @author   Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since    1.0.0 - 30 Apr 2020
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
			load: false,
			shoppingCartOrders: [],
			modalSuccess: false,
			modalOrders: false,
			addedProducts: JSON.parse(sessionStorage.getItem("addedProducts")) || [],
			quantity: 0,
			orderProductId: 0
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
		let quantity = this.state.addedProducts.filter(value => value == product_id).length; 
		if (quantity >= 1) {
			this.updateProduct(Number(quantity + 1), this.state.orderProductId, product_id);
			return;
		}
		const body = {
			order_id: order_id,
			product_id: product_id,
			quantity: 1,
			subtotal: 0,
			price: 0
		};
		let arrayProduct = this.state.addedProducts;
		axios.post('/api/order-product', body)
			.then(response => {
				arrayProduct.push(product_id);
				sessionStorage.setItem("addedProducts", JSON.stringify(arrayProduct));
				this.setState({
					added: true,
					modalSuccess: true,
					load: false,
					addedProducts: JSON.parse(sessionStorage.getItem("addedProducts")),
					orderProductId: response.data.id
				});
			})
			.catch(error => {
				this.setState({ error: true });
				console.log(error); // eslint-disable-line
			});
	}

	updateProduct = (quantity, id, product_id) => {
		const body = { quantity: quantity };
		let arrayProduct = this.state.addedProducts;
		axios.put(`/api/order-product/${id}`, body)
			.then(response => {
				arrayProduct.push(product_id);
				sessionStorage.setItem("addedProducts", JSON.stringify(arrayProduct));
				this.setState({ 
					load: false, 
					modalSuccess: true, 
					addedProducts: JSON.parse(sessionStorage.getItem("addedProducts"))
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
					shoppingCartOrders: [...response.data],
					modalOrders: true
				});
			})
			.catch(error => {
				this.setState({ error: true });
				console.log(error); // eslint-disable-line
			});
	}

	deleteProduct = (data) => {
		this.setState({ load: true });
		let arrayProduct = this.state.addedProducts;
		axios.delete(`/api/order-product/${data.id}`)
		.then(response => {
			this.shoppingCartOrders();
			arrayProduct = arrayProduct.filter(element => element !== data.product_id);
			sessionStorage.setItem("addedProducts", JSON.stringify(arrayProduct));
			this.setState({ addedProducts: JSON.parse(sessionStorage.getItem("addedProducts")) });
		})
		.catch(error => {
			this.setState({ error: true });
			console.log(error); // eslint-disable-line
		});
	}

	updateQuantity = (data) => {
		this.setState({ load: true });
		const body = { quantity: data.quantity };
		let arrayProduct = this.state.addedProducts;
		let productQuantity = this.state.addedProducts.filter(e => e == data.product_id).length;
		let index = 0;
		axios.put(`/api/order-product/${data.id}`, body)
		.then(response => {
			if (data.quantity > productQuantity) {
				for (let i = productQuantity; i < data.quantity; i++) {
					arrayProduct.push(data.product_id);
				}
			} else {
				for (let i = data.quantity; i < productQuantity; i++) {
					index = arrayProduct.indexOf(data.product_id);
					arrayProduct.splice(index, 1);
				}
			}
			sessionStorage.setItem("addedProducts", JSON.stringify(arrayProduct));
			this.setState({ 
				load: false, 
				addedProducts: JSON.parse(sessionStorage.getItem("addedProducts")) 
			});
		})
		.catch(error => {
			this.setState({ error: true });
			console.log(error); // eslint-disable-line
		});
	}

	confirmOrder = () => {
		
	}

	onChangeQuantity = (event, data) => {
		let array = this.state.shoppingCartOrders;
		if (event.target.value > 0) {
			array.forEach((element, index) => {
				if(element.id === data.id) {
					element.quantity = Number(event.target.value);
				}
			});
			this.setState({
				shoppingCartOrders: array
			});
		}
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
				{this.state.load && <Loader />}
				<Card>
					<h1 className="title">Come and taste the best Pizzas! Yummy</h1>
					<img
						style={{ width: '500px', height: '300px' }}
						alt="Online Training"
						className="img-responsive"
						src="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg"
					/>
				</Card>
				<Modal 
					title="Information"
					buttonClose={true}
					showModal={this.state.modalSuccess}
					closeModal={this.closeModal}
				>
					<Alert variant="success">
						Your product was added to the Shopping Cart
					</Alert>
				</Modal>
				<Modal 
					title="Shopping Cart"
					showModal={this.state.modalOrders}
				>
					<ShoppingCart
						orders={this.state.shoppingCartOrders}
						closeModal={this.closeModal}
						updateQuantity={this.updateQuantity}
						deleteProduct={this.deleteProduct}
						onChangeQuantity={this.onChangeQuantity}
						confirmOrder={this.confirmOrder}
					/>
				</Modal>
				<Row>
					<div className="shopping-cart">
						<a onClick={this.shoppingCartOrders}>
							<i className="shoppint-cart-count">{this.state.addedProducts.length}</i>
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
					<div className="footer-copyright text-center py-3">© 2020 Copyright:
						<a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
					</div>
				</Row>
			</Container>
		);
	}

}

export default Product;
