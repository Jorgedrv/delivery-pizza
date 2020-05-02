import React from 'react';
import './ShoppingCart.css';
import { Container, Row } from 'react-bootstrap';
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
export const ShoppingCart = ({orders, closeModal}) => {
	let price = 0;
	return (
		<Container>
			<Row>
				{orders.map(data => {
					price = Number(price + data.price);
					return (
						<table id="cart" class="table table-hover table-condensed">
							<thead>
								<tr>
									<th style={{ width: '70%' }}>Product</th>
									<th style={{ width: '10%' }}>Price</th>
									<th style={{ width: '8%' }}>Quantity</th>
									<th style={{ width: '22%' }} class="text-center">Subtotal</th>
									<th style={{ width: '10%' }}></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td data-th="Product">
										<div class="row">
											<div class="col-sm-10">
												<h4 class="nomargin">{data.name}</h4>
												<p>{data.description}</p>
											</div>
										</div>
									</td>
									<td data-th="Price">{data.price}</td>
									<td data-th="Quantity">
										<input type="number" class="form-control text-center" value={data.quantity} />
									</td>
									<td data-th="Subtotal" class="text-center">{data.subtotal}</td>
									<td class="actions" data-th="">
										<button class="btn btn-info btn-sm"><FontAwesomeIcon icon={faSync} /></button>
									</td>
									<td class="actions" data-th="">
										<button class="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrash} /></button>
									</td>
								</tr>
							</tbody>
						</table>
					);
				})
				}
				<table id="cart" class="table table-condensed">
					<tbody>
						<tr class="visible-xs">
							<td class="hidden-xs text-center"><strong>Subtotal 1</strong></td>
							<td class="hidden-xs text-center"><strong>Price {price}</strong></td>
						</tr>
						<tr>
							<td>
								<button className="btn btn-warning" onClick={closeModal}>
									Continue Shopping
								</button>
							</td>
							<td colspan="2" class="hidden-xs"></td>
							<td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
						</tr>
					</tbody>
				</table>
			</Row>
		</Container >
	);
};

export default ShoppingCart;