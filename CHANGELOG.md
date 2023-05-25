# tsconfig-seek

## 2.0.0

### Major Changes

- Default `noUncheckedIndexedAccess` to `true` ([#7](https://github.com/seek-oss/tsconfig-seek/pull/7))

  This change sets the `noUncheckedIndexedAccess` compiler option to `true` by default.

  This flags potential issues with indexed access of arrays and records.

  Before:

  ```ts
  const a: string[] = [];
  const b = a[0];
  //    ^? const b: string
  ```

  After:

  ```ts
  const a: string[] = [];
  const b = a[0];
  //    ^? const b: string | undefined
  ```
