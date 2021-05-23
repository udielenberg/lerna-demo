module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /.*\.ts?|.*\.tsx?/,
			use: [options.defaultLoaders.babel],
		});

		return config;
	},
	async redirects() {
		return [
			{
				source: "/",
				destination: "/home",
				permanent: true,
			},
		];
	},
};
