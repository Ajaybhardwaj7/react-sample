
var keymirror  = require('keymirror');
var assign = require('object-assign');

var actions = keymirror({
    "CREATE" : null
})
var keycodes = {
    "ENTER_KEYCODE" : 13,
}
var events = {
    "CHANGE" : "CHANGE" 
}

module.exports = assign({} , {actions : actions} , {keycodes : keycodes} , {events : events});