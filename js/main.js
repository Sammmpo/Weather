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
	document.getElementById("weather").innerHTML = data.weather[0].description;
	document.getElementById("temperature").innerHTML = data.main.temp;
	document.getElementById("clouds").innerHTML = data.clouds.all;
	document.getElementById("humidity").innerHTML = data.main.humidity;
	document.getElementById("icon").innerHTML = "<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"
}

go(); //autorun on launch.
function go() {
	selectedCity = document.getElementById("area").value; //read input.
	loadJSONDocWithParse();
}