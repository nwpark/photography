function changeImage() {
	var image = document.getElementById('image1')
	if(image.src.match("Desert")) {
		image.src = "Jellyfish.jpg";
	}
	else {
		image.src = "Desert.jpg";
	}
}
function resizeImage() {
	var image = document.getElementById('image1');
	if(image.style.width.match('50%')) {
		image.style.width = '100%';
	}
	else {
		image.style.width = '50%'
	}
}
function hideLargeImage() {
	var imageVar = document.getElementById('image');
	imageVar.style.display = 'none';
}
function showLargeImage() {
	var picture = "deserts";
	var imageVar = document.getElementById('image');
	if(picture == "deserts") {
		document.getElementById('largeImage').src = document.getElementById('desert').src;
	}
	else {
		document.getElementById('largeImage').src = document.getElementById('jellyfish').src;
	}
	imageVar.style.display = 'block';
	imageVar.style.position = 'fixed';
	imageVar.style.top = '30px';
	imageVar.style.left = '20%';
}
function nextImage() {
	var picture = document.getElementById('mainImage');
	picture.src = 'Documents\GitHub\test\ROSE TEST.jpg';
}