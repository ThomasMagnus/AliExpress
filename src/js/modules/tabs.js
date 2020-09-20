const tabs = () => {
	const categoryItem = document.querySelectorAll('.category-item');

	categoryItem.forEach(item => {
		item.addEventListener('click', (e) => {
			const target = e.target;

			// console.log(document.querySelectorAll('.card'));

			document.querySelectorAll('.card-wrapper').forEach(item => {
				// console.log(item.dataset.category);
				item.style.display = 'none';
				if (target.dataset.category === item.firstElementChild.dataset.category) {
					item.style.display = 'flex';
				}
			})

		})
	})
}

export default tabs;