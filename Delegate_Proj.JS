// let Element = document.getElementById("SelectForm");
function _id(name) {
    return document.getElementById(name);
    
}
function _class(name) {
    return document.getElementsByClassName(name);
    
}
function _tag(name) {
    return document.getElementsByTagName(name);
    
}
let Element=_id("SelectForm").children;
console.log(Element);
_id("SelectForm").addEventListener("change",changeFunction);
function changeFunction() {
    let ElementValue=_id("SelectForm").value;
    _id("DisplayForm").innerHTML=` `;


    for(let i =1 ; i <=ElementValue ; i++){
        _id("DisplayForm").innerHTML+=`<div>
        <h1>Delegate Registration Details-${i}</h1>
        <p>Please Enter the details of the Delegate that you wish to register</p>
        <form id="form" class="DelForm">
            <div class="row">
              <div class="col pb-3">
                <label for="" class="form-label">salutation</label>
                <select class="form-control"  name="" id="select${i}">
                    <option value="">Please Select</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Dr">Dr</option>
                    <option value="Er">Er</option>
                </select>
              </div>
              <div class="col pb-3">
                <label for="" class="form-label">Delegate First Name:</label>
                <input type="text" class="form-control" placeholder="Delegate First Name" name="pswd" id="fname${i}" value="">
              </div>
              
              <div class="col pb-3">
                
                <label for="" class="form-label">Delegate Last Name:</label>
                <input type="text" class="form-control" placeholder="Delegate Last Name" name="pswd" id="lname${i}" value="">
              </div>
            </div>
            <div class="row pb-3">
           
                <div class="col">
                    <label for="" class="form-label">Delegate Email:</label>
                  <input type="email" class="form-control" placeholder="Enter email" name="email" id="dmail${i}">
                </div>
                <div class="col pb-3">
                     <label for="" class="form-label">Delegate Telephone:</label>
                  <input type="number" class="form-control" placeholder="Enter Telephone number" name="pswd" id="dtel${i}">
                </div>
                
                <div class="col pb-3">
                    
                <label for="" class="form-label">Delegate Job Title:</label>
                  <input type="text" class="form-control" placeholder="Enter Job Title" name="pswd" id="djob${i}">
                </div>
              </div>
              <div class="row pb-3">
                <div class="col col-4">
                    <label for="" class="form-label">Delegate Passport Number:</label>
                    <input type="text" class="form-control " name="" id="dpass${i}" placeholder="Enter Your Passport Number">
                  </div>
              </div>
          </form>
    </div>


        <form action="">
            <h1>PRODUCT AND FEES</h1>
            <ul class="list-group"></ul>
            <li class="list-group-item d-flex justify-content-between align-items-center mb-3">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check1" name="ProductFee" value="5900" >
                <label class="form-check-label" for="check1" id="ch1">All Access Delegate(Delegate)</label>
              </div>
              
              <span class="badge text-dark " id="rs1">USD 5900</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center mb-3">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check2" name="ProductFee" value="5100">
                <label class="form-check-label" for="check2" id="ch2">Strategic conference(Delegate)</label>
              </div>
              
              <span class="badge text-dark" id="rs2">USD 5100</span>
            </li>
              <li class="list-group-item d-flex justify-content-between align-items-center mb-3">
                <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check3" name="ProductFee" value="1858">
              <label class="form-check-label" for="check2" id="ch3">Technical Conferencepass - 4 days(Delegate)</label>
            </div>
                <span class="badge text-dark" id="rs3">USD 1858</span>
              </li>
                <li class="list-group-item d-flex justify-content-between align-items-center mb-3">
                  <div class="form-check">

                  <input type="checkbox" class="form-check-input" name="ProductFee" id="check4"   value="1485">
              <label class="form-check-label" id="ch4">Technical Conferencepass - 2 days(Delegate)</label>
            </div>

                  <span class="badge text-dark">USD 1485</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center mb-3">
                  <div class="form-check">
              <label class="form-check-label" id="ch4">Technical Conferencepass - 2 days(Delegate)</label>
                  <input type="checkbox" class="form-check-input" name="ProductFee" id="check5" value="1100" >
              <label class="form-check-label" id="ch5">Downstream Technical Conferencepass (Delegate)</label></div>

                  <span class="badge text-dark">USD 1100</span>
                </li>
                
                
              </div>`


        
    
    }
    
}
_id("Show").addEventListener("click",GrandTotal);
function GrandTotal() {
    _id("TotalGrand").innerHTML=`<div class="container-fluid" id="grand">
    <h1>PURCHASE SUMMARY</h1>
    <P>Total:(USD) <span id="showusd"></span></P>
  </div>`;
  var TotalUsd= document.getElementsByName("ProductFee");
  // console.log(TotalUsd);
  var num = 0 ;
  for (i=0 ; i<=TotalUsd.length ; i++){
    if(TotalUsd[i].checked==true){
      num = num + Number(TotalUsd[i].value);
     
      //  var Product=TotalUsd[i].nextElementSibling.innerHTML;
 
     } _id("showusd").innerHTML= num;
    
    //  _id("fee").innerHTML= num  ;
  }

  // console.log("run");
  // _id("TotalGrand").innerHTML+="runing";
 
}
_id("NextForm").addEventListener("click",CompanyDetail);
function CompanyDetail() {

  
    _id("CompanyForm").innerHTML=`  <section id="cominfo"  class="container-fluid">
    <h1>Company information:</h1>
    <form id="form2" >
      <div class="row ">
        <div class="col">
          <label for="" class="form-label">Company Name:</label>
        <input type="text" class="form-control" placeholder="" name="" id="cname">
      </div>
      <div class="col pb-3">
           <label for="" class="form-label">Street:</label>
        <input type="text" class="form-control" placeholder="" name="" id="cstreet">
      </div>
      
      <div class="col pb-3">
          
      <label for="" class="form-label">Town city:</label>
        <input type="text" class="form-control" placeholder=" " name="" id="ctown">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="" class="form-label">Country:</label>
      <input type="text" class="form-control" placeholder="" name="" id="ccountry">
    </div>
    <div class="col pb-3">
         <label for="" class="form-label">Zipcode:</label>
      <input type="number" class="form-control" placeholder="" name="" id="czip">
    </div>
    
    <div class="col pb-3">
        
    <label for="" class="form-label">State:</label>
      <input type="text" class="form-control" placeholder="" name="" id="cstate">
    </div>
  </div>
  
  <div>
    <h1>Billing Contact Info</h1>
    <form>
      <div class="row">
        <div class="col pb-3">
          <label for="" class="form-label">salutation</label>
          <select class="form-control"  name="" id="select2">
            <option value="">Please Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Dr">Dr</option>
            <option value="Er">Er</option>
          </select>
        </div>
        <div class="col pb-3">
          <label for="" class="form-label">First Name:</label>
          <input type="text" class="form-control" placeholder="First Name" name="pswd" id="Bill-fname">
        </div>
        
        <div class="col pb-3">
          
          <label for="" class="form-label">Last Name:</label>
          <input type="text" class="form-control" placeholder="Last Name" name="pswd"
          id="Bill-lname">
        </div>
      </div>
      <div class="row pb-3">
        
        <div class="col col-4">
            <label for="" class="form-label">Email:</label>
          <input type="email" class="form-control" placeholder="Enter email" name="email" id="Bill-email">
        </div>
        <div class="col pb-3 col-4">
             <label for="" class="form-label">Telephone:</label>
          <input type="number" class="form-control" placeholder="Enter Telephone number" name="pswd" id="number">
        </div>
        </div>
        <p>VAT Registered</p>
        <input type="radio" name="radio" id="option1" onclick="visiblity()"><label for="radio" class="option">Yes</label></input>
        <input type="radio" name="radio" id="option2" onclick="hide()"><label for="radio" class="option">No</label></input> <br>
        <div class="col pb-3 col-2">

          <input type="text" name="" id="vatnum"class="form-control " placeholder="Vat number">
        </div>
        </form>
      </div>
    </section> 
`

    
}
function visiblity() {
    _id("vatnum").style.display="block";
    
}
function hide() {
    _id("vatnum").style.display="none";
    
}
_id("SubmitForm").addEventListener("click",StudentTable);
function StudentTable() {

  _id("CompanyTable").innerHTML=`<table id="table2" class="tables">
  <tr>
    <th colspan="2"> Company Information
    </th>
  </tr>
    
    <tr>
      
      <th>Company Name</th>
      <td id="name"></td>
    </tr>
    <tr>
      <th>Street</th>
      <td id="street"></td>
    </tr>
    <tr>
      <th>Town/City</th>
      <td id="town"></td>
    </tr>
    <tr>
      <th>Country</th>
      <td id="country"></td>
    </tr>
    <tr>
      <th>Zipcode</th>
      <td id="zip"></td>
    </tr>
    <tr>
      <th>State</th>
      <td id="state"></td>
    </tr>
  
</table>
<table id="table3" class="tables">
  <tr>
    <th colspan="2">Billing Contact Info</th>
  </tr>
  <tr>
    <th>Salutation</th>
    <td id="sal"></td>
  </tr>
  <tr>
    <th>First Name</th>
    <td id="first"></td>
  </tr>
  <tr>
    <th>Last Name</th>
    <td id="last"></td>
  </tr>
  <tr>
    <th>Email</th>
    <td id="mail"></td>
  </tr>
  <tr>
    <th>Telephone</th>
    <td id="Company-phone"></td>
  </tr>
</table>
<table id="table4" class="tables">
  <tr>
    <th>Purchase Summary</th>
    <th>VAT Registered</th>
  </tr>
  <tr>
    <th>Total:USD <span id="usdrs">${_id("showusd").innerHTML}</span></th>
    <td id="tusd"></td>
  </tr>
</table>
  

`
h =document.getElementById("cname").value;
i =document.getElementById("cstreet").value;
j =document.getElementById("ctown").value;

k =document.getElementById("ccountry").value;
l =document.getElementById("czip").value;
m =document.getElementById("cstate").value;
n =document.getElementById("number").value;
//Billing contact info
o =_id("select2").value;
p=_id("Bill-fname").value;
q =_id("Bill-lname").value;
r =_id("Bill-email").value;
s =_id("number").value;
t =_id("vatnum").value;
// o =_id("select2").value;



document.getElementById("name").innerHTML += h;
document.getElementById("street").innerHTML += i;
document.getElementById("town").innerHTML += j;
document.getElementById("country").innerHTML += k;

document.getElementById("zip").innerHTML += l;
document.getElementById("state").innerHTML += m;
// document.getElementById("phone").innerHTML += n;

_id("sal").innerHTML = o;
_id("first").innerHTML = p;
_id("last").innerHTML = q;
_id("mail").innerHTML = r;
_id("Company-phone").innerHTML = s;
_id("tusd").innerHTML = t;

  let ArrDelegate=[ ];

    let ElementValue=_id("SelectForm").value;
    _id("Tables").innerHTML=` `;
    for(let i =1 ; i <=ElementValue ; i++){
       ObjDelegate={ };
       ObjDelegate.Salutation=_id("select"+i).value;
       ObjDelegate.Name=_id("fname"+i).value;
       ObjDelegate.LastName=_id("lname"+i).value;
       ObjDelegate.Email=_id("dmail"+i).value;
       ObjDelegate.Telephone=_id("dtel"+i).value;
       ObjDelegate.JobTitle=_id("djob"+i).value;
       ObjDelegate.passwordNumber=_id("dpass"+i).value;
       ObjDelegate.Total=_id("showusd").innerHTML;
       ArrDelegate.push(ObjDelegate);
       console.log(ArrDelegate);



    }



    for(let i =0 ; i <=ElementValue ; i++){
    _id("Tables").innerHTML+=`<div> <table id="table1" class="tables"> 
                            
    <tr><th colspan="3">NO of Delegate ${1+i}: </th></tr>
    <tr>
      <th>Salutation:</th>
      <th>Delegate First Name:</th>
      <th>Delegate Last Name:</th>
    </tr>
    <tr id="data">
    <td id="stion">${ArrDelegate[i].Salutation}</td>
      <td id="dfname">${ArrDelegate[i].Name}</td>
      <td id="dlname">${ArrDelegate[i].LastName}</td>
    </tr>
    <tr>
      <th>Delegate Email:</th>
      <th>Delegate Telephone:</th>
      <th>Delegate Job Title:</th>
    </tr>
    <tr>
      <td id="email">  ${ArrDelegate[i].Email} </td>
      <td id="tel">${ArrDelegate[i].Telephone}</td>
      <td id="job">${ArrDelegate[i].JobTitle}</td>
    </tr>
    <tr>
      <th colspan="2">Delegate password Number:</th>
      <th>Product And Fees:</th>
    </tr>
    <tr>
      <td colspan="2" id="passw">${ArrDelegate[i].passwordNumber} </td>
      <td id="fee"></td>
    </tr>
  </table>  </div> `


  

    }
   
  
   
}
function Record() {

  var TotalUsd= document.getElementsByName("ProductFee");
  // console.log(TotalUsd);
  var num = 0 ;
  var Product="";
  for (i=0 ; i<=TotalUsd.length ; i++){
    if(TotalUsd[i].checked==true){
      num = num + Number(TotalUsd[i].value);
     
      Product +=  TotalUsd[i].nextElementSibling.innerHTML;
      console.log(Product);
 
    }
     _id("showusd").innerHTML= num;
    
     _id("fee").innerHTML= num + "  " +Product ;
  
}
}document.getElementById("SubmitForm").addEventListener("click",Record)
