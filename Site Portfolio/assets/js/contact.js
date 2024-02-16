/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_cuwhf1i', 'template_iuqb27d', '#contact-form', 'ig_Ibj9v4oS8e8_LD')
        .then(() => {
            // show sent message
            contactMessage.textContent = 'Message sent successfully ✅'
            
            //remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
            
            // clear input fields
            contactForm.reset()
        }, () => {
            // show message error
            contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)