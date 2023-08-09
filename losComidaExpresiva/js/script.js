$(document).ready(function () {
	$('#mailbutton').click(function (event) {
		window.location = "mailto:loscomidaexpersivafoodtruck.com?Subject=Hello%20again";
	});
});


function myCatering(show) {
	const cateringForm = document.getElementById("catering");
	if (!show) {
		cateringForm.style.display = "none";
	} else {
		cateringForm.style.display = "block";
		this.myTruckStop(false);
		this.myGeneral(false);
	}
};

function myTruckStop(show) {
	const truckForm = document.getElementById("truckStop");

	if (!show) {
		truckForm.style.display = "none";
	} else {
		truckForm.style.display = "block";
		this.myCatering(false);
		this.myGeneral(false);
	}
};

function myGeneral(show) {
	const generalForm = document.getElementById("general");
	if (!show) {
		generalForm.style.display = "none";
	} else {
		generalForm.style.display = "block";
		this.myTruckStop(false);
		this.myCatering(false);
	}
};