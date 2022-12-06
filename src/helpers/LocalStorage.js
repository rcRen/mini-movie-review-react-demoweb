export const User = {
	getUser: () => {
		return JSON.parse(localStorage.getItem('user'));
	},
	setUser: (payload) => {
		localStorage.setItem(
			'user',
			(typeof payload === 'object'&& payload !== 'undefined') ? JSON.stringify(payload) : payload
		);
	},
	clearUser: () => {
		localStorage.removeItem('user');
	},
};
