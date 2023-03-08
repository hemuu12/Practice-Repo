

let form=document.getElementById("form")
form.addEventListener("submit",function(event){
event.preventDefault()

let obj={
    name:form.name.value,
    address:form.address.value,
    username:form.username.value,

}


orderplaced()


})



function orderplaced(){

setTimeout(() => {
    alert("Your order is confirmed ")
}, 0);

setTimeout(() => {
    alert("Your order is being Packed ")
}, 3000);

setTimeout(() => {
    alert("Your order is in transit")
}, 8000);

setTimeout(() => {
    alert("Your order is out for delivery")
}, 10000);

setTimeout(() => {
    alert("Order delivered")
}, 12000);

}