var futurismPics = ["futurism/SECOND CUP.jpg", 
			"futurism/ROSE TEST.jpg", 
			"futurism/PINEAPPLE.jpg", 
			"futurism/IMG_9245.jpg",
			"futurism/hananh.jpg"]
var i = 0;
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
	var largeImageDiv = document.getElementById('image');
	var picture = document.getElementById('mainImage');
	var largePicture = document.getElementById('largeImage');
	largePicture.src = picture.src;
	largeImageDiv.style.display = 'block';
	largeImageDiv.style.position = 'fixed';
	largeImageDiv.style.top = '30px';
	largeImageDiv.style.left = '20%';
}
function nextImage() {
	var picture = document.getElementById('mainImage');
	i++;
	if(futurismPics[i] != null) {
		picture.src = futurismPics[i];
		document.getElementById('imageName').innerHTML = "test";
	}
	else {
		i = 0;
	}
}
function prevImage() {
	var picture = document.getElementById('mainImage');
	i--;
	if(futurismPics[i] != null) {
		picture.src = futurismPics[i];
	}
	else {
		i = 4;
	}
}