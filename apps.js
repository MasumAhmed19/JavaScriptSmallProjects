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



// project 3

var progress = document.querySelector('#progress')

var count=0;

var prgsTime = setInterval(function(){

    if(count > 100){
        clearInterval(prgsTime); // clear interval na dile, eta choltei thakbe. tai setinterval k ekta variable e rekhe seta condition wise clearInterval krte hoy
    }else{
        count++;
        progress.style.width = count+'%'
    }

}, 50)




// projects 4
// array of objects

var searchInp = document.querySelector('#searchInp')

var data = [
    {name:"masum", src:"./images/img1.webp"},
    {name:"masumi", src:"./images/img2.webp"},
    {name:"masuma", src:"./images/img3.webp"},
    {name:"maaaama", src:"./images/img4.webp"},
    {name:"ahmed", src:"./images/img5.webp"},
    {name:"ahmde", src:"./images/img6.webp"},
    {name:"kiya", src:"./images/img7.webp"},
]


var dataStore =""

data.forEach(function(elem){
    dataStore += `<div class="flex flex-col items-center gap-5 m-5">
                 <img class="object-cover border-4 border-gray-200 rounded-full w-[200px] h-[200px] mt-4" src="${elem.src}" alt="">
                 <p class="lato font-bold">${elem.name}</p>
            </div>`
})

document.querySelector('#people').innerHTML = dataStore

// input event
document.querySelector('#searchInp').addEventListener("input", function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(searchInp.value)
    })

    var afterSearch =""

    matching.forEach(function(elem){
        afterSearch += `<div class="flex flex-col items-center gap-5 m-5">
                 <img class="object-cover border-4 border-gray-200 rounded-full w-[200px] h-[200px] mt-4" src="${elem.src}" alt="">
                 <p class="lato font-bold">${elem.name}</p>
            </div>`
    })

    document.querySelector('#people').innerHTML = afterSearch
})
