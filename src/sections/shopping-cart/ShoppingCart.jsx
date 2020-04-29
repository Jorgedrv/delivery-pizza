import React, { PureComponent } from 'react';
import './ShoppingCart.css';
//import axios from '../../axios';
import { Container, Row } from 'react-bootstrap';
//import Loader from '../loader/Loader';
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
export const ShoppingCart = ({ product }) => {
	const totalPrice = '$10.44';
	return (
		<Container>
			<Row>
				<table id="cart" class="table table-hover table-condensed">
					<thead>
						<tr>
							<th style={{ width: '50%' }}>Product</th>
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
									<div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive" /></div>
									<div class="col-sm-10">
										<h4 class="nomargin">{product.name}</h4>
										<p>{product.description}</p>
									</div>
								</div>
							</td>
							<td data-th="Price">{totalPrice}</td>
							<td data-th="Quantity">
								<input type="number" class="form-control text-center" value="1" />
							</td>
							<td data-th="Subtotal" class="text-center">{totalPrice}</td>
							<td class="actions" data-th="">
								<button class="btn btn-info btn-sm"><FontAwesomeIcon icon={faSync} /></button>
								<button class="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrash} /></button>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="visible-xs">
							<td class="text-center"><strong>Total {totalPrice}</strong></td>
						</tr>
						<tr>
							<td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
							<td colspan="2" class="hidden-xs"></td>
							<td class="hidden-xs text-center"><strong>Total {totalPrice}</strong></td>
							<td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
						</tr>
					</tfoot>
				</table>
			</Row>
		</Container>
	);
};

export default ShoppingCart;