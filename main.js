const displayData = (content) => {
    result.value += content
}

const clearCalcScreen = () => {
    result.value = ""
}

const backSpaceCalc = () => {
    result.value = result.value.slice(0,-1)
}

const evalCalcExpr = () => {
    try{
        result.value = eval(result.value);
        if(result.value == "undefined" || result.value == "NaN"){
            result.value = "Invalid Express"
        }
    }catch{
        result.value = "Invalid Expression"
    }
}