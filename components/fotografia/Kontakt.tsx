import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Kontakt() {
 
/*
import emailjs from '@emailjs/browser';
  const form = useRef();
  
  const sendEmail = (e) => {
    emailjs.sendForm('gmail', 'template_ey7dfvv', form.current, 'a1wPYI42oYECAyoZL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

*/

  return (
      <>
    <section>
<div className='contact'>
      <h3> KONTAKT </h3>
      <div className='contact-subsection'>
        <div className='contact-phone'>  <FontAwesomeIcon icon={ faPhoneAlt  } /> Telefon:  725 209 997  </div>
        <div className='contact-email'> <FontAwesomeIcon icon={ faEnvelope  } /> Email: f.f.agnieszkajankowska@gmail.com  </div>
      </div>
      
  </div>

    <div className='form-contant'>
      
    <form>
    <h1> Skontaktuj się ze mną! </h1>
  <label>
    <h3> Imię: </h3>
    <input type="text" name="name" />
  </label>
  <label>
  <h3> Email: </h3>
    <input type="text" name="email" />
  </label>
  <textarea name="message">  </textarea>
  <input type="submit" value="Wyślij" />
</form>
    </div>
    </section>
  </>);
}

export default Kontakt;
