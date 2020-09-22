import { getData } from './services/data'

const cards = async () => {

	const goodsWrapper = document.querySelector('.goods-wrapper'),
		  spinner = document.getElementById('spinner');

	await getData('db/db.json')
		.then(response => {
			spinner.style.display = 'none';
			response.forEach(card => {
				const div = document.createElement('div');
				div.classList.add('card-wrapper', 'col-12', 'col-md-6', 'col-lg-4', 'col-xl-3', 'pb-3');
				div.innerHTML = `
					<div class="card" data-category=${card.category}>
						<div class="card-img-wrapper">
							<img class="card-img-top" src=${card.imgMin} alt="">
							<button class="card-add-wishlist"></button>
						</div>
						<div class="card-body justify-content-between">
							<a href="#" class="card-title">${card.title}</a>
							<div class="card-price">${card.price} ₽</div>
							<div>
								<button class="card-add-cart" data-id=${card.id}>Добавить в корзину</button>
							</div>
						</div>
					</div>
				`;

				goodsWrapper.appendChild(div)

			});

		})

}

export default cards