const modal = () => {
	const cart = document.querySelector('.cart'),
		cartBtn = document.getElementById('cart'),
		cartClose = document.querySelector('.cart-close');

	const showModal = () => {
		cart.style.display = 'flex';
	}

	const closeModal = () => {
		cart.style.display = 'none';
	}

	cartBtn.addEventListener('click', showModal);
	cartClose.addEventListener('click', closeModal);
	cart.addEventListener('click', (e) => {
		const target = e.target;

		if (target.classList.contains('cart')) {
			closeModal()
		}
	});
	document.documentElement.addEventListener('keydown', (e) => {

		if (e.key === 'Escape') {
			closeModal()
		}
	})
}

export default modal;