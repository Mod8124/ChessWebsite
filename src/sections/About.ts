import imgChess from '../../public/img/jusiback.jpg';
import { TitleComponent } from '../components/Title';

export const AboutSection = () => `
   <section class="section section--about">

          <article class="about__about">
            ${TitleComponent('KINGBOARD')}

            <article class="about__explanation">
               <div class="about__container">
                  <p class="about__para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
               </div>
            </article>

            <article class="about__img">
                <picture about="about__container">
                   <img class="about__imgImg" src="${imgChess}" alt="chess move">
                </picture>
            </article>
          </article>

       </section>
`;
