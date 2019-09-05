import Highway from "@dogstudio/highway";
import {TimelineLite} from "gsap";

class Index extends Highway.Transition {
   in({from, done}){
      done();
   }
   out({from, done}){
      const tl = new TimelineLite();
      tl.fromTo(from, 0.5,
	 {
	    opacity: '1',
	 },
	 {
	    opacity: '0',
	    onComplete: function() { from.remove(); done(); }
	 }
      );
   }
}

export default Index;
