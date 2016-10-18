
var TCT = {
	"California": {
		"Monterey": ["Salinas", "Gonzales", "Gonzales", "Gonzales", "Gonzales", "Gonzales", "Gonzales", "Gonzales", "Gonzales", "Gonzales", "Gonzales", "Gonzales", "Gonzales"],
		"Alameda": ["Berkeley"],
		"1": ["Berkeley"],"2": ["Berkeley"],"3": ["Berkeley"],"4": ["Berkeley"],"5": ["Berkeley"]
	},
	"Oregon": {
		"Douglas": ["Roseburg", "Winston"],
	}
}













window.onload = function () {
	var DepartmentSelect = document.getElementById("DepartmentSelect"),
		TeacherSelect = document.getElementById("TeacherSelect"),
		Showdata = document.getElementById("Showdata");
	for (var state in TCT) {
		DepartmentSelect.options[DepartmentSelect.options.length] = new Option(state, state);
	}
	DepartmentSelect.onchange = function () {
		TeacherSelect.length = 1; // remove all options bar first
		Showdata.length = 1; // remove all options bar first
		if (this.selectedIndex < 1) {
		  TeacherSelect.options[0].text = "Please select Teacher first"
		  Showdata.options[0].text = "Please select teacher first"
		  return; // done   
		}  
		TeacherSelect.options[0].text = "Now select teacher"
		for (var county in TCT[this.value]) {
			TeacherSelect.options[TeacherSelect.options.length] = new Option(county, county);
		}
		if (TeacherSelect.options.length==2) {
		  TeacherSelect.selectedIndex=1;
		  TeacherSelect.onchange();
		}  
	}
	DepartmentSelect.onchange(); // reset in case page is reloaded
	TeacherSelect.onchange = function () {
		Showdata.length = 1; // remove all options bar first
		if (this.selectedIndex < 1) {
		  Showdata.options[0].text = "Please select teacher first"
		  return; // done   
		}  
		Showdata.options[0].text = "Please select city"
		
		var cities = TCT[DepartmentSelect.value][this.value];
		for (var i = 0; i < cities.length; i++) {
			Showdata.options[Showdata.options.length] = new Option(cities[i], cities[i]);
		}
		if (Showdata.options.length==2) {
		  Showdata.selectedIndex=1;
		  Showdata.onchange();
		}  
		
	}
}