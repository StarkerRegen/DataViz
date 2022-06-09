import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      // 对于node，打包成commonJS
      file: 'lib/sparrow.js',
      format: 'cjs',
    },
    {
      // 对于浏览器，打包成ES module
      file: 'esm/sparrow.js',
      format: 'es',
    },
    {
      // 对于node和浏览器，打包成混合模式
      file: 'dist/sparrow.min.js',
      name: 'sp',
      format: 'umd',
    },
  ],
  plugins: [
    resolve(),
    babel(),
  ],
};
