import React from 'react';
import './ShoppingCart.css';
import { Container, Row, Form, Label } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSync } from '@fortawesome/free-solid-svg-icons';

/**
 * Shopping Cart Component
 *
 * @version  1.0.0 - 27 Apr 2020
 * @author   Jorge Romero - Jorge.Romero_ex@scotiabank.cl (Imagemaker)
 * @since    1.0.0 - 27 Apr 2020
 *
 */
export const ShoppingCart = ({
	orders, closeModal, updateQuantity, deleteProduct, onChangeQuantity, confirmOrder
}) => {
	let subtotalProduct = 0;
	let subtotal = 0;
	let delivery = 0;
	let total = 0;
	return (
		<Container>
			<Row>
				{orders.map(data => {
					subtotalProduct = data.quantity * data.price;
					subtotal += subtotalProduct;
					delivery = subtotal * 0.05;
					total = (subtotal + delivery);
					return (
						<table id="cart" className="table table-hover table-condensed">
							<thead>
								<tr>
									<th style={{ width: '70%' }}>Product</th>
									<th style={{ width: '10%' }}>Price</th>
									<th style={{ width: '8%' }}>Quantity</th>
									<th style={{ width: '22%' }} className="text-center">Subtotal</th>
									<th style={{ width: '10%' }}></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td data-th="Product">
										<div className="row">
											<div className="col-sm-10">
												<h4 className="nomargin">{data.name}</h4>
												<p>{data.description}</p>
											</div>
										</div>
									</td>
									<td data-th="Price">{`$${data.price}`}</td>
									<td data-th="Quantity">
										<input 
											id={data.id}
											type="number" 
											className="form-control text-center" 
											value={data.quantity}
											onChange={(event) => onChangeQuantity(event, data)}
										/>
									</td>
									<td data-th="Subtotal" className="text-center">{`$${subtotalProduct.toFixed(2)}`}</td>
									<td className="actions" data-th="">
										<button onClick={() => updateQuantity(data)} className="btn btn-info btn-sm">
											<FontAwesomeIcon icon={faSync} />
										</button>
									</td>
									<td className="actions" data-th="">
										<button onClick={() => deleteProduct(data)} className="btn btn-danger btn-sm">
											<FontAwesomeIcon icon={faTrash} />
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					);
				})}
				<table id="cart" className="table table-condensed">
					<tbody>
						<tr className="visible-xs">
							<td className="hidden-xs text-center"><strong>Subtotal {`$${subtotal.toFixed(2)}`}</strong></td>
							<td className="hidden-xs text-center"><strong>Delivery {`$${delivery.toFixed(2)}`}</strong></td>
							<td className="hidden-xs text-center"><strong>Total {`$${total.toFixed(2)}`}</strong></td>
							<td className="hidden-xs text-center"></td>
						</tr>
						<br/>
						<tr>
							<td colSpan="4">
								<h3>Confirmation Payment</h3>
								<Form>
									<div className="form-group">
										<label for="fullname">Full Name</label>
										<input type="text" className="form-control" id="fullname" placeholder="Full Name"></input>
									</div>
									<div class="form-group">
										<label for="address">Address</label>
										<textarea class="form-control" id="address" rows="2"></textarea>
									</div>
									<div className="form-group">
										<label for="email">Email</label>
										<input type="email" className="form-control" id="email" placeholder="name@example.com"></input>
									</div>
									<div className="form-group">
										<label for="cellphone">Cellphone Number</label>
										<input type="text" className="form-control" id="cellphone" placeholder="+56 925688753"></input>
									</div>
								</Form>
							</td>
						</tr>
						<tr>
							<td>
								<button className="btn btn-warning" onClick={closeModal}>
									Add Other Pizza
								</button>
							</td>
							<td colspan="2" className="hidden-xs"></td>
							<td>
								<a onClick={confirmOrder} 
								   className="btn btn-success btn-block">
									   Checkout <i className="fa fa-angle-right"></i>
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</Row>
		</Container >
	);
};

export default ShoppingCart;