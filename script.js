const head1= document.getElementById("header");
    head1.textContent = "Text Changed.";
const text1= document.getElementsByClassName("text");
for(let i=0; i<text1.length; i++){
    text1[i].style.color= "blue";
}
const list1= document.getElementsByClassName("list-item");
for(let i=0; i<list1.length; i++){
    list1[i].style.color= "green";
    console.log(list1[i].textContent);
}
list1[0].style.backgroundColor= "yellow";

const li1 = document.querySelectorAll(li);
li1.forEach(item=>{
    console.log(item.textContent);
});

