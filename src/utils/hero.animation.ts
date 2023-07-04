import gsap from 'gsap';

export const heroAnimation = () => {
  let tl = gsap.timeline();

  tl.to('.logo', { scale: 1, duration: 0.9 });
  tl.to('.red__container ', { opacity: 1, duration: 0.9 });
  tl.to('.title--nav', { scale: 1, duration: 0.7 });
  tl.to('.cta__title', { opacity: 1, duration: 0.7 });
  tl.to('.cta__line', { opacity: 1, duration: 0.7 });
  tl.to('.cta__para', { opacity: 1, duration: 0.8 });
  tl.to('.cta__container .btn', { opacity: 1, duration: 0.8 });

  return tl;
};
