declare module 'svgson-loader' {
	interface Svgson {
		name: string;
		attrs: {[index: string]: string};
		childs: Svgson[];
	}

	export {Svgson};
}

declare module 'svgson-loader!*.svg' {
	import { Svgson } from 'svgson-loader';

	const svgson: Svgson;

	export default svgson;
}
