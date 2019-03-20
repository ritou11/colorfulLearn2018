const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const css = require('css');
const glob = require('glob');

const resPath = 'res/';
const orgColor = '#1392f1';
const tarColor = '#843bca';

glob(path.join(resPath, '*.css'), {}, (err, files) => {
  if (err) {
    console.error(err);
    process.exit(0);
  }
  const tarCssList = [];
  files.forEach((file) => {
    const cssContent = fs.readFileSync(file, 'utf8');
    const obj = css.parse(cssContent, { source: file });
    const { rules } = obj.stylesheet;
    const tarRules = _.filter(rules, (rule) => {
      if (rule.declarations) {
        const tarDlrs = _.filter(rule.declarations,
          (decl) => decl.value && (decl.value === _.toLower(orgColor) || decl.value === _.toUpper(orgColor)));
        return tarDlrs.length > 0;
      }
      return false;
    });
    _.forEach(tarRules, (rule, index) => {
      tarRules[index].declarations = _.filter(_.map(rule.declarations, (decl) => {
        if (!decl.value) return null;
        if (decl.value.indexOf(_.toLower(orgColor)) >= 0) {
          const ndecl = decl;
          ndecl.value = _.replace(decl.value, _.toLower(orgColor), tarColor);
          return ndecl;
        }
        if (decl.value.indexOf(_.toUpper(orgColor)) >= 0) {
          const ndecl = decl;
          ndecl.value = _.replace(decl.value, _.toUpper(orgColor), tarColor);
          return ndecl;
        }
        return null;
      }), (o) => o);
    });
    obj.stylesheet.rules = tarRules;
    tarCssList.push(css.stringify(obj, { compress: true }));
  });
  const cssResults = _.join(tarCssList, '\n');
  fs.writeFileSync('res/result.css', cssResults);
  // console.log(cssResults);
});
