# A stock image Wordpress plugin
![Node.js CI](https://github.com/filiptronicek/pixa-pexels-wordpress/workflows/Node.js%20CI/badge.svg)

 A WordPress Gutenberg plugin to quickly search and attach images from Unsplash & Pixabay. 
 
## Demo
![Demo](https://s3.eu-west-3.amazonaws.com/static-ivanguillen.me/free-stock-images-demo.gif)

## Commands
### 🧪  `npm test`
- Run tests (jest).

### ▶  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

### 👷  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

### 📦  `npm run bundle`
- create a production ready bundle (`pixasplash-wordpress.zip`)

### 🚀  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.

## Development
### Releasing
1. Change the version in [plugin.php](plugin.php), [package.json](package.json)
2. Update version in lockfile: `npm i`
3. Make a tag commit: `git commit -am v1.2.3`
4. Tag the commit: `git tag v1.2.3`
5. Push them commits and tags: `git push && git push --tags`
