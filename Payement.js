function _Id(name) {
    return document.getElementById(name);   
}
function _Class(name) {
    return document.getElementsByClassName(name);   
}
function _Tag(name) {
    return document.getElementsByTagName(name);   
}
function _Name(name) {
    return document.getElementsByName(name);   
}
_Id("first-form").style.display="none";
    _Id("second-form").style.display="none";
    _Id("third-form").style.display="none";

_Id("start-btn").addEventListener("click",DisplayMethod)
function DisplayMethod() {
    _Id("radio-collection").classList.toggle("Toggle_Data");
    _Id("radio-collection").style.display="block";
     _Id("main-container").style.display="flex";
}
_Id("card").addEventListener("click",CreditCardForm);
function CreditCardForm() {
    _Id("first-form").style.display="block";
    _Id("second-form").style.display="none";
    _Id("third-form").style.display="none";
}

_Id("upi").addEventListener("click",UpiCardForm);
function UpiCardForm() {
    _Id("first-form").style.display="none";
    _Id("second-form").style.display="block";
    _Id("third-form").style.display="none";
}

_Id("account").addEventListener("click",AccountForm);
function AccountForm() {
    
    _Id("first-form").style.display="none";
    _Id("second-form").style.display="none";
    _Id("third-form").style.display="block";
}
_Id("cardnumber").addEventListener("focus",Validation_1);
_Id("cardname").addEventListener("focus",Validation_2);

_Id("cardnumber").addEventListener("blur",validatecardno)
function validatecardno() {
    var cardsarry = ['1234567891011213', '1415161718192021'];
var cardno = "";

    cardno = document.getElementById("cardnumber").value;

    if (!cardsarry.includes(cardno)) {

        document.getElementById("card-error").innerHTML = "Enter Valid Card Number";
        return false;
    }
    else {

        return true;
    }
}
function Validation_1() {
    let ElementNumber=_Id("cardnumber").value;
     let CardType=_Id("cardtype").value;
  
    if(ElementNumber.length==0){
        _Id("card-error").innerHTML="Credit/Debit Card must be 16 numeric value";
        return false;
    }
    if((ElementNumber.length < 16 )||(ElementNumber.length > 16)){
        _Id("card-error").innerHTML="Enter a valid Number";
        return false;
    }
   
    else{
        return true;
    }
}
function Validation_2() {    let ElementName=_Id("cardname").value;
if((ElementName.length==0)||(!isNaN(ElementName))){
    _Id("card-error").innerHTML="Please Enter your full name and must be alphabets";
    return false;
} 
 
else{

    _Id("card-error").innerHTML="Please Select the Card Type ";
   
    return true;
}

}

function CvvExp() {
let ElementName=_Id("cardname").value;
let ElementNumber=_Id("cardnumber").value;
let CvvNum=_Id("cardnumber2").value;
let   CardType  = _Id("cardtype").value;



if(( Validation_2()==true && Validation_1()==true &&  validatecardno()==true) && (CardType == "1" || CardType == "2" || CardType == "3" || CardType == "4")){
    

    let date=new Date().toISOString().substring(0,10);
_Id("cardexpiry").value=date;

let RandomNum = Math.floor(Math.random()*1000)+100;
// console.log(RandomNum); 
localStorage.setItem("RandomCvv",RandomNum);
// let x = localStorage.RandomCvv;

_Id("card-error").innerHTML= "Enter Cvv Number" + " " + RandomNum;

    // console.log(CvvNum);
    // Table will be Added here
    let Arr = [];
let Obj = {};
Obj.CreditNum=_Id("cardnumber").value;
Obj.CreditName=_Id("cardname").value;
Obj.CreditDate=_Id("cardexpiry").value;
Obj.PayMethod=_Id("cardtype").value;
Arr.push(Obj);
 console.log(Arr);

if(CvvNum.value == RandomNum.value){
     _Id("Save-Card").addEventListener("click",TableData)
        function TableData(){
            // console.log("run");
    let NewRow = `<tr id="NewRow">
    <td>${Arr[0].CreditName}</td>
    <td id="method">Credit/Debit</td>
    <td><button class="btn btn-sm btn-secondary" id="Detail" name="myplane">Full Detail</button class="btn btn-secondary">
    </td>
    <td><button class="btn btn-sm btn-secondary" id="RemoveRow"   >Remove</button class="btn btn-secondary"></td>
</tr>`;

_Id("Records").insertAdjacentHTML("beforeend",NewRow);
// console.log(document.querySelectorAll("myplane"));
_Id("first-form").reset();

_Id("RemoveRow").addEventListener("click",RemoveRecord);
 function RemoveRecord() {
  _Id("NewRow").remove();

    
 }
 _Id("Detail").addEventListener("click",ShowRecord);
 function ShowRecord() {
    // console.log(Arr[0]);

    _Id("ClientRecord").innerHTML=`<h1>Card Detail</h1> <br>
    Card Number:${Arr[0].CreditNum} <br>
    Card Name:${Arr[0].CreditName}<br>
    Card Date:${Arr[0].CreditDate}<br>
    Payment Method:${Arr[0].PayMethod}<br>

       `
      
 }

        }
     
 }
 }}
 
_Id("GenerateCvv").addEventListener("click",CvvExp);
 _Id("Save-Card").addEventListener("click",function(event){event.preventDefault()});

_Id("GenerateCvv").addEventListener("click",function(event){event.preventDefault()});
// Upi form validations
_Id("UpiCvv").addEventListener("click",function(event){event.preventDefault()});

_Id("upinumber").addEventListener("focus",Validation_Upi);
function Validation_Upi() {
    let UpiNumber=_Id("upinumber").value;
    if((UpiNumber.length==0) || (UpiNumber.length != "16")){
        _Id("upi-error").innerHTML="Upi Number  must be 16 numeric value";
       
        return false;
    }
    
    else{
        return true;
    }
    
}
_Id("upiname").addEventListener("focus",ValidationUpiName);
function ValidationUpiName() {
    let UpiName=_Id("upiname").value;
    if((UpiName.length==0)||(!isNaN(UpiName))){
        _Id("upi-error").innerHTML="Please Enter your full name and must be alphabets";
        return false;
    } 
    
    else{
        return true;
    }
}
_Id("SaveUpi").addEventListener("click",function(event){event.preventDefault()});
_Id("UpiCvv").addEventListener("click",ValidateUpiCvv);
function ValidateUpiCvv() {
    let Upiarr =[1234567891011213 , 1415161718192021 ];
    let UpiNumber=_Id("upinumber").value;
    // console.log(typeof UpiNumber);
    let Upi_TypNumber= Number(UpiNumber);
    console.log(Upiarr);
    if(!Upiarr.includes(Upi_TypNumber)){
        _Id("upi-error").innerHTML="Please Enter Valid Number";
   return false;
    }
 
   else if((Validation_Upi()==true) && (ValidationUpiName()==true) && (Upiarr.includes(Upi_TypNumber))){
      
let UPiR_Num = Math.floor(Math.random()*1000)+100;

_Id("upi-error").innerHTML="Enter Cvv Number" + " " + UPiR_Num ;
let UpiCvv= _Id("cardnumber-Upi").value;
let Arr_Upi = [];
let Obj_Upi = {};
Obj_Upi.UpiNum = _Id("upinumber").value;
Obj_Upi.UpiName = _Id("upiname").value;
Arr_Upi.push(Obj_Upi);

if(UPiR_Num.value == UpiCvv.value){
    _Id("SaveUpi").addEventListener("click",TableData)
       function TableData(){
          let UpiRow = ` <tr id="UpiRecordRow">
          <td>${Arr_Upi[0].UpiName}</td>
          <td>Upi</td>
          <td><button class="btn btn-sm btn-secondary" id="UpiDetail">Full Detail</button class="btn btn-secondary">
          </td>
          <td><button class="btn btn-sm btn-secondary" id="RemoveUpi">Remove</button class="btn btn-secondary"></td>
      </tr>`
      _Id("Records").insertAdjacentHTML("beforeend",UpiRow)
      _Id("second-form").reset();
      _Id("UpiDetail").addEventListener("click",UpiRecord);
      function UpiRecord() {
          _Id("ClientRecord").innerHTML = `<h1>Upi Detail</h1>
          Card Number: ${Arr_Upi[0].UpiNum}   <br>
          Card Name:${Arr_Upi[0].UpiName }   <br>`
          
      }
      _Id("RemoveUpi").addEventListener("click",RemoveRow);
      function RemoveRow() {
          _Id("UpiRecordRow").remove();
       
      }
       } return true;
   
}
    }
    
}


// Account Payment Form
_Id("accountnumber").addEventListener("focus",ValidateAc);
let AcName = _Id("accountname").value;
let AcNum = _Id("accountnumber").value;
let AcRnum = _Id("reaccountnumber").value;
let Accode = _Id("IfscCode").value;
let AcBranch = _Id("Branch").value;
let Ac_cvv  =   _Id("Accv").value;
       
function ValidateAc() {


    if((AcNum.length == 0 )|| (AcNum.length != "16"))
    {
        _Id("account-error").innerHTML=" Number must be 16 numeric value";
        return false;
    }
 
   
    
}
   

_Id("accountname").addEventListener("focus",ValidateName);
function ValidateName() {

    if((AcName.length == 0) || (!isNaN(AcName)))
    {
        _Id("account-error").innerHTML=" Please Enter your full name and must be alphabets";
        return false;
    }
   
}

_Id("get-cvv").addEventListener("click",function(event){
    event.preventDefault()
});
_Id("get-cvv").addEventListener("click",AccountPayment);
function AccountPayment() {
    let AcName = _Id("accountname").value;
let AcNum = _Id("accountnumber").value;
let AcRnum = _Id("reaccountnumber").value;
let Accode = _Id("IfscCode").value;
let AcBranch = _Id("Branch").value;
let Ac_cvv  =   _Id("Accv").value;
var cardsarry = [1234567891011213, 1415161718192021];
let AcTyp_Num = Number(AcNum)
// console.log(typeof AcNum);
if(!isNaN(AcName)){
    _Id("account-error").innerHTML=" Please Enter your full name and must be alphabets";
    return false;
}
if(!cardsarry.includes(AcTyp_Num )){
    _Id("account-error").innerHTML=" please Enter Valid Number";
    return false;
}
   if(AcNum != AcRnum){
    _Id("account-error").innerHTML=" Please Re-Enter your Account Number";
    return false;
   }
   if((Accode.length == 0) || (Accode.length != "10")){
    _Id("account-error").innerHTML=" Please Enter IFSC Code 10 Digit";
    return false;
   }
   if(AcBranch.length == 0){
    _Id("account-error").innerHTML=" Please Enter Branch Name";
    return false;
   }
//    if ((AcNum.value != "1234567891011213") || (AcNum.value != "1415161718192021")) {
//     _Id("account-error").innerHTML=" Please Enter Valid Number ";
//     return false;
// }

   if((AcNum == AcRnum) && (Accode.length != 0 && Accode.length == "10" ) && (AcBranch.length != 0) && (cardsarry.includes(AcTyp_Num )) ){
let Randomcv = Math.floor(Math.random()*1000)+100;
// console.log("right");

_Id("account-error").innerHTML="Enter Cvv Number" + " " +Randomcv;

_Id("AccountDetail").addEventListener("click",RecordData);
 
function RecordData() {
    

if(Randomcv.value == Ac_cvv.value){


let Row = `  <tr id="Row">
<td>Iqra</td>
<td>Account</td>
<td><button class="btn btn-sm btn-secondary" id="FullDetail">Full Detail</button class="btn btn-secondary">
</td>
<td><button class="btn btn-sm btn-secondary" id="Remove">Remove</button class="btn btn-secondary"></td>
</tr>`;
let Element = _Id("Records");
Element.insertAdjacentHTML("beforeend",Row);
_Id("third-form").reset();
let Arr = [];
let Object = {};
Object.Name= _Id("accountnumber").value;
Object.Number= _Id("reaccountnumber").value;
Object.Ifsc = _Id("IfscCode").value;
Object.Branch = _Id("Branch").value;
Object.Cvv =   _Id("Accv").value;
Arr.push(Object);
// console.log(Arr);
_Id("Remove").addEventListener("click",RemoveRec);
function RemoveRec() {
_Id("Row").remove();
    
}
_Id("FullDetail").addEventListener("click",RecordData);
function RecordData() {
    _Id("ClientRecord").innerHTML=`
    <h1>Account Payment</h1> <br>
    Name:${Arr[0].Name} <br>
    Number:${Arr[0].Number}<br>
    IFSC Code:${Arr[0].Ifsc}<br>
    Branch:${Arr[0].Branch}<br>
    `
    
}}}

return true;
   }
    


}_Id("AccountDetail").addEventListener("click",function(event){event.preventDefault()});

     
