import resolve from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const rollupConfig = {
  input: 'src/index.ts',
  output: [
    {
      format: 'es',
      file: 'dist/rem.esm.js',
    },
    {
      format: 'cjs',
      file: 'dist/rem.common.js',
      exports: 'default'
    },
    {
      format: 'iife',
      name: 'setRem',
      file: 'dist/rem.js',
    },
    {
      format: 'iife',
      name: 'setRem',
      file: 'dist/rem.min.js',
      plugins: [
        terser()
      ]
    },
  ],
  plugins: [
    resolve(),
    ts()
  ]
}

export default rollupConfig
