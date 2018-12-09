if(document.getElementById("proposal-request-button")){document.getElementById("proposal-request-button").onclick = function(){
	document.getElementById('request-form').style.display = 'table';
	setTimeout(function(){
		document.getElementById('request-form').classList.add('opened');
	}, 10);
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
}}

if(document.getElementById("start-request")){
	document.getElementById("start-request").onclick = function(){
	document.getElementById('request-form').style.display = 'table';
	setTimeout(function(){
		document.getElementById('request-form').classList.add('opened');
	}, 10);
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
}}

if(document.getElementById("close-request-form")){document.getElementById("close-request-form").onclick = function(){
	document.getElementById('request-form').classList.remove('opened');
	setTimeout(function(){
		document.getElementById('request-form').style.display = 'none';
	}, 510);
	document.getElementsByTagName("body")[0].style.overflow = "auto";
}}

if(document.getElementById("cancel-request")){document.getElementById("cancel-request").onclick = function(){
	document.getElementById('request-form').classList.remove('opened');
	setTimeout(function(){
		document.getElementById('request-form').style.display = 'none';
	}, 510);
	document.getElementsByTagName("body")[0].style.overflow = "auto";
}}

for (scroller of document.getElementsByClassName('scroll-to')){
	scroller.onclick = function(){
		console.log(this.dataset.scrollTo);
		toHeight = document.getElementById(this.dataset.scrollTo).offsetTop;
		document.documentElement.scrollTop = toHeight;
		console.log(toHeight);
	}
}

particlesJS("home-banner", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#333333"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":20,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#aaaaaa","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

for (input of document.getElementsByClassName('request-input')){
	input.oninput = function(){
		if (this.value !=""){
			this.classList.add("entered");
		} else {
			this.classList.remove("entered");
		}

		if (this.type == 'email'){
			if(!validateEmail(this.value)){
				console.log("Email not validated");
				this.classList.add('email-not-validated');
			}
			else{
				console.log("Email validated");
				this.classList.remove('email-not-validated');
			}
		}
	}
}

if(document.getElementById('gold-package')){
	document.getElementById('gold-package').onclick = function(event){
		document.getElementById('gold-package-modal').style.display = "table";
		setTimeout(function(){
			document.getElementById('gold-package-modal').classList.add("opened");
			document.getElementsByTagName("body")[0].style.overflow = "hidden";
		}, 10);
	}
}

if(document.getElementById('silver-package')){
	document.getElementById('silver-package').onclick = function(event){
		document.getElementById('silver-package-modal').style.display = "table";
		setTimeout(function(){
			document.getElementById('silver-package-modal').classList.add("opened");
			document.getElementsByTagName("body")[0].style.overflow = "hidden";
		}, 10);
	}
}

if(document.getElementById('platinum-package')){
	document.getElementById('platinum-package').onclick = function(event){
		document.getElementById('platinum-package-modal').style.display = "table";
		setTimeout(function(){
			document.getElementById('platinum-package-modal').classList.add("opened");
			document.getElementsByTagName("body")[0].style.overflow = "hidden";
		}, 10);
	}
}

for (close of document.getElementsByClassName("plan-modal-close-icon")){
	close.onclick = function(event){
		box_selector = this.parentNode.parentNode.parentNode;
		box_selector.classList.remove("opened");
		document.getElementsByTagName("body")[0].style.overflow = "auto";
		setTimeout(function(){
			box_selector.style.display = "none";
		}, 510);
	}
}

if (document.getElementById('success-message')){
	element = document.getElementById('success-message');
	setTimeout(function(){
		element.classList.add('closing');
		setTimeout(function(){
			element.parentNode.removeChild(element);
		}, 500);
	}, 3000);
}

window.onload = function(){
	document.getElementById("preloader-center").classList.add("closing");
	document.getElementById("preloader").classList.add("closing");
	element = document.getElementById('preloader');
	setTimeout(function(){
		element.parentNode.removeChild(element);
	}, 500);
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

window.onscroll = function(event){
	var element = document.getElementById("home-secondary-nav");
	scrollY = document.documentElement.scrollTop;
	if(scrollY > 602){
		if (!element.classList.contains("show")){
			element.style.display = "block";
			setTimeout(function(){
				element.classList.add("show");
			}, 10);
		}
	}
	else{
		if (element.classList.contains("show")){
			element.classList.remove("show");
			setTimeout(function(){
				element.style.display = "none";
			}, 250);
		}
	}
}