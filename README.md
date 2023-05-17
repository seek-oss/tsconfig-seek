[![npm](https://img.shields.io/npm/v/tsconfig-seek.svg?style=flat-square)](https://www.npmjs.com/package/tsconfig-seek) [![Test](https://github.com/seek-oss/tsconfig-seek/actions/workflows/test.yml/badge.svg)](https://github.com/seek-oss/tsconfig-seek/actions/workflows/test.yml)
[![Release](https://github.com/seek-oss/tsconfig-seek/actions/workflows/release.yml/badge.svg)](https://github.com/seek-oss/tsconfig-seek/actions/workflows/release.yml)

# tsconfig-seek

This package includes the shareable [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) configuration used by [SEEK](https://github.com/seek-oss/).

## Usage

First, install this package and make sure you use `typescript` v3.2+.

Then create a file named `tsconfig.json` in the root folder of your project:

```json
{
  "extends": "tsconfig-seek",
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
