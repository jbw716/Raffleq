module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{svg,png,css,js,json,scss,woff,woff2,html,webmanifest}'
	],
	swDest: 'service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};