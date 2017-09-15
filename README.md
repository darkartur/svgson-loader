# SVGSON webpack loader

Converts svg+xml files to JSON. Based on [svgson](https://www.npmjs.com/package/svgson) npm package.
Can be used for rendering SVG via React components.

## Installation

```
npm install svgson-loader --save-dev
```

## Why not [svg-react-loader](https://github.com/jhamlet/svg-react-loader)?

We are writing React UI library with icon button which filling it's background color 
based on [SVG 1.2](https://www.w3.org/TR/SVG12/) property "viewport-fill":


```
import vkIcon from 'svgson-loader!./icons/vk.svg';
import okIcon from 'svgson-loader!./icons/ok.svg';
import fbIcon from 'svgson-loader!./icons/fb.svg';

stories.add('Social buttons', () => (
	<div>
		<Button icon={vkIcon} />
		<Button icon={okIcon} />
		<Button icon={fbIcon} />
	</div>
));
```
So `Button` reads "viewport-fill" attribute inside JSON, applies backgroundColor property
then generates React.createElement calls to render SVG.
