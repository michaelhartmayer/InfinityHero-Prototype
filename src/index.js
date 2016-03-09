require('./styles/reset.css');
require('./styles/base.css');

import Framework from './Framework';

new Framework({
	config: {
		renderTarget: '#app'
	}
});