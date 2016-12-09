# Angluar 2.0 Template Project
I use this template as a starter for any new Angular 2.0 projects.

#### Includes
* Bootstrap
* Font Awesome
* JQuery
* Angular HTML5 Router
* Standard navbar/body/footer layout
* Assets served from the `static/` directory instead of root (so root directory can contain server-only components)

## Install

```
npm install
typings install
webpack
```

## Run
The `./static/` directory contains `index.html` and all the other assets needed.
Serve that as your root, e.g.

```
php -S 0.0.0.0:3000 -t static/
```

or for GitHub Pages:

```
git subtree push --prefix static origin gh-pages
```


To run in development mode, run
```
node dev-server.js
```
