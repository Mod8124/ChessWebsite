export const FormularySection = () => `
 <section class="formulary"><!--inicia formulary-->

           <div class="titleFifth">
              <div id="titleFifth">
                 <div id="hrThirteenth"><hr></div>
                    <div id="tittleFifth"><h2>MESSAGE</h2></div>
                 <div id="hrFourteenth"><hr></div>
              </div>
           </div>

           <div class="form">
              <div class="formu">

                 <form>
                    <label for="fname">Name</label>
                       <input type="text" id="fname" name="firstname" placeholder="">

                         <label for="phone">Phone</label>
                           <input type="tel" id="phone" name="Phone" placeholder="">

                         <label for="email">Email</label>
                         <input type="email" id="email" name="email">

                         <label for="subject">Message</label>
                       <textarea id="subject" name="subject" placeholder=""></textarea>

                     <input type="submit" value="Submit">

                 </form>
              </div>
           </div>
       </section><!--termina formulary-->

`;
