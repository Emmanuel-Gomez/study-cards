const { FuseBox, Sparky, SVGPlugin, CSSPlugin, QuantumPlugin, WebIndexPlugin } = require("fuse-box");
const { src, task, watch, context, fuse } = require("fuse-box/sparky");
const { TypeChecker } = require('fuse-box-typechecker');

const typeChecker = TypeChecker({
	tsConfig: './tsconfig.json',
	basePath:'./',
	name: 'src'
})

task("clean", () => src("dist").clean("dist").exec());

task("start", ["clean"], async context => {
	const fuse = context.getConfig();

	typeChecker.runWatch("src/components");

	fuse.dev({
		port: 3000,
		fallback: "index.html"
	});

	context.createBundle(fuse);
	await fuse.run();
});

task("dist", ["clean"], async context => {
	context.isProduction = true;
	const fuse = context.getConfig();
	fuse.dev(); // remove it later
	context.createBundle(fuse);
	await fuse.run();
});


context(class {
	
	getConfig() {
		return FuseBox.init({
			homeDir: "src",
			output: "dist/$name.js",
			target : "browser@es5",
			hash: this.isProduction,
			useTypescriptCompiler : true,
			plugins: [
				CSSPlugin(),
				SVGPlugin(),
				WebIndexPlugin({
					template : "src/index.html"
				}),
				this.isProduction && QuantumPlugin({
					bakeApiIntoBundle: "app",
					uglify: true,
					css : true
				})
			]
		})
	}
	createBundle(fuse) {
		const app = fuse.bundle("app");
		if (!this.isProduction) {
			app.sourceMaps(true)
			app.watch()
			app.hmr()
		}
		app.instructions(">index.tsx");
		return app;
	}
});