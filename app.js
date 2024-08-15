const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		}
	});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function copyToClipboard() {
	var text = document.getElementById("token-link").innerText;
	var tempInput = document.createElement("input");
	tempInput.style = "position: absolute; left: -1000px; top: -1000px";
	tempInput.value = text;
	document.body.appendChild(tempInput);
	tempInput.select();
	document.execCommand("copy");
	document.body.removeChild(tempInput);
}

window.onload = function () {
	var context = new AudioContext();
};

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		// If scrolling down, hide the navbar
		document.getElementById("navbar").style.transform = "translateY(-100%)";
	} else {
		// If scrolling up, show the navbar
		document.getElementById("navbar").style.transform = "translateY(0)";
	}
	lastScrollTop = scrollTop;
});



// Step 2: Get the h1 element
var h1 = document.querySelector("p");



document.addEventListener("DOMContentLoaded", (event) => {
	const videoElement = document.querySelector("video");
	const muteButton = document.querySelector("#mute-button");
	const muteImage = document.querySelector("#mute-image");

	muteButton.addEventListener("click", () => {
		if (videoElement.muted) {
			videoElement.muted = false;
			muteImage.src = "images/mute.png";
			muteButton.style.animation = "bounce 1s";
		} else {
			videoElement.muted = true;
			muteImage.src = "images/unmute.png";
			muteButton.style.animation = "";
		}
	});
});
