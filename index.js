const svgson = require('svgson');

module.exports = function(content) {
	const callback = this.async();
	svgson(content, {
		svgo: true
	}, function(result, err) {
		if(err) return callback(err);
		callback(null,
`module.exports = ${JSON.stringify(result)};
module.exports['default'] = module.exports;
`
		);
	});
};
