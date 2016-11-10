var form = require('./hyperscript/form')
var homepage = require('./hyperscript/homepage')

var main = document.querySelector('main')
var mainHome = homepage.querySelector('main')

main.appendChild(homepage)
main.appendChild(form)
