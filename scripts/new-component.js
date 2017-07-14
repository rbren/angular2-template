const args = require('yargs').argv;
const fs = require('fs');

let componentCode = function(name, filename) {
  return `
import {Component} from '@angular/core';

@Component({
    selector: '${filename}',
    template: require('../views/${filename}.pug'),
})
export class ${name}Component {
  constructor() {}
}
  `.trim()
}

let viewCode = function(name) {
  return `
h1 ${name}
  `.trim();
}

const COMPONENT_DIR = __dirname + '/../app/components/';
const VIEW_DIR = __dirname + '/../app/views/';

const filename = args.name.toLowerCase().replace(/\s/g, '-');
const componentName = args.name.replace(/\s/g, '');
const componentFile = COMPONENT_DIR + filename + '.ts';
const viewFile = VIEW_DIR + filename + '.pug';
const appFile = __dirname + '/../app/app.module.ts';

let component = componentCode(componentName, filename);
let view = viewCode(args.name);

fs.writeFileSync(viewFile, view);
fs.writeFileSync(componentFile, component);

let app = fs.readFileSync(appFile, 'utf8');
let lines = app.split('\n').reverse();

let insertImportAt = lines.findIndex(l => l.match(/^import .* from '\.\/components\/.*'/));
lines.splice(insertImportAt, 0, `import {${componentName}Component} from './components/${filename}'`);

let insertDeclarationAt = lines.findIndex(l => l.match(/^\s+\w+Component,/));
lines.splice(insertDeclarationAt, 0, `    ${componentName}Component,`)

lines.reverse();
fs.writeFileSync(appFile, lines.join('\n'));
