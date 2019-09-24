# Summary

This is just an example how to combine node \ nodemon + babel + typescript.
Because, at first, it wasn't clear why js imports worked fine, but ts import failed, secret was that you just need to point, that you wanna to handle ts-files in start command.

```
nodemon --exec babel-node ./src/index.ts --extensions .ts
```

So `--extensions .ts` is the key. Feel 
