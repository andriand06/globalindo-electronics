import React from 'react'


const Contact = () => {
    return (
        <section className="container" id="contact">
             <div className="contact-text">
                    <h4 className="clr-primary">Contact Us for those interested.</h4>
                    <p className="text-gray-500">Drop your details here and leave us a message.</p>
                </div>
            <div className="contactus">
               <img src="" alt="" />
               <div className="contactform">
                   <div className="form-group">
                       <label htmlFor="firstname" className="">First Name</label>
                       <input type="text" className="form-control" name="firstname" placeholder="Your name..." />
                   </div>
                   <div className="form-group">
                       <label htmlFor="lastname" className="">Last Name</label>
                       <input type="text" className="form-control" name="lastname" placeholder="Your name..." />
                   </div>
                   <div className="form-group">
                       <label htmlFor="subject" className="">Subject</label>
                       <input type="text" className="form-control" name="subject" placeholder="Write Something..." />
                   </div>
                    <button type="submit" className="primary-btn">Submit</button>
               </div>
            </div>
        </section>
    );
}

export default Contact;