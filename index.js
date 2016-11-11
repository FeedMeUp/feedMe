var form = require('./hyperscript/form')
var food = require('./hyperscript/food')
var homepage = require('./hyperscript/homepage')
var morphdom = require('morphdom')
var h = require('hyperscript')
var request = require('superagent')

var main = document.querySelector('main')
var home = homepage(goToForm, goToFood)

function updatePage(newPage) {
    morphdom(main, h('main', {}, newPage))
}

updatePage(home)

function goToForm(){
  updatePage(form(goToHomepage))
}
function goToFood(){
  request
    .get('https://feedmeapi.herokuapp.com/api/v1/food')
    .end(function(err, res){
      console.log(res.body);
      updatePage(food(goToHomepage, res.body))
    })
}
function goToHomepage(){
  updatePage(home)
}
// function getFood(){
//   // e.preventDefault()
//   request
//     .get('https://feedmeapi.herokuapp.com/api/v1/food')
//     .end(function(err, res){
//       console.log(res.body);
//     })
// }
