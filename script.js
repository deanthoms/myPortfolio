/* This Page Contains the JS script for the Projects page */

let pricingModelTitle = document.getElementById("pricingModel");
let pricingModelPara = document.getElementById("pricingModelDesc");


let displayText = (element) => {
    if (element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }    
}

pricingModelTitle.addEventListener("click",function(){displayText(pricingModelPara)});
