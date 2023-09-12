document.addEventListener('DOMContentLoaded', function() {

    let form = document.getElementById('form');

    form.addEventListener("submit", function(e){
        e.preventDefault();
        let fname = document.getElementById("fname");
        let lname = document.getElementById("lname");
        let email = document.getElementById("email");
        let phone = document.getElementById("phone");
        let address = document.getElementById("address");
        let city = document.getElementById("city");
        let state = document.getElementById("state");
        let country = document.getElementById("country");
        let zipcode = document.getElementById("zipcode");
        let gender = document.getElementById("gender");
        let agree = document.getElementById("agree");
        let error = document.getElementsByClassName("error_msg");
        let fnerror_msg = document.getElementById("fnerror_msg");
        let lnerror_msg = document.getElementById("lnerror_msg");
        let emerror_msg = document.getElementById("emerror_msg");
        let pherror_msg = document.getElementById("pherror_msg");
        let adpherror_msg = document.getElementById("adpherror_msg");
        let cterror_msg = document.getElementById("cterror_msg");
        let sterror_msg = document.getElementById("sterror_msg");
        let zperror_msg = document.getElementById("zperror_msg");
        let cnerror_msg = document.getElementById("cnerror_msg");
        let agerror_msg = document.getElementById("agerror_msg");

//first name validation
        if(fname.value != ""){
            fnerror_msg.style.display = "none";
        }else{
            fnerror_msg.style.display = "block";
            fname.focus();
        }
//last name validation  
        if(lname.value != ""){
            lnerror_msg.style.display = "none";
        }
        else{
            lnerror_msg.style.display = "block";
            lname.focus();
        }
//email validation
        if(email.value != ""){
            emerror_msg.setAttribute('style', 'display: none;');
        }else{
            emerror_msg.style.display = "block";
            email.focus();
        }
//phone validation        
        if(phone.value != ""){
            pherror_msg.setAttribute('style', 'display: none;');
        }else{
            pherror_msg.setAttribute('style', 'display: block;');
            phone.focus();
        }
// adddress    validation    
        if(address.value != ""){
            adpherror_msg.setAttribute('style', 'display: none;');
        }else{
            adpherror_msg.setAttribute('style', 'display: block;');
            address.focus();
        }
// city validation        
        if(city.value != ""){
            cterror_msg.setAttribute('style', 'display: none;');
        }else{
            cterror_msg.setAttribute('style', 'display: block;');
            city.focus();
        }
 // state validation      
        if(state.value != ""){
            sterror_msg.setAttribute('style', 'display: none;');
        }else{
            sterror_msg.setAttribute('style', 'display: block;');
            state.focus();
        }
//    zipcode validation    
        if(zipcode.value != ""){
            zperror_msg.setAttribute('style', 'display: none;');
        }else{
            zperror_msg.setAttribute('style', 'display: block;');
            zipcode.focus();
        }
// country validation       
        if(country.value != ""){
            cnerror_msg.setAttribute('style', 'display: none;');
        }else{
            cnerror_msg.setAttribute('style', 'display: block;');
            country.focus();
        }



        //agreed validation
        
        if(!agree.checked){
            agerror_msg.setAttribute('style', 'display: block;');
        }else{
            agerror_msg.setAttribute('style', 'display: none;');

        }

    })

});