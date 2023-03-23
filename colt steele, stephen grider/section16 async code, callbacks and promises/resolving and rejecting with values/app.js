const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users' : [
					{ id: 1, username: 'Hako' },
					{ id: 6, username: 'Meliko' }
				],
				'/about' : 'This is the about page'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value
			}
			else {
				reject({ status: 404 }); //reject with a value
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log(res.status, res.data);
	})
	.catch((res) => {
		console.log(res.status);
	});