var jsonObj;
var selectedCity = "Helsinki"; //Helsinki is default.

function loadJSONDocWithParse() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q="+selectedCity+"%0B&units=metric&mode=JSON&APPID=ff64c247a136f706923d1ee0d55d71e2";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			jsonObj = JSON.parse(xmlhttp.responseText);
			console.log(jsonObj);
			printJSONTable(jsonObj);
		}
	}
}

function printJSONTable(jsonObj) {
	var data = jsonObj;
	var out = "<table>";
		out += '<thead><th colspan=3>'+ data.name +'</th></thead>'
		out += '<tr><td>Weather</td><td>'+ data.weather[0].description + '</td><tr>';
		out += '<tr><td>Temperature</td><td>'+ data.main.temp + '</td><tr>';
		out+="</table>";
	document.getElementById("data").innerHTML = out;
}


go(); //autorun on launch.
function go() {
	selectedCity = document.getElementById("area").value;
	loadJSONDocWithParse();
}