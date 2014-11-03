'use strict';
module.exports = function(boundThis) {
  var fn = this
  if (arguments.length === 1)
    return function() { return fn.apply(boundThis, arguments) }

  var boundArgs = new Array(arguments.length - 1)
  for (var i = 1; i < arguments.length; i++)
    boundArgs[i - 1] = arguments[i]

  return function() {
    var boundLen = boundArgs.length
      , args = new Array(boundLen + arguments.length)
      , i
    for (i = 0; i < boundLen; i++)
      args[i] = boundArgs[i]
    for (i = 0; i < arguments.length; i++)
      args[boundLen + i] = arguments[i]
    return fn.apply(boundThis, args)
  }
}
