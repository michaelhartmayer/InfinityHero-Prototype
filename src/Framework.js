require('normalize.css');

import Core from './Core';

// libraries
import Cookie 	 from 'cookies-js';
import Mediator  from 'mediator-js';
import Timer     from 'timer.js';
import Numeral   from 'numeral';

class TimerFacade {
	constructor ({ tick, onTick, onStart, onStop, onPause, onEnd }) {
		this._timer = new Timer({
			tick,
			ontick:  onTick,
			onstart: onStart,
			onstop:  onStop,
			onpause: onPause,
			onend:   onEnd
		});
	}

	start () {
		this._timer.start();
	}

	stop () {
		this._timer.stop();
	}

	pause () {
		this._timer.pause();
	}
}

class MediatorFacade {
	constructor () {
		this._mediator = new Mediator();
	}

	subscribe (channel = 'undefined', fn = () => {}) {
		this._mediator.subscribe(channel, fn);
	}

	publish (channel = 'undefined', payload) {
		this._mediator.publish(channel, payload);
	}
}

const CookieFacade = {
	set: (key, value) => {
		return Cookie.set(key, value);
	},

	get: (key) => {
		return Cookie.get(key);
	}
};

const DOMFacade = {
	$: (selector) => {
		return document.querySelector(selector);
	}
};

const NumbersFacade = {
	format: (n = 0) => n.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}

export default class Framework {
	constructor (opt) {
		return new Core(this, opt);
	}

	Cookie () {
		return CookieFacade;
	}

	DOM () {
		return DOMFacade;
	}

	Mediator () {
		return new MediatorFacade();
	}

	Timer () {
		return Timer;
	}

	Numbers () {
		return NumbersFacade;
	}
}