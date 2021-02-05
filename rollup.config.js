import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

const extensions = ['.js', '.ts']; // 어떤 확장자를 처리 할 지정함

const outputs = [
  {
    name: '@sebride4988/function-utils',
    dir: 'dist',
    format: 'es',
  },
];

export default [{
  input: './src/index.ts',
  output: {
    name: '@sebride4988/function-utils',
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    commonjs({
      extensions,
    }), // CommonJS 형태로 만들어진 모듈도 불러와서 사용 할 수 있게 해줌
    babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }), // Babel을 사용 할 수 있게 해줌
    json(),
  ], // 아예 소스코드에서 제외함. 에러가 안나도록 peerDependencies에 넣어놔야 함
  external: [
  ],
}, {
  input: './src/index.ts',
  output: [{ dir: 'dist/types', format: "es" }],
  plugins: [dts()],
}];
