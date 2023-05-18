---
"tsconfig-seek": major
---

Default `noUncheckedIndexedAccess` to `true`

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
