AOS.init();

var textWrapper = document.querySelector('.anim .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
.add({
  targets: '.anim .letter',
  opacity: [0],
  duration: 2000
})
.add({
    targets: '.anim .letter',
    scale: [0, 1],
    opacity: [0, 1],
    duration: 1800,
    elasticity: 600,
    delay: (el, i) => 50 * (i+1)
});



function next(x){
    var carousel = document.getElementsByClassName(x);
    var i;
    var n_of_items = carousel.length;
    for (i = 0; i < n_of_items; i++) {

        if((i == 0) && (carousel[(n_of_items - 1)].classList.contains("flip-reverse"))){
            carousel[(n_of_items - 1)].classList.toggle("flip-reverse");
        }
        
        if(carousel[i].classList.contains("active")){

            carousel[i].classList.toggle("flip-reverse");
            carousel[i].classList.toggle("active");
            
            if(i == carousel.length-1){
                carousel[0].classList.toggle("active");
                carousel[0].classList.toggle("flip");
                carousel[i].classList.toggle("flip");
                carousel[i-1].classList.toggle("flip-reverse");
                break;
            }else {
                carousel[i+1].classList.toggle("active");
                carousel[i+1].classList.toggle("flip");
                carousel[i].classList.toggle("flip");
                carousel[i-1].classList.toggle("flip-reverse");
                break;
            }
    }
}
}


class HoverButton {
    constructor(el) {
      this.el = el;
      this.hover = false;
      this.calculatePosition();
      this.attachEventsListener();
    }
    attachEventsListener() {
      window.addEventListener('mousemove', e => this.onMouseMove(e));
      window.addEventListener('resize', e => this.calculatePosition(e));
    }
    
    calculatePosition() {
      gsap.set(this.el, {
        x: 0,
        y: 0,
        scale: 1
      });
      const box = this.el.getBoundingClientRect();
      this.x = box.left + (box.width * 0.5);
      this.y = box.top + (box.height * 0.5);
      this.width = box.width;
      this.height = box.height;
    }
    
    onMouseMove(e) {
      let hover = false;
      let hoverArea = (this.hover ? 0.7 : 0.5);
      let x = e.clientX - this.x;
      let y = e.clientY - this.y;
      let distance = Math.sqrt( x*x + y*y );
      if (distance < (this.width * hoverArea)) {
         hover = true;
          if (!this.hover) {
            this.hover = true;
          }
          this.onHover(e.clientX, e.clientY);
      }
      
      if(!hover && this.hover) {
        this.onLeave();
        this.hover = false;
      }
    }
    
    onHover(x, y) {
      gsap.to(this.el,  {
        x: (x - this.x) * 0.4,
        y: (y - this.y) * 0.4,
        scale: 1.15,
        ease: 'power2.out',
        duration: 0.4
      });
      this.el.style.zIndex = 10;
    }
    onLeave() {
      gsap.to(this.el, {
        x: 0,
        y: 0,
        scale: 1,
        ease: 'elastic.out(1.2, 0.4)',
        duration: 0.7
      });
      this.el.style.zIndex = 1;
    }
}

const tt = document.getElementById("test");
new HoverButton(tt);
   
function ToggleClass(x, y) {
  var el = document.getElementById(x);
  el.classList.toggle(y);
}


