import gsap from 'gsap';

export const aboutTwoAnimation = () => {
  const aboutTwoAnimation = gsap.timeline({ paused: true, defaults: { ease: 'power1.out' } });

  aboutTwoAnimation.to('.aboutTwo__material ', { opacity: 1, duration: 0.5 });

  return aboutTwoAnimation;
};
