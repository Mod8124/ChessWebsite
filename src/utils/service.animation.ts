import gsap from 'gsap';

export const serviceAnimation = () => {
  const serviceAnimation = gsap.timeline({ paused: true, defaults: { ease: 'power1.out' } });

  serviceAnimation.set('.services__title', { background: 'white', duration: 0.8 });
  serviceAnimation.set('.services__title .title__title', { color: 'black', duration: 0.8 });
  serviceAnimation.set('.services__para', { color: 'black', duration: 0.8 });

  serviceAnimation.to('.services__title', { background: 'black', duration: 0.6 });
  serviceAnimation.to('.services__title .title__title', { color: 'white', duration: 0.4 });
  serviceAnimation.to('.services__para', { color: 'white', duration: 0.4 });

  return serviceAnimation;
};
