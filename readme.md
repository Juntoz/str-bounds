# str-bounds
Utility library to add or remove a character from the start or end of a string.

Useful to build urls, queries, etc.

# How to install?
```
npm install @juntoz/str-bounds
```

# How to use?
```
const bounds = require('@juntoz/str-bounds');

var urlpath = 'mypath';
bounds.ensureInitSlash(urlpath);
// => /mypath

var urlhost = 'http://github.com';
bounds.ensureFinalSlash(urlhost);
// => http://github.com/

```
