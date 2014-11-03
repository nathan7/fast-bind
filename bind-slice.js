'use strict';
module.exports = function(boundThis) {
  var f = this
  if (arguments.length === 1)
    return function() { return f.apply(boundThis, arguments) }

  var boundArgs = new Array(arguments.length - 1)
  for (var i = 1; i < arguments.length; i++)
    boundArgs[i - 1] = arguments[i]

  return function() {
    var args = boundArgs.slice()
    for (var i = 0; i < arguments.length; i++)
      args.push(arguments[i])
    return f.apply(boundThis, args)
  }
}
