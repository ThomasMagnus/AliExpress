const addToLikes = () => {
    const cardAddWishlist = document.querySelectorAll('.card-add-wishlist');

    const createWish = (e) => {
        const target = e.target
        target.classList.toggle('active')
    }

    cardAddWishlist.forEach(item => {
        item.addEventListener('click', createWish)
    })
}

export default addToLikes