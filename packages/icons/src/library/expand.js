/**
 * WordPress dependencies
 */
import { SVG, Path } from '@wordpress/primitives';

const expand = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path fill="none" d="M0 0h24v24H0z" />
		<Path fill="none" d="M0 0h24v24H0V0z" />
		<Path d="M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z" />
	</SVG>
);

export default expand;
