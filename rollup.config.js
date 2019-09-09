import jsx from 'rollup-plugin-jsx'
import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify';
import { uglify } from "rollup-plugin-uglify";
 
export default {
  output: {
    file: './build/build.min.js',
    name: 'bundle',
    format: "cjs"
  },
  input: './index.js',
  plugins: [,
    babel({
        plugins: [
          'transform-es2015-spread'
        ]
      }),
    jsx( {factory: 'React.createElement'} ),
    uglify()
  ]
}