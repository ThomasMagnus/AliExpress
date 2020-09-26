const addToLikes = () => {
    const cardAddWishlist = document.querySelectorAll('.card-add-wishlist'),
          cardWrapper = document.querySelectorAll('.card-wrapper'),
          wishlist = document.querySelector('#wishlist span'),
          wishlistBtn = document.getElementById('wishlist');

    let counter = 0;

    const counterWishes = () => {
        const wishesArr = [];
        counter++
        cardAddWishlist.forEach((item, i) => {
            if (item.classList.contains('active')) {
                wishesArr.push(item)
            }
        })
        wishesArr.forEach((item, i) => {
            wishlist.textContent = i + 1;
        })
        if (wishesArr.length === 0) {
            wishlist.textContent = 0;
            cardWrapper.forEach(item => {
                item.style.display = 'flex';
            })
        }
    }

    const showWishContent = () => {
        const wishArr = []
        cardWrapper.forEach(item => {
            item.style.display = 'none';
        })
        cardAddWishlist.forEach(item => {
            if (item.classList.contains('active')) {
                wishArr.push(item)
                item.closest('.card-wrapper').style.display = 'flex';
            }
        })
        if (wishArr.length === 0) {
            cardWrapper.forEach(item => {
                item.style.display = 'flex';
            })
        }
    }

    const createWish = (e) => {
        const target = e.target
        target.classList.toggle('active')
        counterWishes()
        const p = target.closest('.card-wrapper').innerHTML
        localStorage.setItem('wishes', p)
    }

    cardAddWishlist.forEach(item => {
        item.addEventListener('click', createWish)
    })

    wishlistBtn.addEventListener('click', showWishContent)
}

export default addToLikes