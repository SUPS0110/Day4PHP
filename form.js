var  name1=document.getElementById("name")

var age=document.getElementById("age")
var submit=document.getElementById("submit")
submit.addEventListener("click",function(){            //here submit is variable
    alert(name1.value + age.value)                  
})