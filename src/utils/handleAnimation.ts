import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { heroAnimation } from './hero.animation';
import { handleLoadAnimation } from './handleLoad';
import { sectionAnimations } from './section.animations';

export const handleAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const panels = gsap.utils.toArray<HTMLElement>('.section');
  const burger = document.querySelector<HTMLElement>('.burger');
  const containerMobile = document.querySelector<HTMLElement>('.containerMobile');

  panels.forEach((panel, index) => {
    const screenWidth = window.innerWidth;
    gsap.fromTo(
      panel,
      {
        x: index === 1 ? '100%' : '0%',
      },
      {
        x: index === 1 ? '0%' : '0%',
        scrollTrigger: {
          trigger: panel,
          start: () => (panel.offsetHeight < window.innerHeight ? 'top' : 'bottom bottom'),
          end: '+=300%',
          pin: screenWidth < 1024 && index === 2 ? false : true,
          pinSpacing: false,
        },
      },
    );
  });

  const sections = sectionAnimations();

  sections.forEach((section) => {
    const { trigger, start, animation } = section;
    ScrollTrigger.create({
      trigger,
      start,
      animation,
    });
  });

  document.documentElement.style.overflowX = 'hidden';

  const toggleMobile = () => {
    containerMobile?.classList.toggle('active');
  };

  burger?.addEventListener('click', toggleMobile);
  heroAnimation();

  // handle the load animation on load
  window.addEventListener('DOMContentLoaded', handleLoadAnimation);
};
