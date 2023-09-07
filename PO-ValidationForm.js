function _id(name) {
    return document.getElementById(name);
    
}
function _tag(name) {
    return document.getElementsByTagName(name);
    
}
_id("vbtn").addEventListener("click",Validations)
function Validations() {
    var username = document.getElementById("username").value;
            var amt=document.getElementById("amount").value;
            var rmnt=document.getElementById("ramount").value;
            var p_d=document.getElementById("paid").value;
             var blnc=document.getElementById("balance").value;

let amount=Number(amt);
let ramount=Number(rmnt);
let  paid=Number(p_d);
let  balance= Number(blnc)
console.log(typeof amount);
console.log(typeof ramount);
console.log(typeof paid);
console.log(typeof balance);
//    for(let i = 0 ; i<=6 ; i++){
//     let FormElement= _tag("input");

//     if (    FormElement[i].value.length==0
//         ) {
//             _id("warning").innerHTML = "All Feilds are Required!";
//             return false
        
//     }}
    
    if ((username.length < 5) || (username.length > 15)) {
        _id("warning").innerHTML = "Supplier Name must between 5 to 15...!";
        _id("username").style.borderColor = "red";
        return false;

    }
    if ((amt.length==0)||(isNaN(amt))) {
        _id("warning").innerHTML = "Please enter Po value(value must be number!)";
        _id("amount").style.borderColor = "red";
        return false;
}
if (rmnt.length== 0) {
    _id("warning").innerHTML = "Re-Enter Po Value";
            _id("ramount").style.borderColor = "red";
            return false;
   }
   if (amt!=rmnt) {
    _id("warning").innerHTML = "Value not matched!";
            _id("ramount").style.borderColor = "red";
            return false;
   }
   
   if (p_d > amt) {
    _id("warning").innerHTML = "Paid amount must be less than or equal to Po value";
            _id("paid").style.borderColor = "red";
            return false;
   }
   if(p_d.length==0){
    _id("warning").innerHTML = "Paid amount must be less than or equal to Po value";
    return false;


   }
   
   if((username.length!=0)&&(amt.length!=0)&&(rmnt.length!=0)&&(p_d.length!=0)){    
    let FormElement= _tag("input");

   console.log(FormElement);
   for (i = 0 ; i<=6 ; i++) {
    FormElement[i].style.borderColor="green";
   
   }

   _id("status").value ="Success";
   
   _id("vbtn").style.display="none";
  

   return true;
   }
}
   
   
// _id("resubmit").addEventListener("click",Validations)
   _id("resubmit").addEventListener("click",Details)
   function Details() {
    console.log("run");
if(Validations()==false){
    _id("vbtn").style.display="block";
    window.alert("validate the data first");
    document.getElementById("vbtn").style.display="block";
}
    if(Validations()==true){

 
        _id("tbody").innerHTML+=` <tr>
                
        <td>${username.value}</td>
        <td>${amount.value}</td>
        <td>${ramount.value}</td>
        <td>${balance.value}</td>
        </tr> <br>`
          
          document.forms[0].reset();
        //   _id("status").value ="Failed";
          _id("vbtn").style.display="block";
          
    let FormElement= _tag("input");

          for (i = 0 ; i<=6 ; i++) {
            FormElement[i].style.borderColor=" rgb(160, 158, 158)";
           
           }
          
        return  Validations();
   }}
   
document.getElementById("resubmit").addEventListener("click", (event) => {
    event.preventDefault();
    Validations();


   

 })

_id("paid").addEventListener("input",Oninput);
function Oninput() {
    var amount=document.getElementById("amount").value;
    var paid=document.getElementById("paid").value;
    var result= amount-paid;
    
    var balance=document.getElementById("balance").value=result;
  
    
}
// document.getElementById("vbtn").addEventListener("click", (event) => {
//      event.preventDefault();


//   })    
