import Highway from "@dogstudio/highway";
import {TimelineLite} from "gsap";

class Fade extends Highway.Transition {
   in({from, done}){
      done();
   }
   out({from, to, done}){
      const tl = new TimelineLite();
      tl.fromTo(from, 0.2,
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

export default Fade;
