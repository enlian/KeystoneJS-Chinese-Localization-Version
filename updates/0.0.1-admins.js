var keystone = require('keystone');
var User = keystone.list('User');

module.exports = function (done) {
	new User.model({
		name: {
			first: 'Demo',
			last: 'User'
		},
		email: 'demo@keystonejs.com',
		password: 'demo',
		isAdmin: false,
    isProtected: true
	})
	.save(done);
};
