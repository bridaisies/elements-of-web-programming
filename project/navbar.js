var dropdownShown = false;

function membersDropdown() {
	var m = document.getElementById("memberPages").querySelectorAll("a");
	var displayValue;
	if(dropdownShown) {
		displayValue = "none";
		dropdownShown = false;
	}

	else {
		displayValue = "block";
		dropdownShown = true;
	}

	for(i=0; i<m.length; i++) {
		m[i].style.display = displayValue;
	}
}
