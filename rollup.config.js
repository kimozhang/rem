import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import ts from 'rollup-plugin-typescript2'
import typescript from 'typescript'
import { terser } from 'rollup-plugin-terser'

import { DEFAULT_EXTENSIONS } from '@babel/core'

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
