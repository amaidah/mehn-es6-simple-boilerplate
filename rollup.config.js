import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: './src/js/main.js',
  output: {
    file: './public/js/bundle.min.js',
    format: 'iife'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ],
  watch: {
    include: './src/js/**'
  }
};
