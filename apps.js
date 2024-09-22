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



// // Project 2
// var paraDiv = document.querySelector("#paraDiv")
// var btn1 = document.querySelector("#btn1")
// var btn2 = document.querySelector("#btn2")
// var btn3 = document.querySelector("#btn3")
// var param = document.querySelectorAll(".param")

// param[0].style.display="block"

// btn1.addEventListener("click", function(){
//     param[0].style.display="block"
//     param[1].style.display="none"
//     param[2].style.display="none"
// })

// btn2.addEventListener("click", function(){
//     param[1].style.display="block"
//     param[0].style.display="none"
//     param[2].style.display="none"
// })

// btn3.addEventListener("click", function(){
//     param[2].style.display="block"
//     param[1].style.display="none"
//     param[0].style.display="none"
// })


// param.forEach(function(param, index){

// })



var buttons = document.querySelectorAll("button[id^='btn']"); // Select all buttons with id starting with 'btn'

// button[id^='btn']:

// This is a CSS attribute selector that targets button elements where the id attribute starts with "btn".
// ^=: This means "starts with." In this case, it finds any button whose id begins with the string "btn". For example:
// A button with id="btn1" will match.
// A button with id="btn2" will match.
// A button with id="btn3" will match.
// The result is a collection of all the buttons on the page whose id starts with "btn".



// Project 2
var param = document.querySelectorAll(".param");
var buttons = document.querySelectorAll("button[id^='btn']"); // Select all buttons with id starting with 'btn'

// Initially display the first paragraph
showParagraph(0);

// Add event listeners to all buttons
buttons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        showParagraph(index);
    });
});

// Function to show the paragraph at a given index and hide the rest
function showParagraph(index) {
    param.forEach(function(p, i) {
        p.style.display = (i === index) ? "block" : "none"; // Show the selected paragraph, hide others
    });
}
