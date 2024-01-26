# enum-transpile


### 1. 프로젝트 초기화
```
yarn init -y
```

### 2. typescript 설치
```
yarn add --dev typescript
```

### 3. tsconfig.json 생성 및 변경
```
npx tsc --init
```

```
// tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "jsx": "react",
    "isolatedModules": true
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"],
  "exclude": ["node_modules"]
}
```

### 4. Rollup, 관련 플러그인 설치
```
yarn add --dev rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-terser rollup-plugin-typescript2
```

### 5. rollup 설정 파일 생성 및 변경
```
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts", // 프로젝트의 진입 파일
  output: {
    file: "dist/bundle.js", // 번들 결과물 파일 경로
    format: "iife", // 브라우저에서 즉시 실행 가능한 형태로 번들링
  },
  plugins: [
    resolve(), // node_modules에서 모듈을 해석
    commonjs(), // CommonJS 모듈을 ES6 형태로 변환
    typescript(), // TypeScript 컴파일
    terser(), // 코드 압축
  ],
};
```

### 6. 빌드 script 추가 및 type module로 설정
```
// package.json
{
  "scripts": {
    "build": "rollup -c"
  },
  "type": "module",
}
```
