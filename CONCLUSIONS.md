# Working with Lerna

## ISSUES:

### Import .tsx outside of nextjs project

Setting `next.config.js` in 2 ways:

> **Solution 1** - By using nextjs experimental feature - _"Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use them at your own risk"_ (https://github.com/vercel/next.js/issues/9474).

```javascript
module.exports = {
	experimental: {
		externalDir: true,
	},
};
```

> **Solution 2** - configuring webpack (https://www.grouparoo.com/blog/nextjs-plugins)

```javascript
module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /.*\.ts?|.*\.tsx?/,
			use: [options.defaultLoaders.babel],
		});

		return config;
	},
};
```
