import gsap from 'gsap';

export const aboutAnimation = () => {
  const aboutAnimation = gsap.timeline({ paused: true, defaults: { ease: 'power1.out' } });

  aboutAnimation.to('.about__about .title', { opacity: 1, duration: 0.5 });
  aboutAnimation.to('.about__para', { opacity: 1, duration: 0.5 });
  aboutAnimation.to('.about__imgImg', { opacity: 1, duration: 0.5 });

  return aboutAnimation;
};
