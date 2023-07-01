import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';

export const handleAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const panels = gsap.utils.toArray<HTMLElement>('.section');

  panels.forEach((panel) => {
    ScrollTrigger.create({
      trigger: panel,
      start: () => (panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom'),
      pin: true,
      pinSpacing: false,
    });
  });
};
