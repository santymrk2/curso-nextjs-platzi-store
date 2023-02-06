import React from 'react';
import Image from 'next/image';
import addToCart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
	return (
		<>
			<Image src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width={240} height={240} alt="bike" />
			<div className={styles.ProductInfo}>
				<p>$35,00</p>
				<p>Bike</p>
				<p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
				<buttom className={styles['primary-button'], styles['add-to-cart-button']}>
					<Image src={addToCart} width={50} height={50} alt="add to cart" />
					Add to cart
				</buttom>
			</div>
		</>
	);
};

export default ProductInfo;
