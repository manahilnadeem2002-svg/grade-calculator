function checkGrade() {

    let percentage = document.getElementById("percentage").value;
    let result = document.getElementById("result");

    if (percentage === "") {
        result.innerHTML = "Please enter your percentage";
    }
    else if (percentage < 0 || percentage > 100) {
        result.innerHTML = "Invalid Number";
    }
    else if (percentage >= 90) {
        result.innerHTML = "Grade: A+ ";
    }
    else if (percentage >= 80) {
        result.innerHTML = "Grade: A ";
    }
    else if (percentage >= 70) {
        result.innerHTML = "Grade: B ";
    }
    else if (percentage >= 60) {
        result.innerHTML = "Grade: C ";
    }
    else if (percentage >= 40) {
        result.innerHTML = "Grade: D ";
    }
    else {
        result.innerHTML = "Grade: Fail ";
    }

}