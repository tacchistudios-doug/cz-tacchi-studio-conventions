# cz-conventional-changelog

Status:
[![npm version](https://img.shields.io/npm/v/cz-conventional-changelog.svg?style=flat-square)](https://www.npmjs.org/package/cz-conventional-changelog)
[![npm downloads](https://img.shields.io/npm/dm/cz-conventional-changelog.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cz-conventional-changelog&from=2015-08-01)
[![Build Status](https://img.shields.io/travis/commitizen/cz-conventional-changelog.svg?style=flat-square)](https://travis-ci.org/commitizen/cz-conventional-changelog)

Part of the [commitizen](https://github.com/commitizen/cz-cli) family. Prompts for [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) standard.

#### Conventional commit messages as a global utility

Install `commitizen` globally, if you have not already.

```
npm install -g commitizen
```

Install your Tacchi Studios commit adapter.
```
npm install -g tacchistudios-doug/cz-tacchi-studio-conventions
```

Create a `.czrc` file in your `home` directory, with `path` referring to the preferred, globally installed, `commitizen` adapter

```
echo '{ "path": "cz-tacchi-studio-conventions" }' > ~/.czrc
```
