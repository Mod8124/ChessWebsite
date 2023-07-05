import imgChess from '../../public/img/jusiback.jpg';
import { TitleComponent } from '../components/Title';

export const AboutSection = () => `
   <section class="section section--about">

          <article class="about__about">
            ${TitleComponent('KINGBOARD')}

            <article class="about__explanation">
               <div class="about__container">
                  <p class="about__para">Welcome to our Chess Hub! We are passionate about promoting the game of chess and providing a platform for chess enthusiasts of all levels. Whether you're a beginner or an experienced player, our mission is to foster your growth, enhance your skills, and create a vibrant chess community.</p>
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
