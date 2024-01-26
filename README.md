# enum-transpile
rollup 번들러를 사용한 enum 트랜스파일

1. 프로젝트 초기화
```
yarn init -y
```

2. typescript 설치
```
yarn add --dev typescript
```

3. tsconfig.json 생성 및 변경
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

4. Rollup, 관련 플러그인 설치
```
yarn add --dev rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-terser rollup-plugin-typescript2
```

5. rollup 설정 파일 생성 및 변경
```
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "iife",
  },
  plugins: [resolve(), commonjs(), typescript(), terser()],
};
```

6. 빌드 script 추가
```
// package.json
{
  "scripts": {
    "build": "rollup -c"
  }
}
```
