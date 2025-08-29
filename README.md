```
 npm init --y 
 npm install --save-dev jasmine @types/jasmine ts-node typescript
 npx jasmine init
 npm i jasmine
 ```
create tsconfig.json file and write:
```{
  "compilerOptions": {
    "target": "ES2019",
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "types": ["jasmine"]
  },
  "include": ["src/**/*.ts", "spec/**/*.ts"]
}
```

the test file should named like this \
filename.spec.ts\
for example :\
***calculator.spec.ts***\
to run the test You should run in CLI :\
npx jasmine
