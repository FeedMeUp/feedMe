var form = require('./hyperscript/form')
var food = require('./hyperscript/food')
var homepage = require('./hyperscript/homepage')
var morphdom = require('morphdom')
var h = require('hyperscript')
var request = require('superagent')

var main = document.querySelector('main')
var home = homepage(gotToForm, gotToFood)

function updatePage(newPage) {
    morphdom(main, h('main', {}, newPage))
}

updatePage(home)

function gotToForm(){
  updatePage(form(gotToHomepage))
}
function gotToFood(){
  updatePage(food(gotToHomepage, getFood))
}
function gotToHomepage(){
  updatePage(home)
}
function getFood(){
  // e.preventDefault()
  request
    .get('http://localhost:3000/api/v1/food')
    .end(function(err, res){
      console.log(res.body);
    })
}
