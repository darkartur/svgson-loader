const config = require('../package.json');
const {equal} = require('assert');
const {readFile} = require('fs-extra');
const {join} = require('path');

const loader = require('../index');


describe(config.name, () => {
	it('should properly convert test image', async () => {
		const svg = await readFile(join(__dirname, 'vk.svg'), 'utf-8');
		const js = await readFile(join(__dirname, 'vk.js'), 'utf-8');

		const loading = new Promise(resolve => loader.call({
			async: () => (something, result) => resolve(result)
		}, svg));

		const result = await loading;

		equal(result, js);
	})
});
