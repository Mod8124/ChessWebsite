import './assets/global.css';
import { HeroSection } from './sections/Hero.ts';
import { AboutSection } from './sections/About.ts';
import { AboutTwoSection } from './sections/AboutTwo.ts';
import { ServiceSection } from './sections/Service.ts';
import { TestimonialSection } from './sections/Testimonial.ts';
import { FormularySection } from './sections/Formulary.ts';
import { FooterSection } from './sections/Footer.ts';
import { setupSlider } from './utils/slider.ts';
import { handleAnimation } from './utils/handleAnimation.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="container">
    ${HeroSection()}
    ${AboutSection()}
    ${AboutTwoSection()}
    ${ServiceSection()}
    ${TestimonialSection()}
    ${FormularySection()}
    ${FooterSection()}
  </main>
`;

setupSlider(document.querySelector<HTMLDivElement>('.testimonial')!);
handleAnimation();
