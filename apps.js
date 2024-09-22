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