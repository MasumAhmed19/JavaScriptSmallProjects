var ulList = document.querySelector("#ulList")
var addBtn = document.querySelector("#addBtn")
var removeBtn = document.querySelector("#removeBtn")
var inpBox = document.querySelector("#inpBox")



addBtn.addEventListener("click", function(){
    const inpText = inpBox.value
    if(inpText!==""){
        
        var li = document.createElement('li')
        li.innerText = inpText
        ulList.appendChild(li)
        inpBox.value =""
    }

})

removeBtn.addEventListener("click", function(event){
    if(ulList.lastChild){
        ulList.removeChild(ulList.lastChild)
    }
})



// Project 2
var paraDiv = document.querySelector("#paraDiv")
var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var btn3 = document.querySelector("#btn3")
var param = document.querySelectorAll(".param")

param[0].style.display="block"

btn1.addEventListener("click", function(){
    param[0].style.display="block"
    param[1].style.display="none"
    param[2].style.display="none"
})

btn2.addEventListener("click", function(){
    param[1].style.display="block"
    param[0].style.display="none"
    param[2].style.display="none"
})

btn3.addEventListener("click", function(){
    param[2].style.display="block"
    param[1].style.display="none"
    param[0].style.display="none"
})

