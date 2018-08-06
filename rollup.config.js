import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default {
	input: 'src/glchart.js',
	external: ['three', 'lodash', 'hammerjs'],
	plugins: [
		commonJS({
			include: 'node_modules/**'
		}),
		globals(),
		builtins(),
		resolve({
			jsnext: true,
			browser: true
		}),
	],
	output: [
		{
			format: 'umd',
			name: 'glchart',
			file: 'build/glchart.js',
			indent: '\t',
			globals: {
				'three': 'THREE',
				'lodash': '_',
				'hammerjs': 'Hammer'
			},
		}
	]
};
