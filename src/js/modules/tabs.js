const tabs = () => {
	const categoryItem = document.querySelectorAll('.category-item');

	categoryItem.forEach(item => {
		item.addEventListener('click', (e) => {
			const target = e.target;

			document.querySelectorAll('.card-wrapper').forEach(item => {
				item.style.display = 'none';
				if (target.dataset.category === item.firstElementChild.dataset.category) {
					item.style.display = 'flex';
				}
			})

		})
	})
}

export default tabs;