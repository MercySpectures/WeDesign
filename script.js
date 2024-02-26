var menuToggler = document.getElementById("menuIcon");
var menuOptions = document.querySelector("nav ul");
menuToggler.addEventListener("click", () => {
    menuOptions.classList.toggle("showMenu");
});


var mission = document.querySelector(".tab1");
var vision = document.querySelector(".tab2");
var values = document.querySelector(".tab3");

var tabContent = document.querySelector(".tabContent p");

function removeActiveState(){
    mission.classList.remove("selectedTab");
    vision.classList.remove("selectedTab");
    values.classList.remove("selectedTab");
}

mission.addEventListener("click", () => {
    removeActiveState();
    mission.classList.add("selectedTab");
    tabContent.innerHTML = "<strong>Mission</strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, optio ad ea, voluptatem hic nesciunt temporibus accusamus illo doloribus praesentium quaerat provident ut ipsam unde quos delectus. Ducimus, culpa alias.";
})

vision.addEventListener("click", () => {
    removeActiveState();
    vision.classList.add("selectedTab");
    tabContent.innerHTML = "<strong>Vision</strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, optio ad ea, voluptatem hic nesciunt temporibus accusamus illo doloribus praesentium quaerat provident ut ipsam unde quos delectus. Ducimus, culpa alias.";
})

values.addEventListener("click", () => {
    removeActiveState();
    values.classList.add("selectedTab");
    tabContent.innerHTML = "<strong>Values</strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, optio ad ea, voluptatem hic nesciunt temporibus accusamus illo doloribus praesentium quaerat provident ut ipsam unde quos delectus. Ducimus, culpa alias.";
})

var prev = document.getElementById("prev");
var next = document.getElementById("next");
var serviceContentText = document.getElementById("servicesContentText");
var serviceContentTextArray = [ 
    "<strong>One</strong> Vestibulum congue luctus mauris, non dictum metus. Maecenas sodales mi a erat congue, nec hendrerit nunc porta. In vel porttitor diam. Mauris cursus lorem sed enim lobortis commodo. Ut a suscipit metus, sit amet facilisis quam. Sed blandit venenatis erat, in dictum ex sagittis pretium. Duis condimentum convallis nisl, non pharetra ligula dapibus sit amet. Ut mauris mi, congue vel condimentum ut, fringilla vel nunc.",
    "<strong>Two</strong> Vestibulum congue luctus mauris, non dictum metus. Maecenas sodales mi a erat congue, nec hendrerit nunc porta. In vel porttitor diam. Mauris cursus lorem sed enim lobortis commodo. Ut a suscipit metus, sit amet facilisis quam. Sed blandit venenatis erat, in dictum ex sagittis pretium. Duis condimentum convallis nisl, non pharetra ligula dapibus sit amet. Ut mauris mi, congue vel condimentum ut, fringilla vel nunc.",
    "<strong>Three</strong> Vestibulum congue luctus mauris, non dictum metus. Maecenas sodales mi a erat congue, nec hendrerit nunc porta. In vel porttitor diam. Mauris cursus lorem sed enim lobortis commodo. Ut a suscipit metus, sit amet facilisis quam. Sed blandit venenatis erat, in dictum ex sagittis pretium. Duis condimentum convallis nisl, non pharetra ligula dapibus sit amet. Ut mauris mi, congue vel condimentum ut, fringilla vel nunc.",
    "<strong>Four</strong> Vestibulum congue luctus mauris, non dictum metus. Maecenas sodales mi a erat congue, nec hendrerit nunc porta. In vel porttitor diam. Mauris cursus lorem sed enim lobortis commodo. Ut a suscipit metus, sit amet facilisis quam. Sed blandit venenatis erat, in dictum ex sagittis pretium. Duis condimentum convallis nisl, non pharetra ligula dapibus sit amet. Ut mauris mi, congue vel condimentum ut, fringilla vel nunc.",
    "<strong>Five</strong> Vestibulum congue luctus mauris, non dictum metus. Maecenas sodales mi a erat congue, nec hendrerit nunc porta. In vel porttitor diam. Mauris cursus lorem sed enim lobortis commodo. Ut a suscipit metus, sit amet facilisis quam. Sed blandit venenatis erat, in dictum ex sagittis pretium. Duis condimentum convallis nisl, non pharetra ligula dapibus sit amet. Ut mauris mi, congue vel condimentum ut, fringilla vel nunc.",
    "<strong>Six</strong> Vestibulum congue luctus mauris, non dictum metus. Maecenas sodales mi a erat congue, nec hendrerit nunc porta. In vel porttitor diam. Mauris cursus lorem sed enim lobortis commodo. Ut a suscipit metus, sit amet facilisis quam. Sed blandit venenatis erat, in dictum ex sagittis pretium. Duis condimentum convallis nisl, non pharetra ligula dapibus sit amet. Ut mauris mi, congue vel condimentum ut, fringilla vel nunc."
];

var count = 0;

serviceContentText.innerHTML = serviceContentTextArray[count];

prev.addEventListener("click", () => {
    if(count <= 0){
        count = serviceContentTextArray.length;
        serviceContentText.innerHTML = serviceContentTextArray[--count];
    }
    else{
        serviceContentText.innerHTML = serviceContentTextArray[--count];
    }
})

next.addEventListener("click", () => {
    if(count >= serviceContentTextArray.length - 1){
        count = 0;
        serviceContentText.innerHTML = serviceContentTextArray[count];
    }
    else{
        serviceContentText.innerHTML = serviceContentTextArray[++count];
    }
})

var currentYear = new Date().getFullYear();
var copyrightYear = document.getElementById("year");

window.onload = () => {
    var year = new Date().getFullYear();
    copyrightYear.innerHTML = year
}                       
