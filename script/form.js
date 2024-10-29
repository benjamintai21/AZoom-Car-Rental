const carDictionary = {
    car_1: 'Mercedes EQB SUV',
    car_2: 'Mercedes EQE Sedan',
    car_3: 'Mercedes EQE SUV',
    car_4: 'Mercedes EQS Sedan',
    car_5: 'Mercedes EQS SUV',
    car_6: 'Mercedes EQS SUV Maybach',

    car_7: 'Audi SUV e-tron',
    car_8: 'Audi Sport e-tron',
    car_9: 'Audi Sport e-tron GT',
    car_10: 'Audi Sport RS 6 Avant',
    car_11: 'Audi Sport RS 7 Sportback',
    car_12: 'Audi S8',

    car_13: 'Audi A3 Sedan',
    car_14: 'Audi A6 Sedan',
    car_15: 'Audi A8 L',
    car_16: 'BYD Atto 3',
    car_17: 'BYD Dolphin',
    car_18: 'BYD Seal',

    car_19: 'Kia Carnival MPV',
    car_20: 'Kia Sorento Hybrid',
    car_21: 'Kia EV9',
    car_22: 'Kia Niro Hybrid',
    car_23: 'Mazda 2 Hatch',
    car_24: 'Mazda 3 Sedan'
};

const locationDictionary = {
    amk: 'Ang Mo Kio',
    cl: 'Clementi'
}

function validateForm() {
    // Clear previous error messages
    document.getElementById("usernameErr").textContent = "";
    document.getElementById("emailErr").textContent = "";
    document.getElementById("passwordErr").textContent = "";
    document.getElementById("SignUpMessage").textContent = "";

    // Retrieve form data
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let isValid = true;

    // Username validation
    if (username === "" || username.trim() === "") {
        document.getElementById("usernameErr").textContent = "Username is required.";
        isValid = false;
    }

    // Email validation
    if (email === "" || email.trim() === "") {
        document.getElementById("emailErr").textContent = "Email is required.";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailErr").textContent = "Invalid email format.";
        isValid = false;
    }

    // Password validation
    if (password === "" || password.trim() === "") {
        document.getElementById("passwordErr").textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById("passwordErr").textContent = "Password must be at least 8 characters long.";
        isValid = false;
    }

    // If valid, display success message
    if (isValid) {
        document.getElementById("username").value = username.trim();
        document.getElementById("password").value = password.trim();

        window.localStorage.setItem("username", username);
        window.localStorage.setItem("password", password);
        
        document.getElementById("SignUpMessage").textContent = "Sign Up Succesful!";
        return true;
    }

return false; // Prevent form submission if invalid
}


function validateLogIn() {
    document.getElementById("l_usernameErr").textContent = "";
    document.getElementById("l_passwordErr").textContent = "";

    const email = window.localStorage.getItem("email");
    const username = window.localStorage.getItem("username");
    const password = window.localStorage.getItem("password");

    let l_username = document.getElementById('l_username').value;
    let l_password = document.getElementById('l_password').value;
    let isValid;

    if (l_username === "" || l_username.trim() ==="") {
        document.getElementById("l_usernameErr").textContent = "Enter your username!";
        isValid = false;
    }

    if (l_password === "" || l_username.trim() === "") {
        document.getElementById("l_passwordErr").textContent = "Enter your password!";
        isValid = false;
    }

    console.log("Retrieved from localStorage:");
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);

    console.log(username , l_username, password, l_password)
    if ( (username === l_username) && (password === l_password)){
        isValid = true;
        alert("Login Success!");
    }else if (isValid != false){
        document.getElementById("l_passwordErr").textContent = "Username or password is incorrect!";
        document.getElementById("l_username").value = "";
        document.getElementById("l_password").value = "";
        isValid = false;
    }
return isValid;
// You can now compare these values with what the user inputs
}


function validateReserve() {
    document.getElementById("pickupErr").textContent = "";
    document.getElementById("dropoffErr").textContent = "";
    document.getElementById("dateErr").textContent = "";
    document.getElementById("timeErr").textContent = "";

    let isValid = true;

    const selectedCar = window.localStorage.getItem("selectedCarId");
    let pickup = document.getElementById('pickup').value;
    let dropoff = document.getElementById('dropoff').value;

    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;

    const today = new Date();
    const pickupdate =  new Date(date);

    const diffTime = (pickupdate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    

    if (pickup == ""){
        document.getElementById("pickupErr").textContent = "Choose a pickup location!";
        console.log('pempty');
        isValid = false;
    }
    if (dropoff == ""){
        document.getElementById("dropoffErr").textContent = "Choose a dropoff location!";
        console.log('dempty');
        isValid = false;
    }
    if (date == ""){
        document.getElementById("dateErr").textContent = "Choose a pickup date!";
        console.log('daempty');
        isValid = false;
    }else if (diffDays <3){
        document.getElementById("dateErr").textContent = "Pickup must be scheduled at least 3 days in advance.";
        console.log('less than 3');
        isValid = false;
    }
    if (time == ""){
        document.getElementById("timeErr").textContent = "Choose a pickup time!";
        console.log('tempty');
        isValid = false;
    }else if (time < '08:00' || time > '17:00'){
        document.getElementById("timeErr").textContent = "Choose only from 08:00hrs to 17:00hrs!";
        isValid = false;
    }
    console.log(pickup,dropoff,date,time);

    if (isValid) {

        let carDetails = [selectedCar, pickup, dropoff, date, time];
        window.localStorage.setItem("r_car", JSON.stringify(carDetails));
        console.log(window.localStorage.getItem("r_car"));
        
        return true;
    }

return false; // Prevent form submission if invalid
}


function getusername() {
    const username = window.localStorage.getItem("username");
    console.log(username);
    document.getElementById('currentuser').textContent = username;
}


function selectCar(carId) {
    // Set the hidden input field with the selected car ID
    document.getElementById('selectedCarId').value = carId;
    window.localStorage.setItem('selectedCarId', carId);
}

function getdropofflocation (){
    
    let object = JSON.parse(window.localStorage.getItem("r_car"));
    
    // for (let i = 0; i < object.length; i++) {
    //     console.log(object[i]); // This will print each element in the array
    // }
    console.log(object);
    if (object == null){
        document.getElementById('dropoff').textContent = "You have not rented any car yet!";
    }else{
        let car = object[0];
        let pickup = object[1];
        let dropoff = object[2];
        car = carDictionary[car];
        pickup = locationDictionary[pickup];
        dropoff = locationDictionary[dropoff];
        console.log(dropoff);
        document.getElementById('rentedcar').innerHTML = car; 

        document.getElementById('r_pickup').innerHTML = pickup; 
        
        document.getElementById('r_dropoff').innerHTML = dropoff; 

    }   
}

function getcarinfo() {
    const selectedCar = window.localStorage.getItem("selectedCarId");
    console.log(selectedCar);

    
    console.log(carDictionary[selectedCar]);
    let chosen_car = carDictionary[selectedCar]

    document.getElementById('chosen_car').value = chosen_car;
}
