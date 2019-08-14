//Your code here
function justInvoke(fn) {
    return fn()
}

function setThisWithCall(fn, thisValue, arg) {
    return fn.call(thisValue, arg)
}

function setThisWithApply(fn, value, [arg1, arg2]) {
    return fn.apply(value, [arg1, arg2])
}

function returnNewFunctionOf(fn, thisValue) {
    return fn.bind(thisValue)
}
