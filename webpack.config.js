module.exports = {
	context: __dirname,
	entry: './src/entry.js',
	resolve: {
		modules: [__dirname + '/src', 'node_modules'],
		extensions: ['.js']
	},
	output: {
		filename: 'out.js'
	}
};