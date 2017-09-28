declare module 'svgson-loader' {
	interface SvgsonTag {
		name: string;
		attrs: {[index: string]: string};
		childs: Svgson[];
	}

	interface SvgsonText {
		text: string;
	}

	type Svgson = SvgsonTag | SvgsonText;

	export {Svgson};
}

declare module 'svgson-loader!*.svg' {
	import { Svgson } from 'svgson-loader';

	const svgson: Svgson;

	export default svgson;
}
