import './assets/global.css';
import { HeroSection } from './assets/sections/Hero.ts';
import { AboutSection } from './assets/sections/About.ts';
import { AboutTwoSection } from './assets/sections/AboutTwo.ts';
import { ServicesSection } from './assets/sections/services.ts';
import { TestimonialSection } from './assets/sections/testimonial.ts';
import { FormularySection } from './assets/sections/Formulary.ts';
import { FooterSection } from './assets/sections/Footer.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    ${HeroSection()}
    ${AboutSection()}
    ${AboutTwoSection()}
    ${ServicesSection()}
    ${TestimonialSection()}
    ${FormularySection()}
    ${FooterSection()}
  </main>
`;
