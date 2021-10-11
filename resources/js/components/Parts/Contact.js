import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kbvg4qc', 'contact_form', form.current, 'user_rU1RvqMox6Fljlpv00bv9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          alert('Pesan telah berhasil dikirim!!');
      };
    return (
        <section className="container" id="contact">
             <div className="contact-text">
                    <h4 className="clr-primary">Contact Us for those interested.</h4>
                    <p className="text-gray-500">Drop your details here and leave us a message.</p>
                </div>
            <div className="contactus">
               <img src="" alt="" />
               <form className="contactform" onSubmit={sendEmail} ref={form} >
                   <div className="form-group">
                       <label htmlFor="firstname" className="">First Name</label>
                       <input type="text" className="form-control" name="firstname" placeholder="Your name..." required />
                   </div>
                   <div className="form-group">
                       <label htmlFor="lastname" className="">Last Name</label>
                       <input type="text" className="form-control" name="lastname" placeholder="Your name..." required />
                   </div>
                   <div className="form-group">
                       <label htmlFor="email" className="">Email</label>
                       <input type="email" className="form-control" name="email" placeholder="Your name..." required />
                   </div>
                   <div className="form-group">
                       <label htmlFor="subject" className="">Subject</label>
                       <input type="text" className="form-control" name="subject" placeholder="Write Something..." required />
                   </div>
                    <button type="submit" className="primary-button">Submit</button>
               </form>
            </div>
        </section>
    );
}

export default Contact;