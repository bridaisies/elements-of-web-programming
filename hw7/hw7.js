function checkInput(input) {
        len = input.length;

        if (len < 6 || len > 10) {
                return false;
        }
        else if (!isNaN(parseInt(input.charAt(0)))) {
                return false;
        }
        else if (!input.match(/^[0-9a-zA-z]+$/)) {
                return false;
        }

        return true;


}

function checkPassword(pw) {
        nums = pw.replace(/[^0-9]/g,"").length;
        alphaLower = pw.replace(/[^a-z]/g,"").length;
        alphaUpper = pw.replace(/[^A-Z]/g,"").length;

        if(nums == 0 || alphaLower == 0 || alphaUpper == 0) {
                return false;
        }

        return true;
}

function registration() {
        user = document.getElementById("username").value;
        pw = document.getElementById("password").value;
        pw2 = document.getElementById("password2").value;

        if (user == null || pw == null || pw2 == null) {
                alert("Please enter a username or password");
        }

        else if (!(checkInput(user) && checkInput(pw) && (pw == pw2))) {
                alert("Invalid username or password.");
        }

        else if (!checkPassword(pw)) {
                alert("Invalid password.")
        }

        else {
                alert("User validated.");
        }
}

