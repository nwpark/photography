var futurismPics = ["futurism/SECOND CUP.jpg", 
			"futurism/ROSE TEST.jpg", 
			"futurism/PINEAPPLE.jpg", 
			"futurism/IMG_9245.jpg",
			"futurism/hananh.jpg"]
var flatsPics = ["flats/10574490_916149055066311_9166328785546283049_n.jpg",
			"flats/10570496_916149141732969_7109096628975262258_n.jpg",
			"flats/10551061_916148528399697_2928115284938901327_n.jpg",]
var i = 0;
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
	largeImageDiv.style.top = '0px';
	largeImageDiv.style.left = '10%';
}
function nextImage() {
	var picture = document.getElementById('mainImage');
	i++;
	if(futurismPics[i] != null) {
		picture.src = futurismPics[i];
	}
	else {
		i = 0;
	}
}
function nextFlats() {
	var picture = document.getElementById('flatsImage');
	i++;
	if(flatsPics[i] != null) {
		picture.src = flatsPics[i];
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
		i = futurismPics.length;
	}
}