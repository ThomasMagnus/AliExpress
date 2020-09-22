import {getData} from './services/data'

const addToBasket = () => {
	const cardAddCart = document.querySelectorAll('.card-add-cart'),
		  cartWrapper = document.querySelector('.cart-wrapper'),
		  cartEmpty = document.getElementById('cart-empty'),
		  cartTotal = document.querySelector('.cart-total span'),
		  cartCounter = document.querySelector('#cart span');

	const buysSelectors = [];

	// Создание элементов для создания карточек в корзине

	const createElement = (element) => {
		const div = document.createElement('div');
		div.classList.add('goods');
		div.innerHTML = `
				<div class="goods-img-wrapper" data-id=${element.id}>
					<img class="goods-img" src=${element.imgMin} alt="">
				</div>
				<div class="goods-description">
					<h2 class="goods-title">${element.title}</h2>
					<p class="goods-price">${element.price} ₽</p>
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

		const buysObj = {
			imgMin: element.imgMin,
			price: element.price,
			title: element.title,
			id: element.id,
		}
		if (buysObj.id === element.id) {
			buysSelectors.push(buysObj)
			localStorage.setItem('buys', JSON.stringify(buysSelectors))
		}

	}

	// Счетчик товаров отображающийся над корзиной

	const createCounterGoods = () => {
		if (document.querySelectorAll('.goods')) {
			const goods = document.querySelectorAll('.goods');
			goods.forEach((item, i) => {
				cartCounter.textContent = i + 1;
			})
		}
		if (cartWrapper.firstElementChild.style.display !== 'none') {
			cartCounter.textContent = 0;
		}
	}

	// Счетчик товаров в корзине

	const createCounter = () => {
		if (document.querySelectorAll('.goods-count')) {
			const goodsCount = document.querySelectorAll('.goods-count');
			goodsCount.forEach((item, i) => {
				item.textContent = i + 1;
			})
		}
	}

	// Отключение надписи "Ваша корзина пуста"

	const detectBuys = () => {
		if (cartWrapper.children.length > 1) {
			cartEmpty.style.display = 'none';
		} else {
			cartEmpty.style.display = 'flex';
		}
		createCounterGoods()
	}

	// Вывод общей цены в корзине

	const plusPrice = () => {
		const buysArray = [];
		if (document.querySelectorAll('.goods-price')) {
			const goodsPrice = document.querySelectorAll('.goods-price');
			goodsPrice.forEach(item => buysArray.push(parseFloat(item.textContent)))
			const total = buysArray.reduce((res, item) => {
				return item + res;
			}, 0);
			cartTotal.textContent = total.toFixed(2)
		}
	}

	// Удаление покупок

	const deleteBuys = () => {
		if (document.querySelectorAll('.goods')) {
			const goods = document.querySelectorAll('.goods')

			goods.forEach((item, i) => {
				item.addEventListener('click', (e) => {
					const target = e.target;
					if (target.classList.contains('goods-delete')) {
						target.closest('.goods').remove()
					}
					detectBuys()
					plusPrice()
					createCounter()
				})
			})
		}
	}

	// Добавление в LocalStorage

	const getOnLocalStorage = () => {
		if (localStorage.getItem('buys')) {
			const userBuys = JSON.parse(localStorage.getItem('buys'))
			userBuys.forEach(item => {
				createElement(item)
				detectBuys()
				plusPrice()
				createCounter()
				deleteBuys()
			})
		}
	}

	getOnLocalStorage()

	// Основная функция для добавления карточек в корзину и манипуляции покупок в корзине

	const addBuys = (e) => {
		const target = e.target;
		getData('db/db.json')
			.then(response => {
				response.forEach(item => {

					if (target.dataset.id === item.id) {

						createElement(item)
						detectBuys()
						plusPrice()
						createCounter()
						deleteBuys()
					}

				})
			})
	}
	cardAddCart.forEach(item => item.addEventListener('click', addBuys))
}

export default addToBasket