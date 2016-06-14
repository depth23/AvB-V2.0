"use strict";

//--------------------On Load----------------------------

var screenSize = window.screen.width;

function landingPageLoad() {
  if(screenSize <= 600) {
    document.getElementById('secOneLogo').style.left = "16px";
    document.getElementById('secOneLogo').style.opacity = "1";
    document.getElementById('hamburger').style.right = "24px";
    document.getElementById('hamburger').style.opacity = "1";
    document.getElementById('mainPgText').style.top = "55%";
    document.getElementById('mainPgText').style.opacity = "1";
  }
  else if(screenSize >= 601 && screenSize <= 771) { 
    document.getElementById('secOneLogo').style.left = "32px";
    document.getElementById('secOneLogo').style.opacity = "1";
    document.getElementById('sec-1-share-cntnr').style.left = "32px";
    document.getElementById('sec-1-share-cntnr').style.opacity = "1";
    document.getElementById('hamburger').style.right = "32px";
    document.getElementById('hamburger').style.opacity = "1";
    document.getElementById('secOneAddress').style.right = "32px";
    document.getElementById('secOneAddress').style.opacity = "1";
    document.getElementById('mainPgText').style.top = "55%";
    document.getElementById('mainPgText').style.opacity = "1";
  }
  else if(screenSize >= 772 && screenSize <= 1280) {
    document.getElementById('secOneLogo').style.left = "48px";
    document.getElementById('secOneLogo').style.opacity = "1";
    document.getElementById('sec-1-share-cntnr').style.left = "48px";
    document.getElementById('sec-1-share-cntnr').style.opacity = "1";
    document.getElementById('hamburger').style.right = "48px";
    document.getElementById('hamburger').style.opacity = "1";
    document.getElementById('secOneAddress').style.right = "48px";
    document.getElementById('secOneAddress').style.opacity = "1";
    document.getElementById('mainPgText').style.top = "55%";
    document.getElementById('mainPgText').style.opacity = "1";
  }
  else if (screenSize >= 1281) {
    document.getElementById('secOneLogo').style.left = "64px";
    document.getElementById('secOneLogo').style.opacity = "1";
    document.getElementById('sec-1-share-cntnr').style.left = "64px";
    document.getElementById('sec-1-share-cntnr').style.opacity = "1";
    document.getElementById('hamburger').style.right = "64px";
    document.getElementById('hamburger').style.opacity = "1";
    document.getElementById('secOneAddress').style.right = "64px";
    document.getElementById('secOneAddress').style.opacity = "1";
    document.getElementById('mainPgText').style.top = "55%";
    document.getElementById('mainPgText').style.opacity = "1";
  }
};

window.onload = function() {
  landingPageLoad();
};

//--------------------Auto Scroll For Links--------------

var scrollY = 0;
var distance = 30;
var speed = 15;
function autoScrollTo(el) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')', speed);
	if(yPos > bodyHeight){
		clearTimeout(animator);
	} else {
		if(currentY < targetY - distance){
		    scrollY = currentY + distance;
		    window.scroll(0, scrollY + distance);
	    } else {
		    clearTimeout(animator);
	    }
	}
}

function resetScroller(el){
	var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	if(currentY > targetY){
		scrollY = currentY - distance;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(animator);
	}
}

//--------------------Hamburger Menu---------------------

function section1Click() {
  document.getElementById('hamburger').style.display = "inline-block";
  document.getElementById('pop-out-one').style.transition = "right 1s";
  document.getElementById('pop-out-one').style.right = "-208px";
  document.getElementById('pop-out-two').style.transition = "right 1.25s";
  document.getElementById('pop-out-two').style.right = "-208px";
  document.getElementById('pop-out-three').style.transition = "right 1.5s";
  document.getElementById('pop-out-three').style.right = "-208px";
  document.getElementById('pop-out-four').style.transition = "right 1.75s";
  document.getElementById('pop-out-four').style.right = "-208px";
};

document.getElementById('sectionOne').addEventListener('click', section1Click, true);

function hamburgerClick() {
  document.getElementById('hamburger').style.display = "none";
  document.getElementById('pop-out-one').style.transition = "right 1s";
  document.getElementById('pop-out-one').style.right = "16px";
  document.getElementById('pop-out-two').style.transition = "right 1.25s";
  document.getElementById('pop-out-two').style.right = "16px";
  document.getElementById('pop-out-three').style.transition = "right 1.5s";
  document.getElementById('pop-out-three').style.right = "16px";
  document.getElementById('pop-out-four').style.transition = "right 1.75s";
  document.getElementById('pop-out-four').style.right = "16px";
};

document.getElementById('hamburger').addEventListener('click', hamburgerClick, false);

function popOutOneClick() {
  document.getElementById('hamburger').style.display = "inline-block";
  document.getElementById('pop-out-one').style.transition = "right 1s";
  document.getElementById('pop-out-one').style.right = "-208p";
  document.getElementById('pop-out-two').style.transition = "right 1.25s";
  document.getElementById('pop-out-two').style.right = "-208p";
  document.getElementById('pop-out-three').style.transition = "right 1.5s";
  document.getElementById('pop-out-three').style.right = "-208p";
  document.getElementById('pop-out-four').style.transition = "right 1.75s";
  document.getElementById('pop-out-four').style.right = "-208p";
  autoScrollTo('menuSection');
}

document.getElementById('pop-out-one').addEventListener('click', popOutOneClick, false);

function popOutTwoClick() {
  document.getElementById('hamburger').style.display = "inline-block";
  document.getElementById('pop-out-one').style.transition = "right 1.75s";
  document.getElementById('pop-out-one').style.right = "-208px";
  document.getElementById('pop-out-two').style.transition = "right 1s";
  document.getElementById('pop-out-two').style.right = "-208px";
  document.getElementById('pop-out-three').style.transition = "right 1.25s";
  document.getElementById('pop-out-three').style.right = "-208px";
  document.getElementById('pop-out-four').style.transition = "right 1.5s";
  document.getElementById('pop-out-four').style.right = "-208px";
  autoScrollTo('find-us-link');
}

document.getElementById('pop-out-two').addEventListener('click', popOutTwoClick, false);

function popOutThreeClick() {
  document.getElementById('hamburger').style.display = "inline-block";
  document.getElementById('pop-out-one').style.transition = "right 1.5s";
  document.getElementById('pop-out-one').style.right = "-208px";
  document.getElementById('pop-out-two').style.transition = "right 1.25s";
  document.getElementById('pop-out-two').style.right = "-208px";
  document.getElementById('pop-out-three').style.transition = "right 1s";
  document.getElementById('pop-out-three').style.right = "-208px";
  document.getElementById('pop-out-four').style.transition = "right 1.75s";
  document.getElementById('pop-out-four').style.right = "-208px";
  autoScrollTo('about-link');
}

document.getElementById('pop-out-three').addEventListener('click', popOutThreeClick, false);

function popOutFourClick() {
  document.getElementById('hamburger').style.display = "inline-block";
  document.getElementById('pop-out-one').style.transition = "right 1.75s";
  document.getElementById('pop-out-one').style.right = "-208p";
  document.getElementById('pop-out-two').style.transition = "right 1.5s";
  document.getElementById('pop-out-two').style.right = "-208p";
  document.getElementById('pop-out-three').style.transition = "right 1.25s";
  document.getElementById('pop-out-three').style.right = "-208p";
  document.getElementById('pop-out-four').style.transition = "right 1s";
  document.getElementById('pop-out-four').style.right = "-208p";
  autoScrollTo('about-link');
}

document.getElementById('pop-out-four').addEventListener('click', popOutFourClick, false);

//--------------------Sec 1 Pointer----------------------

document.getElementById('sec1Pointer').addEventListener('click', function() {
  autoScrollTo('menuSection');
}, false);

//--------------------Sec 1 Share Icons------------------

document.getElementById('sec-1-share-tab').addEventListener('mouseenter', function() {
  document.getElementById('sec-1-share-lnk-cntnr').style.transition = "visibility 2s";
  document.getElementById('sec-1-share-lnk-cntnr').style.visibility = "visible";
  document.getElementById('sec-1-share-tab').style.opacity = "0";
  document.getElementById('sec-1-share-cntnr').style.left = "-72px";
  document.getElementById('sec-1-faceb').style.transition = "opacity 0.5s";
  document.getElementById('sec-1-faceb').style.opacity = "1";
  document.getElementById('sec-1-intg').style.transition = "opacity 1.25s";
  document.getElementById('sec-1-intg').style.opacity = "1";
  document.getElementById('sec-1-twit').style.transition = "opacity 2s";
  document.getElementById('sec-1-twit').style.opacity = "1";
}, false);


document.getElementById('sec-1-share-cntnr').addEventListener('mouseleave', function() {
  document.getElementById('sec-1-share-lnk-cntnr').style.transition = "visibility 2s";
  document.getElementById('sec-1-share-lnk-cntnr').style.visibility = "hidden";
  document.getElementById('sec-1-share-tab').style.opacity = "1";
  document.getElementById('sec-1-share-cntnr').style.left = "64px";
  document.getElementById('sec-1-faceb').style.transition = "opacity 2s";
  document.getElementById('sec-1-faceb').style.opacity = "0";
  document.getElementById('sec-1-intg').style.transition = "opacity 1.25s";
  document.getElementById('sec-1-intg').style.opacity = "0";
  document.getElementById('sec-1-twit').style.transition = "opacity 0.5s";
  document.getElementById('sec-1-twit').style.opacity = "0";
}, false);

//----------------------Menu-----------------------------

  //Menu Top

//---Breakfast---

    //Hover

function breakfastMouseOver() {
  document.getElementById('sec2Logo').style.display = "none"; 
  document.getElementById('breakfast-full').style.display = "block";
};

document.getElementById('bfast').addEventListener('mouseover', breakfastMouseOver,false);

function breakfastMouseOut() {
  document.getElementById('sec2Logo').style.display = "block"; 
  document.getElementById('breakfast-full').style.display = "none";
  document.getElementById('breakfast-full').style.top = "50%"; 
  document.getElementById('breakfast-full').style.transform = "translate(-50%, -50%)";
  document.getElementById('bfastFull').style.height = "0";
};

document.getElementById('bfast').addEventListener('mouseout', breakfastMouseOut,false);

    //Click

function breakfastClick() {
  if(screenSize <= 770) {
    document.getElementById('breakfast-full').style.top = "16px"; 
    document.getElementById('breakfast-full').style.transform = "translate(-50%, 0)";
    document.getElementById('bfastFull').style.height = "600px";
    autoScrollTo('fullMenuLink');
  }
  else{
    document.getElementById('breakfast-full').style.top = "16px"; 
    document.getElementById('breakfast-full').style.transform = "translate(-50%, 0)";
    document.getElementById('bfastFull').style.height = "512px";
//    document.getElementById('clickMeFull1').style.display = "none";
  }
};

document.getElementById('bfast').addEventListener('click', breakfastClick, false);

//---Panini---

    //Hover

function paniniMouseOver() {
  document.getElementById('sec2Logo').style.display = "none";
  document.getElementById('panini-full').style.display = "block";
};

document.getElementById('panini').addEventListener('mouseover', paniniMouseOver,false);

function paniniMouseOut() {
  document.getElementById('sec2Logo').style.display = "block";
  document.getElementById('panini-full').style.display = "none";
  document.getElementById('panini-full').style.top = "50%";
  document.getElementById('panini-full').style.height = "192px"
  document.getElementById('panini-full').style.transform = "translate(-50%, -50%)";
  document.getElementById('paniniFull').style.height = "0";
};

document.getElementById('panini').addEventListener('mouseout', paniniMouseOut,false);

    //Click

function paniniClick() {
  if(screenSize <= 770) {
    document.getElementById('panini-full').style.top = "16px"; 
    document.getElementById('panini-full').style.transform = "translate(-50%, 0)";
    document.getElementById('panini-full').style.height = "96%"
    document.getElementById('paniniFull').style.height = "88%";
    autoScrollTo('fullMenuLink');
  }
  else {
    document.getElementById('panini-full').style.top = "16px"; 
    document.getElementById('panini-full').style.transform = "translate(-50%, 0)";
    document.getElementById('panini-full').style.height = "96%"
    document.getElementById('paniniFull').style.height = "88%";
//    document.getElementById('clickMeFull2').style.display = "none";
  }
};

document.getElementById('panini').addEventListener('click', paniniClick, false);

  //Menu Mid

//---Sandwiches---

    //Hover

function sandwichMouseOver() {
  document.getElementById('sec2Logo').style.display = "none";
  document.getElementById('sandwich-full').style.display = "block";
};

document.getElementById('sandwich').addEventListener('mouseover', sandwichMouseOver,false);

function sandwichMouseOut() {
  document.getElementById('sec2Logo').style.display = "block";
  document.getElementById('sandwich-full').style.display = "none";
  document.getElementById('sandwich-full').style.top = "50%"; 
  document.getElementById('sandwich-full').style.transform = "translate(-50%, -50%)";
  document.getElementById('sandwich-full').style.height = "192px"
  document.getElementById('sandwichFull').style.height = "0";
};

document.getElementById('sandwich').addEventListener('mouseout', sandwichMouseOut,false);

    //Click

function sandwichClick() {
  if(screenSize <= 770) {
    document.getElementById('sandwich-full').style.top = "16px"; 
    document.getElementById('sandwich-full').style.transform = "translate(-50%, 0)";
    document.getElementById('sandwich-full').style.height = "96%"
    document.getElementById('sandwichFull').style.height = "88%";
    autoScrollTo('fullMenuLink');
  }
  else {
    document.getElementById('sandwich-full').style.top = "16px"; 
    document.getElementById('sandwich-full').style.transform = "translate(-50%, 0)";
    document.getElementById('sandwich-full').style.height = "96%"
    document.getElementById('sandwichFull').style.height = "88%";
//    document.getElementById('clickMeFull3').style.display = "none";
  }
};

document.getElementById('sandwich').addEventListener('click', sandwichClick, false);

//---Soup And Salad---

    //Hover

function soupSaladMouseOver() {
  document.getElementById('sec2Logo').style.display = "none";
  document.getElementById('soup-salad-full').style.display = "block";
};

document.getElementById('soup-salad').addEventListener('mouseover', soupSaladMouseOver, false);

function soupSaladMouseOut() {
  document.getElementById('sec2Logo').style.display = "block";
  document.getElementById('soup-salad-full').style.display = "none";
  document.getElementById('soup-salad-full').style.top = "50%"; 
  document.getElementById('soup-salad-full').style.transform = "translate(-50%, -50%)";
  document.getElementById('soupSaladFull').style.height = "0";
};

document.getElementById('soup-salad').addEventListener('mouseout', soupSaladMouseOut, false);

    //Click

function soupSaladClick() {
  if(screenSize <= 770) {
    document.getElementById('soup-salad-full').style.top = "16px"; 
    document.getElementById('soup-salad-full').style.transform = "translate(-50%, 0)";
    document.getElementById('soupSaladFull').style.height = "512px";
    autoScrollTo('fullMenuLink');
  }
  else {
    document.getElementById('soup-salad-full').style.top = "16px"; 
    document.getElementById('soup-salad-full').style.transform = "translate(-50%, 0)";
    document.getElementById('soupSaladFull').style.height = "512px";
//    document.getElementById('clickMeFull4').style.display = "none";
  }
};

document.getElementById('soup-salad').addEventListener('click', soupSaladClick, false);

//---Savory Crepes---

    //Hover

function savoryCrepesMouseOver() {
  document.getElementById('sec2Logo').style.display = "none";
  document.getElementById('savory-crepes-full').style.display = "block";
};

document.getElementById('savory-crepes').addEventListener('mouseover', savoryCrepesMouseOver, false);

function savoryCrepesMouseOut() {
  document.getElementById('sec2Logo').style.display = "block";
  document.getElementById('savory-crepes-full').style.display = "none";
  document.getElementById('savory-crepes-full').style.top = "50%"; 
  document.getElementById('savory-crepes-full').style.transform = "translate(-50%, -50%)";
  document.getElementById('savoryCrepesFull').style.height = "0";
};

document.getElementById('savory-crepes').addEventListener('mouseout', savoryCrepesMouseOut, false);

    //Click

function savoryCrepesClick() {
  if(screenSize <= 770) {
    document.getElementById('savory-crepes-full').style.top = "16px"; 
    document.getElementById('savory-crepes-full').style.transform = "translate(-50%, 0)";
    document.getElementById('savoryCrepesFull').style.height = "512px";
    autoScrollTo('fullMenuLink');
  }
  else {
    document.getElementById('savory-crepes-full').style.top = "16px"; 
    document.getElementById('savory-crepes-full').style.transform = "translate(-50%, 0)";
    document.getElementById('savoryCrepesFull').style.height = "512px";
//    document.getElementById('clickMeFull5').style.display = "none";
  }
};

document.getElementById('savory-crepes').addEventListener('click', savoryCrepesClick, false);

  //Menu Bottom

//---Sweet Crepes---

    //Hover

function sweetCrepesMouseOver() {
  document.getElementById('sec2Logo').style.display = "none";
  document.getElementById('sweet-crepes-full').style.display = "block";
};

document.getElementById('sweet-crepes').addEventListener('mouseover', sweetCrepesMouseOver, false);

function sweetCrepesMouseOut() {
  document.getElementById('sec2Logo').style.display = "block";
  document.getElementById('sweet-crepes-full').style.display = "none";
  document.getElementById('sweet-crepes-full').style.top = "50%";
  document.getElementById('sweet-crepes-full').style.height = "192px"
  document.getElementById('sweet-crepes-full').style.transform = "translate(-50%, -50%)";
  document.getElementById('sweetCrepesFull').style.height = "0";
};

document.getElementById('sweet-crepes').addEventListener('mouseout', sweetCrepesMouseOut, false);

    //Click

function sweetCrepesClick() {
  if(screenSize <= 770) {
    document.getElementById('sweet-crepes-full').style.top = "16px"; 
    document.getElementById('sweet-crepes-full').style.transform = "translate(-50%, 0)";
    document.getElementById('sweet-crepes-full').style.height = "96%"
    document.getElementById('sweetCrepesFull').style.height = "88%";
    autoScrollTo('fullMenuLink');
  }
  else {
    document.getElementById('sweet-crepes-full').style.top = "16px"; 
    document.getElementById('sweet-crepes-full').style.transform = "translate(-50%, 0)";
    document.getElementById('sweet-crepes-full').style.height = "96%"
    document.getElementById('sweetCrepesFull').style.height = "88%";
//    document.getElementById('clickMeFull6').style.display = "none";
  }
};

document.getElementById('sweet-crepes').addEventListener('click', sweetCrepesClick, false);

//---Kids---

    //Hover

function kidsMouseOver() {
  document.getElementById('sec2Logo').style.display = "none";
  document.getElementById('kids-full').style.display = "block";
};

document.getElementById('kids').addEventListener('mouseover', kidsMouseOver, false);

function kidsMouseOut() {
  document.getElementById('sec2Logo').style.display = "block";
  document.getElementById('kids-full').style.display = "none";
  document.getElementById('kids-full').style.top = "50%"; 
  document.getElementById('kids-full').style.height = "192px"
  document.getElementById('kids-full').style.transform = "translate(-50%, -50%)";
  document.getElementById('kidsFull').style.height = "0";
};

document.getElementById('kids').addEventListener('mouseout', kidsMouseOut, false);

    //Click

function kidsClick() {
  if(screenSize <= 770) {
    document.getElementById('kids-full').style.top = "16px"; 
    document.getElementById('kids-full').style.transform = "translate(-50%, 0)";
    document.getElementById('kids-full').style.height = "96%"
    document.getElementById('kidsFull').style.height = "88%";
    autoScrollTo('fullMenuLink');
  }
  else {
    document.getElementById('kids-full').style.top = "16px"; 
    document.getElementById('kids-full').style.transform = "translate(-50%, 0)";
    document.getElementById('kids-full').style.height = "96%"
    document.getElementById('kidsFull').style.height = "88%";
//    document.getElementById('clickMeFull7').style.display = "none";
  }
};

document.getElementById('kids').addEventListener('click', kidsClick, false);

//---Drink---

    //Hover

function drinkMouseOver() {
  document.getElementById('sec2Logo').style.display = "none";
  document.getElementById('drink-full').style.display = "block";
};

document.getElementById('drink').addEventListener('mouseover', drinkMouseOver, false);

function drinkMouseOut() {
  document.getElementById('sec2Logo').style.display = "block";
  document.getElementById('drink-full').style.display = "none";
  document.getElementById('drink-full').style.top = "50%"; 
  document.getElementById('drink-full').style.transform = "translate(-50%, -50%)";
  document.getElementById('drinkFull').style.height = "0";
};

document.getElementById('drink').addEventListener('mouseout', drinkMouseOut, false);


    //Click

function drinkClick() {
  if(screenSize <= 770) {
    document.getElementById('drink-full').style.top = "30px"; 
    document.getElementById('drink-full').style.transform = "translate(-50%, 0)";
    document.getElementById('drinkFull').style.height = "512px";
    autoScrollTo('fullMenuLink');
  }
  else {
    document.getElementById('drink-full').style.top = "30px"; 
    document.getElementById('drink-full').style.transform = "translate(-50%, 0)";
    document.getElementById('drinkFull').style.height = "512px";
//    document.getElementById('clickMeFull8').style.display = "none";
  }
};

document.getElementById('drink').addEventListener('click', drinkClick, false);

//--------------------Facebook---------------------------

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//--------------------Google Map-------------------------

function init_map() {
  var myOptions = {
    zoom:18,
    center:new google.maps.LatLng(40.3778755,-111.80300669999997),
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
  var marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(40.3775755,-111.80300669999997)});
  var infowindow = new google.maps.InfoWindow({content:'<strong>The Avenue Bakery</strong><br>35 Barratt Ave, American Fork, UT 84003<br>'});
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', init_map);

//--------------------Twitter----------------------------

!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id)){
    js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);
  }
}
(document,"script","twitter-wjs");

//--------------------Scroll To Top----------------------

function scrollTop() {
  resetScroller('sectionOne');
};

document.getElementById('toTop1').addEventListener('click', scrollTop, false);

document.getElementById('toTop2').addEventListener('click', scrollTop, false);

//--------------------Site Nav---------------------------

  //---Nav One---

document.getElementById('siteNav1').addEventListener('click', scrollTop, false);

  //---Nav Two---

function navTwoScroll() {
  resetScroller('menuSection');
};

document.getElementById('siteNav2').addEventListener('click', navTwoScroll, false);

  //---Nav Three---

function navThreeScroll() {
  resetScroller('find-us-link');
};

document.getElementById('siteNav3').addEventListener('click', navThreeScroll, false);

  //---Nav Four---

function navFourScroll() {
  resetScroller('about-link');
};

document.getElementById('siteNav4').addEventListener('click', navFourScroll, false);

//--------------------Mobile Text------------------------

//var screenHeight = window.screen.height;
//
//function mobileText() {
//  //---IPhone 6---
//  if(screenSize === 375 && screenHeight === 667) {
//    console.log("iphone 6");
//    document.getElementById('aboutText').style.fontSize = '32px';
//    document.getElementById('aboutText').style.lineHeight= '23px';
//    document.getElementById('aboutUsLinks1').style.fontSize = '30px';
//    document.getElementById('aboutUsLinks2').style.fontSize = '30px';
//    document.getElementById('aboutUsLinks3').style.fontSize = '30px';
//    document.getElementById('aboutUsLinks4').style.fontSize = '30px';
//    document.getElementById('aboutUsLinks5').style.fontSize = '30px';
//    document.getElementById('aboutUsLinks6').style.fontSize = '30px';
//    document.getElementById('aboutUsLinks7').style.fontSize = '30px';
//    document.getElementById('aboutUsLinks8').style.fontSize = '23px';
//  }
//  //---IPhone 6 Plus---
//  else if(screenSize === 414 && screenHeight === 736) {
//    console.log("iphone 6 plus");
//    document.getElementById('aboutText').style.fontSize = '37px';
//    document.getElementById('aboutText').style.lineHeight= '25px';
//    document.getElementById('aboutUsLinks1').style.fontSize = '35px';
//    document.getElementById('aboutUsLinks2').style.fontSize = '35px';
//    document.getElementById('aboutUsLinks3').style.fontSize = '35px';
//    document.getElementById('aboutUsLinks4').style.fontSize = '35px';
//    document.getElementById('aboutUsLinks5').style.fontSize = '35px';
//    document.getElementById('aboutUsLinks6').style.fontSize = '35px';
//    document.getElementById('aboutUsLinks7').style.fontSize = '35px';
//    document.getElementById('aboutUsLinks8').style.fontSize = '24px';
//  }
//  //---Nexus 5X---
//  else if(screenSize === 411 && screenHeight === 731) {
//    console.log("Nexus 5X");
//    document.getElementById('aboutText').style.fontSize = '33px';
//    document.getElementById('aboutText').style.lineHeight= '25px';
//    document.getElementById('aboutUsLinks1').style.fontSize = '31px';
//    document.getElementById('aboutUsLinks2').style.fontSize = '31px';
//    document.getElementById('aboutUsLinks3').style.fontSize = '31px';
//    document.getElementById('aboutUsLinks4').style.fontSize = '31px';
//    document.getElementById('aboutUsLinks5').style.fontSize = '31px';
//    document.getElementById('aboutUsLinks6').style.fontSize = '31px';
//    document.getElementById('aboutUsLinks7').style.fontSize = '31px';
//    document.getElementById('aboutUsLinks8').style.fontSize = '24px';
//  }
//  //---Nexus 6P---
//  else if(screenSize === 435 && screenHeight === 773) {
//    console.log("Nexus 6P");
//    document.getElementById('aboutText').style.fontSize = '36px';
//    document.getElementById('aboutText').style.lineHeight= '29px';
//    document.getElementById('aboutUsLinks1').style.fontSize = '34px';
//    document.getElementById('aboutUsLinks2').style.fontSize = '34px';
//    document.getElementById('aboutUsLinks3').style.fontSize = '34px';
//    document.getElementById('aboutUsLinks4').style.fontSize = '34px';
//    document.getElementById('aboutUsLinks5').style.fontSize = '34px';
//    document.getElementById('aboutUsLinks6').style.fontSize = '34px';
//    document.getElementById('aboutUsLinks7').style.fontSize = '34px';
//    document.getElementById('aboutUsLinks8').style.fontSize = '28px';
//  }
//  //---Galaxy S5---
//  else if(screenSize === 360 && screenHeight === 640) {
//    console.log("Galaxy S5");
//    document.getElementById('aboutText').style.fontSize = '28px';
//    document.getElementById('aboutText').style.lineHeight= '25px';
//    document.getElementById('aboutUsLinks1').style.fontSize = '26px';
//    document.getElementById('aboutUsLinks2').style.fontSize = '26px';
//    document.getElementById('aboutUsLinks3').style.fontSize = '26px';
//    document.getElementById('aboutUsLinks4').style.fontSize = '26px';
//    document.getElementById('aboutUsLinks5').style.fontSize = '26px';
//    document.getElementById('aboutUsLinks6').style.fontSize = '26px';
//    document.getElementById('aboutUsLinks7').style.fontSize = '26px';
//    document.getElementById('aboutUsLinks8').style.fontSize = '23px';
//  }
//}
//
//mobileText();
