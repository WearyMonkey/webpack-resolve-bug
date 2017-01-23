module.exports = {
	entry: { 'events': 'events' },
	resolve: {
		modules: [__dirname + '/src', 'node_modules']
	},
	output: {
		filename: 'out.js'
	}
};