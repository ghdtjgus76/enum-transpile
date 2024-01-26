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
    "preserveConstEnums": false
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
  input: "src/index.ts",  // 번들링의 시작점이 되는 파일
  output: {
    file: "dist/bundle.js",  // 번들된 결과물의 출력 파일
    format: "es",  // 출력 형식 (여기서는 ECMAScript 모듈 형식)
    sourcemap: true,  // 소스맵 생성 여부
  },
  plugins: [
    resolve(),       // 외부 모듈 해결
    commonjs(),      // CommonJS 모듈을 ES6 형태로 변환
    typescript(),    // TypeScript 파일을 트랜스파일
    terser(),        // JavaScript 코드 압축
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

### 관련 블로그 글
[enum은 어떻게 써야하는가?] https://gugu76.tistory.com/130 <br />
[Rollup 번들러로 enum과 const enum 트랜스파일링해보기] https://gugu76.tistory.com/131
