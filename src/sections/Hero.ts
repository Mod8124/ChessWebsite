import { NavComponent } from '../components/Nav';

export const HeroSection = () => ` 

   <section class="section section--hero">

        ${NavComponent()}

        <article class="cta">

           <div class="cta__container">
               <h1 class="cta__title">CHESS</h1>
                 <hr class="cta__line">
               <p class="cta__para">Personal Set</p>
              <button class="btn">Buy now!</button>
           </div>

        </article>

       <article class="red">
         <div class="red__container">
            <span class="red__social red__social--facebook">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="50" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="50"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
           </span>
           <span class="red__social red__social__instagram">
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 21" fill="#fff" height="50" id="Layer_21" viewBox="0 0 24 24" width="50"><title/><path d="M15.5,3h-7A5.5,5.5,0,0,0,3,8.5v7A5.5,5.5,0,0,0,8.5,21h7A5.5,5.5,0,0,0,21,15.5v-7A5.5,5.5,0,0,0,15.5,3Zm4,12.5a4.00454,4.00454,0,0,1-4,4h-7a4.00454,4.00454,0,0,1-4-4v-7a4.0045,4.0045,0,0,1,4-4h7a4.0045,4.0045,0,0,1,4,4Z"/><path d="M12,7.5A4.5,4.5,0,1,0,16.5,12,4.5,4.5,0,0,0,12,7.5ZM12,15a3,3,0,1,1,3-3A3.0034,3.0034,0,0,1,12,15Z"/><circle cx="16.70001" cy="7.29999" r="1"/></svg>
           </span>
         </div>
        </article>

      </section>
`;
