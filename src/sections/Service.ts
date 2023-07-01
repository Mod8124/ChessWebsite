import { TitleComponent } from '../components/Title';
import { CardComponent } from '../components/Card';

export const ServiceSection = () => `
 <section class="section section--services">

         <div class="services__title">

              <div class="services__titleContainer">

               ${TitleComponent('LEGENDARY MOVE', true)}

               <p class="services__para">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum dicta doloribus atque consequatur perferendis, labore, ea tempora sapiente numquam, libero quis. Obcaecati qui veniam debitis incidunt, fugiat praesentium maxime facilis.
			            Delectus voluptatibus debitis praesentium sed. Rerum perspiciatis excepturi accusantium maiores consectetur, molestiae quis ipsam!
               </p>
              
              </div>
         </div>
         
         <div class="services__services">

              <div class="services__cards">
                ${CardComponent('peon')}
                ${CardComponent('king')}
                ${CardComponent('tower')}
                ${CardComponent('knight')}
                ${CardComponent('bishop')}
              </div>

         </div>  

       </section>

`;
