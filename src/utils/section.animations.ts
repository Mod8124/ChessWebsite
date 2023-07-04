import { aboutAnimation } from './about.animation';
import { aboutTwoAnimation } from './aboutTwo.animation';
import { serviceAnimation } from './service.animation';
import { formularyAnimation } from './formulary.animation';

export const sectionAnimations = () => {
  return [
    {
      trigger: '.section--hero',
      start: 'center',
      animation: aboutAnimation().play(),
    },
    {
      trigger: '.section--aboutTwo',
      start: 'top top',
      animation: aboutTwoAnimation().play(),
    },
    {
      trigger: '.section--services',
      start: 'top top',
      animation: serviceAnimation().play(),
    },
    {
      trigger: '.section--formulary',
      start: 'top top',
      animation: formularyAnimation().play(),
    },
  ];
};
