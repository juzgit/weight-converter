//getting the html elements
let kilos = document.getElementById("kilos");
let pounds = document.getElementById("pounds");
let ounces = document.getElementById("ounces");

    //function to change to kilos to other units of measurements
    let changeKilos = () =>{
        //to able to add numbers into the input
        let kgs = kilos.value;
        //rounded of to two decimals
        pounds.value = (kgs * 2.205).toFixed(2);
        ounces.value = (kgs * 35.274).toFixed(2);
    };

     //function to change to pounds to other units of measurements
    let changePounds = () => {
         //to able to add numbers into the input
        let lbs = pounds.value;
        //rounded of to two decimals
        kilos.value = (lbs / 2.205).toFixed(2);
        ounces.value = (lbs * 16).toFixed(2);
    };

     //function to change to ounces to other units of measurements
    let changeOunces = () => {
         //to able to add numbers into the input
        let ozs = ounces.value;
        //rounded of to two decimals
        kilos.value = (ozs / 35.274).toFixed(2);
        pounds.value = (ozs / 16).toFixed(2);
    };

    //added addEventListeners to the three inputs and each input
    //has the relevant function with it.
kilos.addEventListener("input", changeKilos);
pounds.addEventListener("input", changePounds);
ounces.addEventListener("input", changeOunces); 
