let kilos = document.getElementById("kilos");
let pounds = document.getElementById("pounds");
let ounces = document.getElementById("ounces");

    let changeKilos = () =>{
        let kgs = kilos.value;
        pounds.value = (kgs * 2.205).toFixed(2);
        ounces.value = (kgs * 35.274).toFixed(2);
    };

    let changePounds = () => {
        let lbs = pounds.value;
        kilos.value = (lbs / 2.205).toFixed(2);
        ounces.value = (lbs * 16).toFixed(2);
    };

    let changeOunces = () => {
        let ozs = ounces.value;
        kilos.value = (ozs / 35.274).toFixed(2);
        pounds.value = (ozs / 16).toFixed(2);
    };

kilos.addEventListener("input", changeKilos);
pounds.addEventListener("input", changePounds);
ounces.addEventListener("input", changeOunces); 
