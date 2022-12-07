export const User = {
	getUser: () => {
		return JSON.parse(localStorage.getItem('user'));
	},
	setUser: (payload) => {
		localStorage.setItem(
			'user',
			(typeof payload === 'object') ? JSON.stringify(payload) : payload
		);
	},
	clearUser: () => {
		localStorage.removeItem('user');
	},
};
