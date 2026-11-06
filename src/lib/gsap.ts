import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Suppress "target not found" warnings codebase-wide (Best practice for React)
gsap.config({ nullTargetWarn: false });

export { gsap, ScrollTrigger };
