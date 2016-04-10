"use strict";

var elem = function(id) {
  return document.getElementById(id);
};

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

elem('hamburger').addEventListener('click', function() {
  elem('hamburger').style.display = "none";
  elem('pop-out-one').style.transition = "right 1s";
  elem('pop-out-one').style.right = "1rem";
  elem('pop-out-two').style.transition = "right 1.25s";
  elem('pop-out-two').style.right = "1rem";
  elem('pop-out-three').style.transition = "right 1.5s";
  elem('pop-out-three').style.right = "1rem";
  elem('pop-out-four').style.transition = "right 1.75s";
  elem('pop-out-four').style.right = "1rem";
});

elem('pop-out-one').addEventListener('click', function() {
  elem('hamburger').style.display = "inline-block";
  elem('pop-out-one').style.transition = "right 1s";
  elem('pop-out-one').style.right = "-13rem";
  elem('pop-out-two').style.transition = "right 1.25s";
  elem('pop-out-two').style.right = "-13rem";
  elem('pop-out-three').style.transition = "right 1.5s";
  elem('pop-out-three').style.right = "-13rem";
  elem('pop-out-four').style.transition = "right 1.75s";
  elem('pop-out-four').style.right = "-13rem";
//  autoScrollTo('menu-linked');
});

elem('pop-out-two').addEventListener('click', function() {
  elem('hamburger').style.display = "inline-block";
  elem('pop-out-one').style.transition = "right 1.75s";
  elem('pop-out-one').style.right = "-13rem";
  elem('pop-out-two').style.transition = "right 1s";
  elem('pop-out-two').style.right = "-13rem";
  elem('pop-out-three').style.transition = "right 1.25s";
  elem('pop-out-three').style.right = "-13rem";
  elem('pop-out-four').style.transition = "right 1.5s";
  elem('pop-out-four').style.right = "-13rem";
});

elem('pop-out-three').addEventListener('click', function() {
  elem('hamburger').style.display = "inline-block";
  elem('pop-out-one').style.transition = "right 1.5s";
  elem('pop-out-one').style.right = "-13rem";
  elem('pop-out-two').style.transition = "right 1.25s";
  elem('pop-out-two').style.right = "-13rem";
  elem('pop-out-three').style.transition = "right 1s";
  elem('pop-out-three').style.right = "-13rem";
  elem('pop-out-four').style.transition = "right 1.75s";
  elem('pop-out-four').style.right = "-13rem";
});

elem('pop-out-four').addEventListener('click', function() {
  elem('hamburger').style.display = "inline-block";
  elem('pop-out-one').style.transition = "right 1.75s";
  elem('pop-out-one').style.right = "-13rem";
  elem('pop-out-two').style.transition = "right 1.5s";
  elem('pop-out-two').style.right = "-13rem";
  elem('pop-out-three').style.transition = "right 1.25s";
  elem('pop-out-three').style.right = "-13rem";
  elem('pop-out-four').style.transition = "right 1s";
  elem('pop-out-four').style.right = "-13rem";
});

//--------------------Sec 1 Share Icons------------------

elem('sec-1-share-tab').addEventListener('mouseenter', function() {
  elem('sec-1-share-lnk-cntnr').style.transition = "visibility 2s";
  elem('sec-1-share-lnk-cntnr').style.visibility = "visible";
  elem('sec-1-share-tab').style.opacity = "0";
  elem('sec-1-share-cntnr').style.left = "-4.5rem";
  elem('sec-1-faceb').style.transition = "opacity 0.5s";
  elem('sec-1-faceb').style.opacity = "1";
  elem('sec-1-intg').style.transition = "opacity 1.25s";
  elem('sec-1-intg').style.opacity = "1";
  elem('sec-1-twit').style.transition = "opacity 2s";
  elem('sec-1-twit').style.opacity = "1";
});


elem('sec-1-share-cntnr').addEventListener('mouseleave', function() {
  elem('sec-1-share-lnk-cntnr').style.transition = "visibility 2s";
  elem('sec-1-share-lnk-cntnr').style.visibility = "hidden";
  elem('sec-1-share-tab').style.opacity = "1";
  elem('sec-1-share-cntnr').style.left = "4rem";
  elem('sec-1-faceb').style.transition = "opacity 2s";
  elem('sec-1-faceb').style.opacity = "0";
  elem('sec-1-intg').style.transition = "opacity 1.25s";
  elem('sec-1-intg').style.opacity = "0";
  elem('sec-1-twit').style.transition = "opacity 0.5s";
  elem('sec-1-twit').style.opacity = "0";
});

//----------------------Menu-----------------------------

  //Menu Top

    //Hover
elem('menuTop').addEventListener('mouseover', function(e) {
  var eId = e.target.id;
  var elParent = e.target.parentNode.id;
  var elGrandParent = e.target.parentNode.parentNode.id;
  if(e.target !== e.currentTarget && eId === 'bfast' || 
     e.target !== e.currentTarget && elParent === 'bfast'||
     e.target !== e.currentTarget && elGrandParent === 'bfast') {
    elem('bfast').innerHTML = '<p class="click-me-full">Click For More!</p>';
    elem('menu-window').innerHTML = '<div class="menu-item-full" id="bfastTop">' +
                                    '<div class="bfast-image-wrap-full">' +
                                      '<span class="bfast-img-l-full">'  +
                                        '<img class="bfast-img-full" src="./img/cherry-topped-cake.jpg" alt="Breakfast Panini" />' +
                                      '</span>' +
                                      '<span class="bfast-img-r-full">' +
                                        '<img class="bfast-img-full" src="./img/cherry-topped-cake.jpg" alt="Breakfast Panini" />' +
                                      '</span>' +
                                    '</div>' +
                                    '<div class="menu-title-wrap-full bfast-title-wrap-full">' +   
                                      '<h3 class="menu-item-title-full">BREAKFAST</h3>' +
                                      '<p class="menu-sm-text-full">served until 10:30am</p>' +
                                    '</div>' +
                                  '</div>' +
                                  '<div class="bfast-full-item-cntnr" id="bfastFull">' +
                                    '<h5 class="bfast-full-top-and-bottom">all items served with fruit.<br />' +
                                      'all items $4.99' +
                                    '</h5>' +
                                    '<h6 class="bfast-full-titles">sunrise crepe</h6>' +
                                    '<p class="bfast-full-description">eggs, bacon, sausage, cheddar cheese, salsa.</p>' +
                                    '<h6 class="bfast-full-titles">wake up crepe</h6>' +
                                    '<p class="bfast-full-description">eggs, ham, cheddar cheese, salsa.</p>' +
                                    '<h6 class="bfast-full-titles">breakfast panini</h6>' +
                                    '<p class="bfast-full-description">eggs, bacon, sausage, cheddar cheese, spicy mayo, roasted red peppers, on sourdough bread.</p>' +
                                    '<h6 class="bfast-full-titles">ham & cheese croissant</h6>' +
                                    '<p class="bfast-full-description">eggs, cheddar cheese, on a flaky butter croissant.</p>' +
                                    '<h6 class="bfast-full-titles">breakfast bagel</h6>' +
                                    '<p class="bfast-full-description">eggs, ham, cheddar cheese, mayo, on a bagel.</p>' +
                                    '<h6 class="bfast-full-titles">bagel and cream cheese ($1.39 without fruit)</h6>' +
                                    '<p class="bfast-full-description">plain cheese, blueberry, cinnamon, with plain or strawberry cream cheese.</p>' +
                                    '<h6 class="bfast-full-titles">french toast</h6>' +
                                    '<p class="bfast-full-description">custard soaked bread grilled and topped with buttermilk syrup, strawberries, and whipping cream</p>' +
                                    '<h6 class="bfast-full-titles">waffle</h6>' +
                                    '<p class="bfast-full-description">belgian waffle topped with biscotti, strawberries, bananas, buttermilk syrup, and whipping cream.</p>' +
                                    '<h5 class="bfast-full-top-and-bottom">waffles and french toast served all day</h5>' +
                                  '</div>';
  }
  else if(e.target !== e.currentTarget && eId === 'panini' || 
          e.target !== e.currentTarget && elParent === 'panini' ||
          e.target !== e.currentTarget && elGrandParent === 'panini') {
    elem('panini').innerHTML = '<p class="click-me-full">Click For More!</p>';
    elem('menu-window').innerHTML = '<div class="menu-item-full" id="panini">' +
                                      '<div class="menu-title-wrap-full panini-title-wrap-full">' +
                                        '<h3 class="menu-item-title-full">PANINI</h3>' +
                                        '<p class="menu-sm-text-full">served until 5:30pm</p>' +
                                      '</div>' +
                                      '<div class="menu-lower-full panini-lower">' +
                                        '<p class="full-food-name panini-food-name">Beef Brisket Panini</p>' +
                                        '<div class="lower-rnd-l-full panini-lower"></div>' +
                                        '<div class="lower-rnd-r-wrap-full">' +
                                          '<div class="lower-rnd-r-full panini-lower"></div>' +
                                        '</div>' +
                                        '<img class="panini-img-full" src="./img/cherry-topped-cake.jpg" alt="Beef Brisket Panini and Drink" />' +
                                      '</div>' +
                                    '</div>';
  }
  else if(e.target !== e.currentTarget && eId === 'sandwich' || 
          e.target !== e.currentTarget && elParent === 'sandwich'||
          e.target !== e.currentTarget && elGrandParent === 'sandwich') {
    elem('sandwich').innerHTML = '<p class="click-me-full">Click For More!</p>';
    elem('menu-window').innerHTML = '<div class="menu-item-full" id="sandwich">' +
                                      '<div class="menu-title-wrap-full sandwiches-title-wrap-full">' +
                                        '<h3 class="menu-item-title-full">SANDWICHES</h3>' +
                                        '<p class="menu-sm-text-full">served until 5:30pm</p>' +
                                      '</div>' +
                                      '<div class="menu-lower-full sandwiches-lower">' +
                                        '<p class="full-food-name sandw-food-name">Turkey, Bacon, Avocado</p>' +
                                        '<div class="lower-rnd-l-full sandwiches-lower"></div>' +
                                        '<div class="lower-rnd-r-wrap-full">' +
                                          '<div class="lower-rnd-r-full sandwiches-lower"></div>' +
                                        '</div>' +
                                        '<img class="sandwiches-img-full" src="./img/cherry-topped-cake.jpg" alt="Beef Brisket Panini and Drink" />' +
                                      '</div>' +
                                    '</div>';
  }
  e.stopPropagation;
}, false);

    
elem('menuTop').addEventListener('mouseout', function(e) {
  var eId = e.target.id;
  var elParent = e.target.parentNode.id;
  var elGrandParent = e.target.parentNode.parentNode.id;
  if(e.target && eId !== 'bfast' && elParent !== 'bfast' && elGrandParent !== 'bfast') {
    elem('bfast').innerHTML = '<div class="bfast-image-wrap">' +
                                '<span class="bfast-img-l">' +
                                  '<img class="bfast-img" src="./img/cherry-topped-cake.jpg" alt="Breakfast Panini" />' +
                                '</span>' +
                                '<span class="bfast-img-r">' +
                                  '<img class="bfast-img" src="./img/cherry-topped-cake.jpg" alt="Breakfast Panini" />' +
                                '</span>' +
                              '</div>' +
                              '<div class="menu-title-wrap bfast-title-wrap">' + 
                                '<h3 class="menu-item-title">BREAKFAST</h3>' +
                                '<p class="menu-sm-text">served until 10:30am</p>' +
                              '</div>';
    elem('menu-window').innerHTML = '<img class="sec-2-logo" src="img/theavenuebakery2.png" alt="The Avenue Bakery Color Logo"/>' + 
                                    '<div id="menu-info">' + 
                                    '</div>';
  }
  else if(e.target && eId !== 'panini' && elParent !== 'panini' && elGrandParent !== 'panini') {
   elem('panini').innerHTML = '<div class="menu-title-wrap panini-title-wrap">' +
                                '<h3 class="menu-item-title">PANINI</h3>' +
                                '<p class="menu-sm-text">served until 5:30pm</p>' +
                              '</div>' +
                              '<div class="menu-lower panini-lower">' +
                                '<div class="lower-rnd-l panini-lower"></div>' +
                                  '<div class="lower-rnd-r-wrap">' +
                                  '<div class="lower-rnd-r panini-lower"></div>' +
                                '</div>' +
                                '<img class="panini-img" src="./img/cherry-topped-cake.jpg" alt="Beef Brisket Panini and Drink" />' +
                              '</div>';
//  elem('menu-window').innerHTML = '<img class="sec-2-logo" src="img/theavenuebakery2.png" alt="The Avenue Bakery Color Logo"/>' + 
//                                  '<div id="menu-info">' + '</div>';
  }
  else if(e.target && eId !== 'sandwich' && elParent !== 'sandwich' && elGrandParent !== 'sandwich') {
    elem('sandwich').innerHTML =  '<div class="menu-title-wrap sandwiches-title-wrap">' +
                                    '<h3 class="menu-item-title">SANDWICHES</h3>' +
                                    '<p class="menu-sm-text">served until 5:30pm</p>' +
                                  '</div>' +
                                  '<div class="menu-lower sandwiches-lower">' +
                                    '<div class="lower-rnd-l sandwiches-lower"></div>' +
                                    '<div class="lower-rnd-r-wrap">' +
                                      '<div class="lower-rnd-r sandwiches-lower"></div>' +
                                    '</div>' +
                                    '<img class="sandwiches-img" src="./img/cherry-topped-cake.jpg" alt="Beef Brisket Panini and Drink" />' +
                                  '</div>';
//    elem('menu-window').innerHTML = '<img class="sec-2-logo" src="img/theavenuebakery2.png" alt="The Avenue Bakery Color Logo"/>' + 
//                                    '<div id="menu-info">' + '</div>';
  }
  e.stopPropagation;
}, false);


//---Breakfast---

    //Click

//elem('bfast').addEventListener('click', function() {
//  elem('bfastTop').style.top = '1rem';
//  elem('bfastTop').style.transform = 'translate(-50%, 0)';
//  elem('bfastFull').style.height = '33rem';
//  console.log('clicked');
//}, false);

//---Panini---

    //Hover

//
//elem('panini').addEventListener('mouseleave', function() {
//  elem('panini').innerHTML =  '<div class="menu-title-wrap panini-title-wrap">' +
//                                '<h3 class="menu-item-title">PANINI</h3>' +
//                                '<p class="menu-sm-text">served until 5:30pm</p>' +
//                              '</div>' +
//                              '<div class="menu-lower panini-lower">' +
//                                '<div class="lower-rnd-l panini-lower"></div>' +
//                                  '<div class="lower-rnd-r-wrap">' +
//                                  '<div class="lower-rnd-r panini-lower"></div>' +
//                                '</div>' +
//                                '<img class="panini-img" src="./img/cherry-topped-cake.jpg" alt="Beef Brisket Panini and Drink" />' +
//                              '</div>';
//  elem('menu-window').innerHTML = '<img class="sec-2-logo" src="img/theavenuebakery2.png" alt="The Avenue Bakery Color Logo"/>' + 
//                                    '<div id="menu-info">' + '</div>';
//});

    //Click

//elem('bfast').addEventListener('mousedown', function() {
// style here
//});

//Sandwiches

    //Hover

//
//elem('sandwich').addEventListener('mouseleave', function() {
//  elem('sandwich').innerHTML =  '<div class="menu-title-wrap sandwiches-title-wrap">' +
//                                  '<h3 class="menu-item-title">SANDWICHES</h3>' +
//                                  '<p class="menu-sm-text">served until 5:30pm</p>' +
//                                '</div>' +
//                                '<div class="menu-lower sandwiches-lower">' +
//                                  '<div class="lower-rnd-l sandwiches-lower"></div>' +
//                                  '<div class="lower-rnd-r-wrap">' +
//                                    '<div class="lower-rnd-r sandwiches-lower"></div>' +
//                                  '</div>' +
//                                  '<img class="sandwiches-img" src="./img/cherry-topped-cake.jpg" alt="Beef Brisket Panini and Drink" />' +
//                                '</div>';
//  elem('menu-window').innerHTML = '<img class="sec-2-logo" src="img/theavenuebakery2.png" alt="The Avenue Bakery Color Logo"/>' + 
//                                    '<div id="menu-info">' + '</div>';
//});

    //Click

//elem('bfast').addEventListener('mousedown', function() {
// style here
//});

//---Soup And Salad---

    //Hover
elem('soup-salad').addEventListener('mouseenter', function() {
  elem('soup-salad').innerHTML = '<p class="click-me-full">Click For More!</p>';
  elem('menu-window').innerHTML = '<div class="menu-item-full" id="soup-salad">' +
                                    '<div class="s-and-s-img-wrap-full">' +
                                      '<img class="s-and-s-img-l-full" src="img/cherry-topped-cake.jpg" alt="Caesar Salad" />' +
                                      '<img class="s-and-s-img-r-full" src="img/cherry-topped-cake.jpg" alt="Soup and Salad" />' +
                                    '</div>' +
                                    '<div class="menu-title-wrap-full s-and-s-title-wrap">' +
                                      '<h3 class="menu-item-title-full s-and-s-title-full">SOUP AND SALADS</h3>' +
                                      '<p class="menu-sm-text-full">served until 5:30pm</p>' +
                                    '</div>' +
                                  '</div>';
});

elem('soup-salad').addEventListener('mouseleave', function() {
  elem('soup-salad').innerHTML =  '<div class="s-and-s-img-wrap">' +
                                    '<img class="s-and-s-img-l" src="img/cherry-topped-cake.jpg" alt="Caesar Salad" />' +
                                    '<img class="s-and-s-img-r" src="img/cherry-topped-cake.jpg" alt="Soup and Salad" />' +
                                  '</div>' +
                                  '<div class="menu-title-wrap s-and-s-title-wrap">' +
                                    '<h3 class="menu-item-title s-and-s-title">SOUP AND SALADS</h3>' +
                                    '<p class="menu-sm-text">served until 5:30pm</p>' +
                                  '</div>';
  elem('menu-window').innerHTML = '<img class="sec-2-logo" src="img/theavenuebakery2.png" alt="The Avenue Bakery Color Logo"/>' + 
                                    '<div id="menu-info">' + '</div>';
});

    //Click

//elem('bfast').addEventListener('mousedown', function() {
// style here
//});

//---Savory Crepes---

    //Hover
elem('savory-crepes').addEventListener('mouseenter', function() {
  elem('savory-crepes').innerHTML = '<p class="click-me-full">Click For More!</p>';
  elem('menu-window').innerHTML = '<div class="menu-item-full" id="savory-crepes">' +
                                    '<div class="sav-crepes-image-wrap-full">' +
                                      '<span class="sav-crepes-img-l-full">' +
                                        '<img class="sav-crepes-img-full" src="./img/cherry-topped-cake.jpg" alt="Breakfast Panini" />' +
                                        '<p class="sav-crepes-food-names">pacific drive crepe</p>' +
                                      '</span>' +
                                      '<span class="sav-crepes-img-r-full">' +
                                        '<img class="sav-crepes-img-full" src="./img/cherry-topped-cake.jpg" alt="Breakfast Panini" />' +
                                        '<p class="sav-crepes-food-names">barratt avenue crepe</p>' +
                                      '</span>' +
                                    '</div>' +
                                    '<div class="menu-title-wrap-full bfast-title-wrap-full">' +
                                      '<h3 class="menu-item-title-full">SAVORY CREPES</h3>' +
                                      '<p class="menu-sm-text-full">served from 10:30am to 5:30pm</p>' +
                                    '</div>' +
                                  '</div>';
});

elem('savory-crepes').addEventListener('mouseleave', function() {
  elem('savory-crepes').innerHTML = '<div class="sav-crepes-image-wrap">' +
                                      '<span class="sav-crepes-img-l">' +
                                        '<img class="sav-crepes-img" src="./img/cherry-topped-cake.jpg" alt="Breakfast Panini" />' +
                                      '</span>' +
                                      '<span class="sav-crepes-img-r">' +
                                        '<img class="sav-crepes-img" src="./img/cherry-topped-cake.jpg" alt="Breakfast Panini" />' +
                                      '</span>' +
                                    '</div>' +
                                    '<div class="menu-title-wrap bfast-title-wrap">' +
                                      '<h3 class="menu-item-title">SAVORY CREPES</h3>' +
                                      '<p class="menu-sm-text">served 10:30am to 5:30pm</p>' +
                                    '</div>';
  elem('menu-window').innerHTML = '<img class="sec-2-logo" src="img/theavenuebakery2.png" alt="The Avenue Bakery Color Logo"/>' + 
                                    '<div id="menu-info">' + '</div>';
});

    //Click

//elem('bfast').addEventListener('mousedown', function() {
// style here
//});

//---Sweet Crepes---

    //Hover
elem('sweet-crepes').addEventListener('mouseenter', function() {
  elem('sweet-crepes').innerHTML = '<p class="click-me-full">Click For More!</p>';
  elem('menu-window').innerHTML = '<div class="menu-item-full" id="sweet-crepes">' +
                                    '<div class="menu-title-wrap-full sw-crepes-title-wrap-full">' +
                                      '<h3 class="sw-crepes-item-title-full">SWEET CREPES</h3>' +
                                    '</div>' +
                                    '<div class="menu-lower-full sw-crepes-lower">' +
                                      '<p class="full-food-name sw-crepes-food-name">banana split crepe</p>' +
                                      '<div class="sw-crepes-rnd-l-full sw-crepes-lower"></div>' +
                                      '<div class="sw-crepes-rnd-r-wrap-full">' +
                                        '<div class="sw-crepes-rnd-r-full sw-crepes-lower"></div>' +
                                      '</div>' +
                                      '<img class="sw-crepes-img-full" src="./img/cherry-topped-cake.jpg" alt="Beef Brisket Panini and Drink" />' +
                                    '</div>' +  
                                  '</div>';
});

elem('sweet-crepes').addEventListener('mouseleave', function() {
  elem('sweet-crepes').innerHTML =  '<div class="menu-title-wrap sw-crepes-title-wrap">' +
                                      '<h3 class="sw-crepes-item-title">SWEET CREPES</h3>' +
                                    '</div>' +
                                    '<div class="menu-lower sw-crepes-lower">' +
                                      '<div class="sw-crepes-rnd-l sw-crepes-lower"></div>' +
                                      '<div class="sw-crepes-rnd-r-wrap">' +
                                        '<div class="sw-crepes-rnd-r sw-crepes-lower"></div>' +
                                      '</div>' +
                                      '<img class="sw-crepes-img" src="./img/cherry-topped-cake.jpg" alt="Beef Brisket Panini and Drink" />' +
                                    '</div>';
  elem('menu-window').innerHTML = '<img class="sec-2-logo" src="img/theavenuebakery2.png" alt="The Avenue Bakery Color Logo"/>' + 
                                    '<div id="menu-info">' + '</div>';
});

    //Click

//elem('bfast').addEventListener('mousedown', function() {
// style here
//});

//---Kids---

    //Hover
elem('kids').addEventListener('mouseenter', function() {
  elem('kids').innerHTML = '<p class="click-me-full">Click For More!</p>';
  elem('menu-window').innerHTML = '<div class="menu-item-full" id="kids">' +
                                    '<div class="menu-title-wrap-full kids-title-wrap-full">' +
                                      '<h3 class="menu-item-title-full">KIDS MENU</h3>' +
                                      '<p class="menu-sm-text-full">served until 5:30pm</p>' +
                                    '</div>' +
                                    '<div class="menu-lower-full kids-lower">' +
                                      '<p class="full-food-name kids-food-name">grilled ham and cheese</p>' +
                                      '<div class="lower-rnd-l-full kids-lower"></div>' +
                                      '<div class="lower-rnd-r-wrap-full">' +
                                        '<div class="lower-rnd-r-full kids-lower"></div>' +
                                      '</div>' +
                                      '<img class="kids-img-full" src="./img/cherry-topped-cake.jpg" alt="Beef Brisket Panini and Drink" />' +
                                    '</div>' +
                                  '</div>';
});

elem('kids').addEventListener('mouseleave', function() {
  elem('kids').innerHTML =  '<div class="menu-title-wrap kids-title-wrap">' +
                              '<h3 class="menu-item-title">KIDS MENU</h3>' +
                              '<p class="menu-sm-text">served until 5:30pm</p>' +
                            '</div>' +
                            '<div class="menu-lower kids-lower">' +
                              '<div class="lower-rnd-l kids-lower"></div>' +
                              '<div class="lower-rnd-r-wrap">' +
                                '<div class="lower-rnd-r kids-lower"></div>' +
                              '</div>' +
                              '<img class="kids-img" src="./img/cherry-topped-cake.jpg" alt="Beef Brisket Panini and Drink" />' +
                            '</div>';
  elem('menu-window').innerHTML = '<img class="sec-2-logo" src="img/theavenuebakery2.png" alt="The Avenue Bakery Color Logo"/>' + 
                                    '<div id="menu-info">' + '</div>';
});

    //Click

//elem('bfast').addEventListener('mousedown', function() {
// style here
//});

//---Drink---

    //Hover
elem('drink').addEventListener('mouseenter', function() {
  elem('drink').innerHTML = '<p class="click-me-full">Click For More!</p>';
  elem('menu-window').innerHTML = '<div class="menu-item-full" id="drink">' +
                                    '<img class="drinks-img-full" src="./img/cherry-topped-cake.jpg" alt="Cold Drinks" />' +
                                    '<div class="menu-title-wrap-full drink-title-wrap-full">' +
                                      '<h3 class="drinks-item-title-full">DRINK MENU</h3>' +
                                    '</div>' +
                                  '</div>';
});

elem('drink').addEventListener('mouseleave', function() {
  elem('drink').innerHTML = '<img class="drinks-img" src="./img/cherry-topped-cake.jpg" alt="Cold Drinks" />' +
                            '<div class="menu-title-wrap drink-title-wrap">' +
                              '<h3 class="drinks-item-title">DRINK MENU</h3>' +
                            '</div>';
  elem('menu-window').innerHTML = '<img class="sec-2-logo" src="img/theavenuebakery2.png" alt="The Avenue Bakery Color Logo"/>' + 
                                    '<div id="menu-info">' + '</div>';
});

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