import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	};

	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product?.images[0]} width={70} height={70} alt={product?.title} />
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image src={close} width={10} height={10} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
};

export default OrderItem;
