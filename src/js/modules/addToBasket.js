import {getData} from './services/data'

const addToBasket = () => {
	const cardAddCart = document.querySelectorAll('.card-add-cart'),
		cartWrapper = document.querySelector('.cart-wrapper'),
		cartEmpty = document.getElementById('cart-empty'),
		cartTotal = document.querySelector('.cart-total span'),
		cartCounter = document.querySelector('#cart span');

	const buysArray = [];

	let counter = 0;

	const detectBuys = () => {
		if (cartWrapper.children.length > 1) {
			cartEmpty.style.display = 'none';
		} else {
			cartEmpty.style.display = 'flex';
		}
	}

	const addBuys = (e) => {
		const target = e.target;
		getData('db/db.json')
			.then(responce => {
				responce.forEach(item => {
					if (target.dataset.id === item.id) {

						const buysObj = {
							price: +item.price,
							title: item.title,
							id: item.id
						}
						buysArray.push(buysObj);
						cartTotal.textContent = buysArray.reduce((res, item) => {
							return item.price + res;
						}, 0);

						const div = document.createElement('div');
						div.classList.add('goods');
						div.innerHTML = `
								<div class="goods-img-wrapper">
									<img class="goods-img" src=${item.imgMin} alt="">
								</div>
								<div class="goods-description">
									<h2 class="goods-title">${item.title}</h2>
									<p class="goods-price">${item.price} ₽</p>
								</div>
								<div class="goods-price-count">
									<div class="goods-trigger">
										<button class="goods-add-wishlist"></button>
										<button class="goods-delete"></button>
									</div>
									<div class="goods-count">1</div>
								</div>
							`;
						cartWrapper.appendChild(div)
						counter++;
						cartCounter.textContent = counter;
						detectBuys()
					}
				})
			})
			.then(() => {
				const goods = document.querySelectorAll('.goods')

				goods.forEach((item, i) => {
					item.addEventListener('click', (e) => {
						cartCounter.textContent = i;
						const target = e.target;
						if (target.classList.contains('goods-delete')) {
							target.closest('.goods').remove()
						}
						detectBuys()
					})
				})
			})
	}
	cardAddCart.forEach(item => item.addEventListener('click', addBuys))
}

export default addToBasket