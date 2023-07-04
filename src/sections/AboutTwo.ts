import { TitleComponent } from '../components/Title';

export const AboutTwoSection = (): string => `
  <section class="section section--aboutTwo">

          <article class="aboutTwo">

            ${TitleComponent('CHESSBOARD', true)}

            <div class="aboutTwo__about">
               <div class="aboutTwo__material">
                  <h2 class="aboutTwo__title">Material</h2> 
                    <p class="aboutTwo__para">Explore our curated collection of chess resources at the Chess Hub. From strategy guides to books, videos, and puzzles, we provide valuable tools to enhance your skills and deepen your understanding of the game. Elevate your chess journey with our diverse materials. </p>
                                              
                  <button class="btn">See More</button>
              </div>

             </div>

          </article>

       </section>


`;
