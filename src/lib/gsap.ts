import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Suppress "target not found" warnings codebase-wide (Best practice for React)
gsap.config({ nullTargetWarn: false });

export { gsap };
