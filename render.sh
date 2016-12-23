#!/usr/bin/env bash

aglio -i api.apib -s --theme-template ./templates/index.jade --theme-style default --theme-style ./styles/_variable.less --theme-style ./styles/rewrite.less
