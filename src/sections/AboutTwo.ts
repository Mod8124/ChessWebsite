import { TitleComponent } from '../components/Title';

export const AboutTwoSection = (): string => `
  <section class="section section__aboutTwo">

          <article class="aboutTwo">

            ${TitleComponent('CHESSBOARD', true)}

            <div class="aboutTwo__about">
               <div class="aboutTwo__material">
                  <h2 class="aboutTwo__title">Material</h2> 
                    <p class="aboutTwo__para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                  <button class="btn">See More</button>
              </div>

             </div>

          </article>

       </section>


`;
