
// destinations url
var destinations = new XMLHttpRequest();
destinations.open('GET', 'https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c', true);

destinations.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        // Success!
        var data = JSON.parse(this.response);
        for (var i = 0; i < data.result.length; i++) {
            console.log()
            document.getElementById("destinationsGridList").innerHTML += `<div class="gridlistInner"><img src=${data.result[i].imageUrl} alt=${data.result[i].city}><p>${data.result[i].city}</p></div>`;
        }


    } else {
        // We reached our target server, but it returned an error

    }
};

destinations.onerror = function () {
    // There was a connection error of some sort
};

destinations.send();

//weather url
var weather = new XMLHttpRequest();
weather.open('GET', 'https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576', true);

weather.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        // Success!
        var dataweather = JSON.parse(this.response);
        for (var i = 0; i < dataweather.result.length; i++) {
            console.log()
            document.getElementById("weatherList").innerHTML += `<div class="wheater0${[i + 1]}">
            <p>${dataweather.result[i].city}</p><img src="images/icon-party-sunny.svg" alt="wheater" /><h2>${dataweather.result[i].temp_Celsius} <span>&#176;</span></h2>
        </div>`;
        }


    } else {
        // We reached our target server, but it returned an error

    }
};

weather.onerror = function () {
    // There was a connection error of some sort
};

weather.send();

// time counter

var countDownDate = new Date("august 9, 2021").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timeVal").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeVal").innerHTML = "EXPIRED";
    }
}, 1000);

// form validation

function validateForm() {
    var name = document.getElementById('name').value;
    var contactNumber = document.getElementById('contactno').value;
    var EmailId = document.getElementById('email').value;
    if (name == "" || contactNumber == "" || EmailId == "") {
        if (name == "") {
            document.getElementById('nameError').append('Name is required');
        } if (contactNumber == "") {
            document.getElementById('contactnoError').append('Contact No is required');
        } if (EmailId == "") {
            document.getElementById('emailError').append('Email is required');
        }
        return false;
    }
    if (name != "" || contactNumber != "" || EmailId != "") {
        if (contactNumber != "") {
            var regNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (regNum.test(contactNumber) == false) {
                document.getElementById('contactnoError').append('Invalid Contact No');
                return false;
            }
        } else if (contactNumber.length < 10) {
            document.getElementById('contactnoError').append('Invalid Contact No');
            return false;
        }
        if (EmailId != "") {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(EmailId) == false) {
                document.getElementById('emailError').append('Invalid Email');
                return false;
            }
        }
        dataSend();
        return false;
    }
    return false;
}
function dataSend() {
    document.getElementById('success').style.display = "block";
    return false;
}