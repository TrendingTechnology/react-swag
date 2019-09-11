import jsx from 'rollup-plugin-jsx'
import babel from 'rollup-plugin-babel'
import { uglify } from "rollup-plugin-uglify";
 
export default {
  output: {
    file: './build/build.min.js',
    name: 'bundle',
    format: "cjs"
  },
  external: [ 'react' ],
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