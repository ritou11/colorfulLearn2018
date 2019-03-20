// const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const css = require('css');
const glob = require('glob');

const resPath = 'res/';
glob(path.join(resPath, '*.css'), {}, (err, files) => {
  if (err) {
    console.error(err);
    process.exit(0);
  }
  files.forEach((file) => {
    const cssContent = fs.readFileSync(file, 'utf8');
    const obj = css.parse(cssContent, { source: file });
    console.log(obj.stylesheet.rules);
  });
});
