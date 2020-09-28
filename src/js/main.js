import cards from './modules/cards';
import modal from './modules/modal';
import tabs from './modules/tabs';
import addToBasket from './modules/addToBasket';
import addToLikes from './modules/addToLikes';
import search from "./modules/search";

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	cards()
		.then(() => {
			modal()
			tabs()
			addToBasket()
			addToLikes()
			search()
		})

})