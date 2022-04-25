import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2';
export default {
  input: 'src/index.ts',
  output: {
    name: '@ame/is',
    file: 'dist/is.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    typescript()
  ]
};