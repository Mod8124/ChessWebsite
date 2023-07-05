let indexSlider = 0;

export const setupSlider = (element: HTMLDivElement) => {
  const sliders = element.querySelectorAll<HTMLElement>('.paragra')!;
  const people = element.querySelectorAll<HTMLElement>('.person')!;

  sliders.forEach((slider) => (slider.style.display = 'none'));
  people.forEach((person) => person.classList.remove('active'));

  sliders[indexSlider].style.display = 'block';
  people[indexSlider].classList.add('active');

  indexSlider++;

  if (indexSlider > sliders.length - 1) indexSlider = 0;

  setTimeout(() => setupSlider(element), 3000);
};
