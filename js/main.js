import Highway from "@dogstudio/highway";
import { TimelineLite } from  'gsap';

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
	       }}, 0.2
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
	       }}, 0
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
	       }}, 0.1
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
	       }}, 0.1
	 )
   }
};

class Gal extends Highway.Transition {
   in({done}) {
      const tl = new TimelineMax();
      tl
	 .to( header, 0.5, { opacity: 0, y: -40, display: 'none' }, 0)
	 .fromTo( backGal, 0.5, { opacity: 0, x: -40, }, { opacity: 1, x: 0
	    }
	 )
	 .staggerFromTo( cell, 0.5,
	    { opacity: 0, y: 9, },
	    { opacity: 1, y: 0,
	       onComplete: function(){
		  done();
	       }}, 0.1
	 )
   }
   out({from, done}) {
      const tl = new TimelineMax();
      tl
	 .to( backGal, 0.5, { opacity: 0, x: -40 }
	 )
	 .staggerFromTo( cell, 0.5,
	    { opacity: 1, y: 0, },
	    { opacity: 0, y: 9}, 0.1 )
	 .to( header, 0.5, { opacity: 1, y: 0, display: 'block',
	    onComplete: function(){
	       from.remove();
	       done(); }}
	 )
   }
}

const H = new Highway.Core({
   transitions: {
      default: Default,
      gallery: Gallery,
      gal: Gal
   }
});
