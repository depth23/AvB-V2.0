"use strict";



//--------------------Auto Scroll For Links==============

//var scrollY = 0;
//var distance = 40;
//var speed = 24;
//function autoScrollTo(el) {
//  console.log(document.getElementById(el));
//  var currentY = window.pageYOffset;
//  var targetY = elem(el).offsetTop;
//  var bodyHeight = document.body.offsetHeight;
//  var yPos = currentY + window.innerHeight;
//  var animator = setTimeout('autoScrollTo(""\''+el+'\'"")', speed);
//  if(yPos > bodyHeight) {
//    clearTimeout(animator);
//  }
//  else {
//    if(currentY < targetY - distance) {
//      scrollY = currentY + distance;
//      window.scroll(0, scrollY);
//    }
//    else {
//      clearTimeout(animator);
//    }
//  }
//  console.log(scrollY);
//};

//function resetScroller(el) {
//  var currentY = window.pageYOffset;
//  var targetY = elem(el).offsetTop;
//  var animator = setTimeout('resetScroller(\''+el+'\')', speed);
//  if(currentY > targetY) {
//    scrollY = currentY - distance;
//    window.scroll(0, scrollY);
//  }
//  else {
//    clearTimeout(animator);
//  }
//  if(scrollY <= 20) {
//    clearTimeout(animator);
//  }
//};

//elem('menu-link').addEventListener('onmousedown', function() {
//  console.log('clicked');
//  autoScrollTo('menu-linked');
//});

//--------------------Hamburger Menu---------------------

document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('hamburger').style.display = "none";
  document.getElementById('pop-out-one').style.transition = "right 1s";
  document.getElementById('pop-out-one').style.right = "1rem";
  document.getElementById('pop-out-two').style.transition = "right 1.25s";
  document.getElementById('pop-out-two').style.right = "1rem";
  document.getElementById('pop-out-three').style.transition = "right 1.5s";
  document.getElementById('pop-out-three').style.right = "1rem";
  document.getElementById('pop-out-four').style.transition = "right 1.75s";
  document.getElementById('pop-out-four').style.right = "1rem";
});

document.getElementById('pop-out-one').addEventListener('click', function() {
  document.getElementById('hamburger').style.display = "inline-block";
  document.getElementById('pop-out-one').style.transition = "right 1s";
  document.getElementById('pop-out-one').style.right = "-13rem";
  document.getElementById('pop-out-two').style.transition = "right 1.25s";
  document.getElementById('pop-out-two').style.right = "-13rem";
  document.getElementById('pop-out-three').style.transition = "right 1.5s";
  document.getElementById('pop-out-three').style.right = "-13rem";
  document.getElementById('pop-out-four').style.transition = "right 1.75s";
  document.getElementById('pop-out-four').style.right = "-13rem";
//  autoScrollTo('menu-linked');
});

document.getElementById('pop-out-two').addEventListener('click', function() {
  document.getElementById('hamburger').style.display = "inline-block";
  document.getElementById('pop-out-one').style.transition = "right 1.75s";
  document.getElementById('pop-out-one').style.right = "-13rem";
  document.getElementById('pop-out-two').style.transition = "right 1s";
  document.getElementById('pop-out-two').style.right = "-13rem";
  document.getElementById('pop-out-three').style.transition = "right 1.25s";
  document.getElementById('pop-out-three').style.right = "-13rem";
  document.getElementById('pop-out-four').style.transition = "right 1.5s";
  document.getElementById('pop-out-four').style.right = "-13rem";
});

document.getElementById('pop-out-three').addEventListener('click', function() {
  document.getElementById('hamburger').style.display = "inline-block";
  document.getElementById('pop-out-one').style.transition = "right 1.5s";
  document.getElementById('pop-out-one').style.right = "-13rem";
  document.getElementById('pop-out-two').style.transition = "right 1.25s";
  document.getElementById('pop-out-two').style.right = "-13rem";
  document.getElementById('pop-out-three').style.transition = "right 1s";
  document.getElementById('pop-out-three').style.right = "-13rem";
  document.getElementById('pop-out-four').style.transition = "right 1.75s";
  document.getElementById('pop-out-four').style.right = "-13rem";
});

document.getElementById('pop-out-four').addEventListener('click', function() {
  document.getElementById('hamburger').style.display = "inline-block";
  document.getElementById('pop-out-one').style.transition = "right 1.75s";
  document.getElementById('pop-out-one').style.right = "-13rem";
  document.getElementById('pop-out-two').style.transition = "right 1.5s";
  document.getElementById('pop-out-two').style.right = "-13rem";
  document.getElementById('pop-out-three').style.transition = "right 1.25s";
  document.getElementById('pop-out-three').style.right = "-13rem";
  document.getElementById('pop-out-four').style.transition = "right 1s";
  document.getElementById('pop-out-four').style.right = "-13rem";
});

//--------------------Sec 1 Share Icons------------------

document.getElementById('sec-1-share-tab').addEventListener('mouseenter', function() {
  document.getElementById('sec-1-share-lnk-cntnr').style.transition = "visibility 2s";
  document.getElementById('sec-1-share-lnk-cntnr').style.visibility = "visible";
  document.getElementById('sec-1-share-tab').style.opacity = "0";
  document.getElementById('sec-1-share-cntnr').style.left = "-4.5rem";
  document.getElementById('sec-1-faceb').style.transition = "opacity 0.5s";
  document.getElementById('sec-1-faceb').style.opacity = "1";
  document.getElementById('sec-1-intg').style.transition = "opacity 1.25s";
  document.getElementById('sec-1-intg').style.opacity = "1";
  document.getElementById('sec-1-twit').style.transition = "opacity 2s";
  document.getElementById('sec-1-twit').style.opacity = "1";
});


document.getElementById('sec-1-share-cntnr').addEventListener('mouseleave', function() {
  document.getElementById('sec-1-share-lnk-cntnr').style.transition = "visibility 2s";
  document.getElementById('sec-1-share-lnk-cntnr').style.visibility = "hidden";
  document.getElementById('sec-1-share-tab').style.opacity = "1";
  document.getElementById('sec-1-share-cntnr').style.left = "4rem";
  document.getElementById('sec-1-faceb').style.transition = "opacity 2s";
  document.getElementById('sec-1-faceb').style.opacity = "0";
  document.getElementById('sec-1-intg').style.transition = "opacity 1.25s";
  document.getElementById('sec-1-intg').style.opacity = "0";
  document.getElementById('sec-1-twit').style.transition = "opacity 0.5s";
  document.getElementById('sec-1-twit').style.opacity = "0";
});

//----------------------Menu-----------------------------

  //Menu Top

    //Hover

//document.getElementById("menuTop").addEventListener('mouseover', displayMenuTop, false);
//
//function displayMenuTop(e) {
//  Breakfast
//  if(e.target !== e.currentTarget && e.target <= "bfast") {
//    document.getElementById('sec2Logo').style.display = "none"; 
//    document.getElementById('breakfast-full').style.display = "block"; 
//  }
//  Panini
//  else if(e.target !== e.currentTarget && e.target <= "panini") {
//    document.getElementById('sec2Logo').style.display = "none";
//    document.getElementById('panini-full').style.display = "block"; 
//  }
//  Sandwiches
//  else if() {
//    document.getElementById('sec2Logo').style.display = "none";
//    document.getElementById('sandwich-full').style.display = "block"; 
//  }
//  e.stopImmediatePropagation();
//};

//document.getElementById("menuTop").addEventListener('mouseout', HideMenuTop, false);
//
//function HideMenuTop() {
  //  if() {
//    document.getElementById('sec2Logo').style.display = "block"; 
//    document.getElementById('breakfast-full').style.display = "none"; 
//  }
//  else if() {
//    document.getElementById('sec2Logo').style.display = "block";
//    document.getElementById('panini-full').style.display = "none"; 
//  }
//  else if() {
//    document.getElementById('sec2Logo').style.display = "block";
//    document.getElementById('sandwich-full').style.display = "none"; 
//  }
//}

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
};

document.getElementById('bfast').addEventListener('mouseout', breakfastMouseOut,false);

    //Click

//elem('bfast').addEventListener('click', function() {
//  elem('bfastTop').style.top = '1rem';
//  elem('bfastTop').style.transform = 'translate(-50%, 0)';
//  elem('bfastFull').style.height = '33rem';
//  console.log('clicked');
//}, false);

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
};

document.getElementById('panini').addEventListener('mouseout', paniniMouseOut,false);

    //Click

//elem('bfast').addEventListener('mousedown', function() {
// style here
//});

//Sandwiches

    //Hover

function sandwichMouseOver() {
  document.getElementById('sec2Logo').style.display = "none";
  document.getElementById('sandwich-full').style.display = "block";
};

document.getElementById('sandwich').addEventListener('mouseover', sandwichMouseOver,false);

function sandwichMouseOut() {
  document.getElementById('sec2Logo').style.display = "block";
  document.getElementById('sandwich-full').style.display = "none"; 
};

document.getElementById('sandwich').addEventListener('mouseout', sandwichMouseOut,false);

    //Click

//elem('bfast').addEventListener('mousedown', function() {
// style here
//});

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
};

document.getElementById('soup-salad').addEventListener('mouseout', soupSaladMouseOut, false);


    //Click

//elem('bfast').addEventListener('mousedown', function() {
// style here
//});

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
};

document.getElementById('savory-crepes').addEventListener('mouseout', savoryCrepesMouseOut, false);

    //Click

//elem('bfast').addEventListener('mousedown', function() {
// style here
//});

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
};

document.getElementById('sweet-crepes').addEventListener('mouseout', sweetCrepesMouseOut, false);

    //Click

//elem('bfast').addEventListener('mousedown', function() {
// style here
//});

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
};

document.getElementById('kids').addEventListener('mouseout', kidsMouseOut, false);

    //Click

//elem('bfast').addEventListener('mousedown', function() {
// style here
//});

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
};

document.getElementById('drink').addEventListener('mouseout', drinkMouseOut, false);


//  elem('drink').innerHTML = '<p class="click-me-full">Click For More!</p>';
//  elem('menu-window').innerHTML = '<div class="menu-item-full" id="drink">' +
//                                    '<img class="drinks-img-full" src="./img/cherry-topped-cake.jpg" alt="Cold Drinks" />' +
//                                    '<div class="menu-title-wrap-full drink-title-wrap-full">' +
//                                      '<h3 class="drinks-item-title-full">DRINK MENU</h3>' +
//                                    '</div>' +
//                                  '</div>';


    //Click

//elem('bfast').addEventListener('mousedown', function() {
// style here
//});

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
  var infowindow = new google.maps.InfoWindow({content:'<strong>The Avenue Bakery</strong><br>35, Barratt Ave, American Fork, UT 84003<br>'});
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