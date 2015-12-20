'use strict';

const RE_IMPORT = /@import(?:\s+\((.*)\))?\s+['"](.*)['"]/;
const RE_IMPORT_G = /@import(?:\s+\((.*)\))?\s+['"](.*)['"]/g;
const RE_COMMENT = /(?:\/\*(?:[\s\S]*?)\*\/)|(?:([\s;])+\/\/(?:.*)$)/gm;

module.exports = contents => {
  return (contents.replace(RE_COMMENT, '').match(RE_IMPORT_G) || [])
    .map(dep => {
      let m = dep.match(RE_IMPORT);
      return {
        path: m[2],
        keywords: (m[1] || '').split(',').map(str => str.trim()).filter(v => !!v)
      };
    })
    .filter(v => !!v);
};
