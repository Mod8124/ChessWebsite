import gsap from 'gsap';

export const formularyAnimation = () => {
  const formularyAnimation = gsap.timeline({ paused: true, defaults: { ease: 'power1.out' } });
  const panels = gsap.utils.toArray<HTMLElement>('.form__forms');

  formularyAnimation.fromTo(
    panels,
    { opacity: 0, duration: 0.5 },
    {
      opacity: 1,
      duration: 0.6,
      stagger: {
        each: 0.002,
      },
    },
  );

  formularyAnimation.fromTo(
    '.formulary .btn',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.6,
    },
  );

  return formularyAnimation;
};
