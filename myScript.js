function append(e)
{
    if(document.getElementById("screen").value.length>100){
    alert("operation Limit exceeded")
    }
    else{
    document.getElementById("screen").value+=e
    }
}  
function calculate()
{
    let x = document.getElementById("screen").value
    let y = eval(x)
    document.getElementById("screen").value = y
}
function clr()
{
    document.getElementById("screen").value = ""
}