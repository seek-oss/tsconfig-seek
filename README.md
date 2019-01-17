[![Build Status](https://img.shields.io/travis/seek-oss/tsconfig-seek/master.svg?style=flat-square)](http://travis-ci.org/seek-oss/tsconfig-seek) [![npm](https://img.shields.io/npm/v/tsconfig-seek.svg?style=flat-square)](https://www.npmjs.com/package/tsconfig-seek) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

# tsconfig-seek

This package includes the shareable [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) configuration used by [SEEK](https://github.com/seek-oss/).

## Usage

First, install this package make sure you use `typescript` v3.2+.

Then create a file named `tsconfig.json` in the root folder of your project with following contents:

```
{
  "extends": "@my-team/tsconfig-base",
  "include": ["src/**/*.ts"],
  "compilerOptions": {
    // Override certain options on a project-by-project basis.
    "module": "es2015"
  }
}
```

For configuration options refer to [official guide](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) and [config schema](http://json.schemastore.org/tsconfig).

## License

MIT.
