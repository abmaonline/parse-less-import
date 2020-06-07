# @abmaonline/parse-less-import

[![NPM version](http://img.shields.io/npm/v/@abmaonline/parse-less-import.svg?style=flat-square)](http://npmjs.org/package/@abmaonline/parse-less-import)
[![node](https://img.shields.io/badge/node.js-%3E=_6-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/@abmaonline/parse-less-import.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/@abmaonline/parse-less-import.svg?style=flat-square)](https://npmjs.org/package/@abmaonline/parse-less-import)

Parse import from less file

Originally created by [LingyuCoder](https://github.com/LingyuCoder), but no longer available on github and made some changes to make it work with older versions of less.

**Node.js >= 6**

## Install

```bash
$ npm install --save @abmaonline/parse-less-import
```

## Usage

```javascript
const parse = require('@abmaonline/parse-less-import');

const content = `
@import '../a';
@import './b.less';
@import (multiple) './c.less';
@import (multiple, reference) './d.less';
`;

parse(content);
/*
[ { path: '../a', keywords: [] },
  { path: './b.less', keywords: [] },
  { path: './c.less', keywords: [ 'multiple' ] },
  { path: './d.less', keywords: [ 'multiple', 'reference' ] } ]
*/
```

## Test

```bash
$ npm run test
$ npm run test-cov
```
