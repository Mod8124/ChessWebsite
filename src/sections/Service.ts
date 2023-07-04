import { TitleComponent } from '../components/Title';
import { CardComponent } from '../components/Card';

export const ServiceSection = () => `
 <section class="section section--services">

         <div class="services__title">

              <div class="services__titleContainer">

               ${TitleComponent('LEGENDARY MOVE', true)}

               <p class="services__para">
                    At our Chess Hub, we offer a diverse range of high-quality materials to support your chess journey. From comprehensive tutorials to in-depth strategy guides, we provide the resources you need to sharpen your skills. 
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
