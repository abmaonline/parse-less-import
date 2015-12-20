'use strict';

require('should');
const parse = require('../index');

describe('parse-less-import', () => {
  it(`should parse '@import "filepath";'`, () => {
    parse(`
      .abc {}
      @import "../a.less";
      .cde {}
      @import "../b";
    `).should.eql([{
      path: '../a.less',
      keywords: []
    }, {
      path: '../b',
      keywords: []
    }]);
    parse(`
      .abc {}
    `).should.eql([]);
  });
  it(`should parse '@import (keyword) "filepath";'`, () => {
    parse(`
      .abc {}
      @import (optional) "../a.less";
      .cde {}
      @import (multiple, reference) "../b";
    `).should.eql([{
      path: '../a.less',
      keywords: ['optional']
    }, {
      path: '../b',
      keywords: ['multiple', 'reference']
    }]);
  });
  it(`should not parse comments`, () => {
    parse(`
      .abc {}
      // @import (optional) "../a.less";
      /*
      .cde {}
      @import (multiple, reference) "../b";
      */
      @import (multiple, reference) "./c";
    `).should.eql([{
      path: './c',
      keywords: ['multiple', 'reference']
    }]);
  });
});
