# Nodejs

## Download to install
* [Nodejs Download](https://nodejs.org/en/download/) 

## Install via Homebrew

*  `brew install node`

## Check node version

* `node -v`


# NVM

## Install NVM

* [Install via NVM] (https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)
* Download the nvm install script via cURL : `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`
* `touch ~/.bash_profile`
  export NVM_DIR="/usr/local/nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
* optional : Install C++ compiler : `xcode-select --install`

## Check nvm version

* `nvm --version`

## Install Multiple Versions of Node.js

* `nvm install node`
* `nvm ls`
* `nvm ls-remote`
* `nvm install 8.9.4`
* `nvm uninstall 0.11`

## you can reinstall the npm global packages from a specific version.

`nvm install v9.0.0 --reinstall-packages-from=8.9`

## Switching between Versions

* `nvm --version`
* `nvm use v10.15.0`
* `nvm use node --lts`
* `nvm use --lts`


# NPM

[npm Home Page] (https://www.npmjs.com)

## Using npm
* `npm -v`
* `npm init`
* `npm install npm@latest -g`


# Yarn 

[Yarn Home Page](https://yarnpkg.com/en/)

## [Install via Homebrew] (https://yarnpkg.com/en/docs/install#mac-stable)

* `brew install yarn`
* `brew install yarn --without-node`
* `brew upgrade yarn`

## Using yarn

* `yarn`
* `yarn init`
* `yarn add package@version/tag --dev`
* `yarn remove package`
* `yarn add --dev webpack babel-core babel-loader babel-preset-react babel-preset-es2015 node-sass css-loader sass-loader style-loader`
* `yarn add react react-dom`
