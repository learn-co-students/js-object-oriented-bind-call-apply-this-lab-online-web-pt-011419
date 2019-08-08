//Your code here
function justInvoke(fn) {
    return fn();
  }

  function setThisWithCall(fn, arg1, arg2){
    return fn.call(arg1, arg2);
  }

  function setThisWithApply(fn, arg1, arg2){
      return fn.apply(arg1, arg2);
  }

  function returnNewFunctionOf( functionToBeCopied, thisValue){
       const copy = functionToBeCopied.bind(thisValue)
        return copy;
  }