
        let arr1 =["🍕", "🍔", "🍟", "🍗", "🍠", "🥟"];

        let arr =
        ["🍰", "🍇", "🍉", "🍌"];

        
        

        let a = Math.floor(Math.random() * arr1.length);
        
        let b = arr1[a];

        function _id(name) {
            
            return document.getElementById(name);

        }
        _id("list").innerHTML += arr;
        function _tag(name) {
            return document.getElementsByTagName(name);

        }
        let element = _tag("fieldset")[0].children;
        console.log(element[3]);
        element[1].addEventListener("click", pu);
        function pu() {
           
        let a = Math.floor(Math.random() * arr1.length);
        
        let b = arr1[a];

            let x=arr.push(b);
            let newarray=_id("list").innerHTML = arr;
            // console.log(b);

            return  newarray;
        }
        element[2].addEventListener("click", unshift);
        function unshift() {
            let a = Math.floor(Math.random() * arr1.length);
        
            let b = arr1[a];
    

            arr.unshift(b);
            _id("list").innerHTML = arr ;
            console.log(b);

            console.log("unshift");
        }
        // element[3].addEventListener("click", Select);
        // function Select() {
           

            
        // }

        // _tag("feildset")[0].addEventListener("change",insert);

         element[3].addEventListener("click", insert);
        function insert() {
            let a = Math.floor(Math.random() * arr1.length);
        
            let b = arr1[a];
    
            let val = _tag("select")[0].value;
            console.log(val);
               if (val == 0) {
                    alert("Please select position");
               }

            if (val == 1) {
                arr.splice(1, 0, b);
                _id("list").innerHTML = arr;

            }
            if (val == 2) {
                arr.splice(2, 0, b);

                document.getElementById("list").
                    innerHTML = arr;


            }
            if (val == 3) {
                arr.splice(3, 0, b);

                document.getElementById("list").
                    innerHTML = arr;


            }
            if (val == 4) {
                arr.splice(4, 0, b);

                document.getElementById("list").
                    innerHTML = arr;


            }



        }
        console.log(element);
        let element2 = _tag("fieldset")[01].children;
        console.log(element2);
        element2[1].addEventListener("click",_pop);
        function _pop() {
            arr.pop();

            document.getElementById("list").
            innerHTML = arr;
            
        }
        element2[2].addEventListener("click",_shift);
        function _shift() {
            arr.shift();

            document.getElementById("list").
            innerHTML = arr;
            
        }
        // element2[3].addEventListener("click",Select);
        element2[3].addEventListener("click",Remove);
        function Remove() {
           let R_element= element2[4].value;
             if (R_element == 0) {
                    alert("Please select position");
               }
           if(R_element==1){
            arr.splice(1,1);
            
            document.getElementById("list").
            innerHTML = arr;

           }
           if(R_element==2){
            arr.splice(2,1);
            
            document.getElementById("list").
            innerHTML = arr;

           }if(R_element==3){
            arr.splice(3,1);
            
            document.getElementById("list").
            innerHTML = arr;

           }
           if(R_element==4){
            arr.splice(4,1);
            
            document.getElementById("list").
            innerHTML = arr;

           }

            
        }



