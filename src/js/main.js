import cards from './modules/cards';
import modal from './modules/modal';
import tabs from './modules/tabs';
import addToBasket from './modules/addToBasket';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	cards()
		.then(() => {
			modal()
			tabs()
			addToBasket()
		})

})