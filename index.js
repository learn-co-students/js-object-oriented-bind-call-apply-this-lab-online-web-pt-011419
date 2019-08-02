//Your code here
function justInvoke(fn) {
return fn();
}

function setThisWithCall(fn, thisValue, argument) {
return fn.call(thisValue, argument)
}

function setThisWithApply(fn, thisValue, ourArgument) {
  return fn.apply(thisValue, ourArgument)
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const newFunction = functionToBeCopied.bind(thisValue);
  return newFunction;
}
