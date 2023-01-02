setInterval(() => {
	let month = new Array();
	month[0] = "Января";
	month[1] = "February";
	month[2] = "Марта";
	month[3] = "April";
	month[4] = "May";
	month[5] = "Июня";
	month[6] = "Июля";
	month[7] = "Августа";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";

	let daytoday = new Array();
	daytoday[1] = "Monday";
	daytoday[2] = "Tuesday";
	daytoday[3] = "Wednesday";
	daytoday[4] = "Thursday";
	daytoday[5] = "Friday";
	daytoday[6] = "Saturday";
	daytoday[7] = "Sunday";

	let date = new Date()

	let clock = document.getElementById('clock')
	clock.innerHTML = 
	date.getFullYear() + " " + 
	month[date.getMonth()] + ", " + 
	date.getDate() + " | " + 
	daytoday[date.getDay()]
}, 1000);
