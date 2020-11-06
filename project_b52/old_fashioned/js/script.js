new fullpage('#fullpage', {
    autoscrolling: true,
    verticalCentered: true,
    dragAndMove: true,
    parallax: true
})

anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  });

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS

  };


  










/*var classes = document.getElementsByClassName("text");
var values = [].map.call(classes, function(el){
    return el.value;
})

var values = document.querySelectorAll(".text");
var i = 0;

var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);

var el;
var timeout = false, waitforscroll = 1000;
function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    console.log('UP');
  } else {
    console.log('Down');
    var element = document.getElementById("test");s
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
    i=i+1;
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

*/

/*
document.body.addEventListener('wheel', checkScrollDirection);
var go= true, timeout = 500;
function checkScrollDirection(event) {
    if (go) {
        if (checkScrollDirectionIsUp(event)) {
            go = false;
            console.log('UP');
            scrollprev;
            setTimeout(function(){
                go = true;
            },timeout);

        } else {
            go = false;
            console.log('Down');
            var el = document.getElementById("header");
            el.scrollIntoView();
            setTimeout(function(){
                go = true;
            },timeout);
        }
    }
}
function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}
function scrollnext(){
    var i = 0;
    /*var classes = document.getElementsByClassName("text");
    var el = classes[0];
    */
/*
    var el = document.getElementById("header");
    el.scrollIntoView();
    i=i+1;
}
function scrollprev(){
    /*var classes = document.getElementsByClassName("text");
    var el = classes[0];
    */
/*
    el = document.getElementById("text");
    el.scrollIntoView();
    i=i-1;
}


var classes = document.getElementsByClassName("text");
for (var j = 0; j < classes.length; j++){

    console.log(classes[j]);
    
    }

*/


/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 50) {
        document.getElementById("navbar").style.opacity = "1";
    } else {
        document.getElementById("navbar").style.opacity = "0";
    }
    if (currentScrollPos > 500) {
        document.getElementById("sadrzaj").style.background = "linear-gradient(to top, #4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 86%, #432c39 100%)";
        document.getElementById("slike").style.marginLeft = "50%";
    } else {
        document.getElementById("sadrzaj").style.background = "white";   
        document.getElementById("slike").style.marginLeft = "105%"; 
    }
    prevScrollpos = currentScrollPos;
    if (currentScrollPos > 0 && currentScrollPos < 1400) {
        document.getElementById("opis1").style.opacity = "1";
    } else {
        document.getElementById("opis1").style.opacity = "0";
    }
    if (currentScrollPos > 1450 && currentScrollPos < 1800) {
        document.getElementById("opis2").style.opacity = "1";
    } else {
        document.getElementById("opis2").style.opacity = "0";
    }
    if (currentScrollPos > 1850 && currentScrollPos < 2200) {
        document.getElementById("opis3").style.opacity = "1";
    } else {
        document.getElementById("opis3").style.opacity = "0";
    }
    if (currentScrollPos > 2250 && currentScrollPos < 2600) {
        document.getElementById("opis4").style.opacity = "1";
    } else {
        document.getElementById("opis4").style.opacity = "0";
    }
}
*/