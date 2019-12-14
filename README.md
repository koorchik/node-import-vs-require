# Import vs require

Import has different behavior in handling cyclic dependencies. 

In case when A imports B, and B import A. Runtime behaviour will be correct.

### Results:

```bash
>node require/test-app.js 
undefined
undefined
```

```bash
>node import/test-app.mjs 
[Function: B]
[Function: A]
```
