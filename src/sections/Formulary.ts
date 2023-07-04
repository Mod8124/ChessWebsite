import { TitleComponent } from '../components/Title';

export const FormularySection = () => `
   <section class="section section--formulary">

      <article class="formulary">
                ${TitleComponent('MESSAGE')}

           <div class="form">
                 <form class="form__form">

                        <div class="form__forms">
                          <label class="form__label"  for="fname">Name</label>
                          <input class="form__input" type="text" id="fname" name="firstname" placeholder="">
                        </div>

                         <div class="form__forms">
                          <label class="form__label" for="phone">Phone</label>
                          <input class="form__input" type="tel" id="phone" name="Phone" placeholder="">
                        </div>

                         <div class="form__forms">
                          <label class="form__label" for="email">Email</label>
                         <input class="form__input" type="email" id="email" name="email">
                        </div>

                         <div class="form__forms">
                           <label class="form__label" for="subject">Message</label>
                           <textarea class="form__text" id="subject" name="subject" placeholder=""></textarea>
                        </div>

                         <input class="btn" type="submit" value="Submit">
                         
                 </form>
           </div>
      </article>
   
   </section>

`;
