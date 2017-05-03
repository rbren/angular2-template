const args = require('yargs').argv;
const fs = require('fs');

let componentCode = function(name, filename) {
  return `
import {Component} from '@angular/core';

@Component({
    selector: '${filename}',
    template: require('../views/${filename}.pug'),
})
export class ${name.replace(/\s/g, '')}Component {
  constructor() {}
}
  `.trim()
}

let viewCode = function(name) {
  return `
h1 ${name}
  `.trim();
}

const filename = args.name.toLowerCase().replace(/\s/g, '-');
const COMPONENT_DIR = __dirname + '/../app/components/';
const componentFile = COMPONENT_DIR + filename + '.ts';
const VIEW_DIR = __dirname + '/../app/views/';
const viewFile = VIEW_DIR + filename + '.pug';

let component = componentCode(args.name, filename);
let view = viewCode(args.name);

fs.writeFileSync(viewFile, view);
fs.writeFileSync(componentFile, component);

