import Highway from "@dogstudio/highway";
import { TimelineLite } from  'gsap';

var front	= document.getElementsByClassName("front");
var enterButton	= document.getElementsByClassName("enter-button");
var header 	= document.getElementsByClassName("header");
var cell 	= document.getElementsByClassName("cell");
var backGal 	= document.getElementsByClassName("back");
var galleryMenu = document.getElementsByClassName("gallery-menu");

class Default extends Highway.Transition {
   in({from, to, done}){
      const tl = new TimelineMax();
      tl
	 .fromTo( to, 0.7,
	    { opacity: 0, y: 10 },
	    { opacity: 1, y: 0,
	       onComplete: function(){
		  done();
	       }
	    }, 0.2
	 )
   }
   out({from, to, done}){
      const tl = new TimelineMax();
      tl
	 .fromTo( from, 0.5,
	    { opacity: 1 },
	    { opacity: 0, y: 10,
	       onComplete: function(){
		  from.remove();
		  done();
	       }
	    }, 0
	 )
   }
}

class Gallery extends Highway.Transition {
   in({from, to, done}) {
      const tl = new TimelineMax();
      tl
	 .staggerFromTo( galleryMenu, 0.7,
	    { opacity: 0, y: 9 },
	    { opacity: 1, y: 0,
	       onComplete: function(){
		  done();
	       }
	    }, 0.1, 0
	 )
   }
   out({from, to, done}) {
      const tl = new TimelineMax();
      tl
	 .staggerFromTo( galleryMenu, 0.5,
	    { opacity: 1, y: 0, },
	    { opacity: 0, y: 9,
	       onComplete: function(){
		  from.remove();
		  done();
	       }
	    }, -0.1
	 )
   }
};

class Gal extends Highway.Transition {
   in({done}) {
      const tl = new TimelineMax();
      tl
	 .to( header, 0.5, { opacity: 0, y: -40, display: 'none', ease: Back.easeIn }, 0)
	 .fromTo( backGal, 0.5, { opacity: 0, x: -40, }, { opacity: 1, x: 0 })
	 .staggerFromTo( cell, 0.5,
	    { opacity: 0, y: 9, },
	    { opacity: 1, y: 0,
	       onComplete: function(){
		  done();
	       }
	    }, 0.1
	 )
   }
   out({from, done}) {
      const tl = new TimelineMax();
      tl
	 .to( backGal, 0.5, { opacity: 0, x: -40 }, 0)
	 .staggerFromTo( cell, 0.5,
	    { opacity: 1, y: 0, },
	    { opacity: 0, y: 9 }, -0.1, 0.1 )
	 .to( header, 0.5, { opacity: 1, y: 0, display: 'block', ease: Back.easeOut,
	    onComplete: function(){
	       from.remove();
	       done(); 
	    }})
   }
}

class Index extends Highway.Transition {
   in({from, to, done}){
      const tl = new TimelineMax();
      tl
	 .to( header, 0, { opacity: 0, y: -40, display: 'none' }, 0)
	 .fromTo( front, 2.0, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 0)
	 .fromTo( enterButton, 2.0, { opacity: 0, y: 20 }, { opacity: 1, y: 0,
	       onComplete: function(){
		  done();
	       }
	    }, 0.2)
   }
   out({from, to, done}){
      const tl = new TimelineMax();
      tl
	 .fromTo( enterButton, 1.0, { opacity: 1, y: 0 }, { opacity: 0, y: 20
	 }, 0.0)
	 .fromTo( front, 0.7, { opacity: 1, y: 0 }, { opacity: 0, y: 20 }, 0)
	 .to( header, 0.5, { opacity: 1, y: 0, display: 'block',
	    ease: Back.easeOut,
	       onComplete: function(){
		  from.remove();
		  done();
	       }
	 }, 0.9)
   }
}

const H = new Highway.Core({
   transitions: {
      default: Default,
      gallery: Gallery,
      gal: Gal,
      index: Index
   }
});
