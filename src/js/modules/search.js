import {getData} from "./services/data";

const search = () => {
    const search = document.querySelector('.search'),
          searchWrapperInput = document.querySelector('.search-wrapper_input'),
          cardWrapper = document.querySelectorAll('.card-wrapper'),
          goodsWrapper = document.querySelector('.goods-wrapper');

    const startSearch = (e) => {
        e.preventDefault()
        if (searchWrapperInput.value.match(/[a-zа-я]/i)) {
            const cardsArray = []
            getData('db/db.json')
                .then(data => {
                    data.forEach(item => {
                        cardsArray.push(item)
                    })
                    const cardTitleFilter = cardsArray.filter(elem => {
                        const reg = new RegExp(`${searchWrapperInput.value}`, 'i')
                        return elem.title.match(reg)
                    })
                    cardWrapper.forEach(item => {
                        item.style.display = 'none'
                    })
                    cardTitleFilter.forEach(card => {
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
                            `
                        goodsWrapper.appendChild(div)
                    })
                })
                .finally(() => {
                    search.reset()
                })
        } else {
            return
        }
    }

    search.addEventListener('submit', startSearch)
}

export default search