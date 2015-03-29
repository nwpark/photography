var futurismPics = ["futurism/SECOND CUP.jpg", 
			"futurism/ROSE TEST.jpg", 
			"futurism/PINEAPPLE.jpg", 
			"futurism/IMG_9245.jpg",
			"futurism/hananh.jpg"]
var flatsPics = ["flats/10574490_916149055066311_9166328785546283049_n.jpg",
			"flats/10570496_916149141732969_7109096628975262258_n.jpg",
			"flats/10551061_916148528399697_2928115284938901327_n.jpg",
			"flats/10527332_916148831733000_6703671114500597545_n.jpg",
			"flats/10418909_916147995066417_5982149672785673479_n.jpg",
			"flats/10392409_916148698399680_5145691371804763473_n.jpg",
			"flats/10377164_916148838399666_7791326558864167979_n.jpg",
			"flats/10355722_916148251733058_3549712943006763498_n.jpg",
			"flats/1458707_916148071733076_7972319385168546822_n.jpg",
			"flats/995614_916148801733003_3320039399786898288_n.jpg",
			"flats/7357_916149121732971_4074852418261063885_n.jpg"]
var london_fashion_weekPics = ["london_fashion_week/picture30.jpg",
				"london_fashion_week/picture26.jpg",
				"london_fashion_week/picture24.jpg",
				"london_fashion_week/picture20.jpg",
				"london_fashion_week/picture13.jpg",
				"london_fashion_week/picture6.jpg",
				"london_fashion_week/picture4.jpg",
				"london_fashion_week/picture2.jpg"]
var lingeriePics = ["lingerie/Image eighteen.jpg",
			"lingerie/Image fourteen.jpg",
			"lingerie/Image six.jpg",
			"lingerie/Image thirteen.jpg",
			"lingerie/Image thirteen_1.jpg",
			"lingerie/Image twelve.jpg"]
var beauty_portraitsPics = ["beauty_portraits/11034120_10153147014415409_682121217_o.jpg",
			"beauty_portraits/11078708_10153147014200409_1419223267_o.jpg",
			"beauty_portraits/11086571_10153147014975409_951779125_o.jpg",
			"beauty_portraits/11097128_10153147013605409_673562300_o.jpg"]
var i = 0;
var currentSrc = "futurism";
function hideLargeImage() {
	document.getElementById('image').style.display = 'none';
	document.getElementById('box').style.display = 'block';
	document.getElementById('lowerBox').style.display = 'block';
	document.getElementById('boxFooter').style.display = 'block';
}
function showLargeImage() {
	document.getElementById('largeImage').src = document.getElementById('mainImage').src;
	document.getElementById('image').style.display = 'block';
	document.getElementById('box').style.display = 'none';
	document.getElementById('lowerBox').style.display = 'none';
	document.getElementById('boxFooter').style.display = 'none';
}
function hideThumbnails() {
	var thumbnailStatus = document.getElementById('lowerBox').style.display;
	if(thumbnailStatus != 'none') {
		document.getElementById('lowerBox').style.display = 'none';
	}
	if(thumbnailStatus == 'none') {
		document.getElementById('lowerBox').style.display = 'block';
	}
}
function showThumbnails() {
	document.getElementById('lowerBox').style.display = 'block';
}
function nextImage() {
	var picture = document.getElementById('mainImage');
	i++;
	if(picture.src.indexOf("futurism") > -1) {
		if(futurismPics[i] == null) {
			i=0;
		}
		picture.src = futurismPics[i];
	}
	if(picture.src.indexOf("flats") > -1) {
		if(flatsPics[i] == null) {
			i=0;
		}
		picture.src = flatsPics[i];
	}
	if(picture.src.indexOf("london_fashion_week") > -1) {
		if(london_fashion_weekPics[i] == null) {
			i=0;
		}
		picture.src = london_fashion_weekPics[i];
	}
	if(picture.src.indexOf("lingerie") > -1) {
		if(lingeriePics[i] == null) {
			i=0;
		}
		picture.src = lingeriePics[i];
	}
	if(picture.src.indexOf("beauty_portraits") > -1) {
		if(beauty_portraitsPics[i] == null) {
			i=0;
		}
		picture.src = beauty_portraitsPics[i];
	}
	for(j=0; j<50; j++) {
		if(document.getElementById('image'+j) != null) {
			document.getElementById('image'+j).style.opacity="";
		}
	}
	document.getElementById('image'+i).style.opacity="1";
}
function prevImage() {
	var picture = document.getElementById('mainImage');
	i--;
	if(picture.src.indexOf("futurism") > -1) {
		if(futurismPics[i] == null) {
			i = futurismPics.length -1;
		}
		picture.src = futurismPics[i];
	}
	if(picture.src.indexOf("flats") > -1) {
		if(flatsPics[i] == null) {
			i = flatsPics.length -1;
		}
		picture.src = flatsPics[i];
	}
	if(picture.src.indexOf("london_fashion_week") > -1) {
		if(london_fashion_weekPics[i] == null) {
			i = london_fashion_weekPics.length -1;
		}
		picture.src = london_fashion_weekPics[i];
	}
	if(picture.src.indexOf("lingerie") > -1) {
		if(lingeriePics[i] == null) {
			i = lingeriePics.length -1;
		}
		picture.src = lingeriePics[i];
	}
	if(picture.src.indexOf("beauty_portraits") > -1) {
		if(beauty_portraitsPics[i] == null) {
			i = beauty_portraitsPics.length -1;
		}
		picture.src = beauty_portraitsPics[i];
	}
	for(j=0; j<50; j++) {
		if(document.getElementById('image'+j) != null) {
			document.getElementById('image'+j).style.opacity="";
		}
	}
	document.getElementById('image'+i).style.opacity="1";
}
function changeMainImage(newImage) {
	i = newImage -1;
	nextImage();
	for(j=0; j<50; j++) {
		if(document.getElementById('image'+j) != null) {
			document.getElementById('image'+j).style.opacity="";
		}
	}
	document.getElementById('image'+newImage).style.opacity="1";
}
function changeSrc(newSrc) {
	document.getElementById('content').src = newSrc+".html";
	i=0;
}