
//  function Contact() {

//     return (
//         <div>Contact</div>
//     );
// }
//     export default Contact;

import { createSignal } from 'solid-js';

const ContactForm = () => {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [message, setMessage] = createSignal('');
  const [error, setError] = createSignal('');
  const [submitted, setSubmitted] = createSignal(false);

  const validateEmail = (email) => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple form validation
    if (!name() || !email() || !message()) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email())) {
      setError('Please enter a valid email address');
      return;
    }

    // Clear error and show submission success
    setError('');
    setSubmitted(true);
    
    // Log form data (you can replace this with a real submission API call)
    console.log({
      name: name(),
      email: email(),
      message: message(),
    });

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div class='h-full flex justify-center items-center'>
    <div class="w-full max-w-lg mx-auto p-4 shadow-md rounded-lg border backdrop-filter backdrop-blur-md bg-opacity-10 bg-white">
      <h2 class="text-2xl font-bold text-center mb-4">Contact Us</h2>
      {submitted() && (
        <div class="bg-green-100 p-4 mb-4 text-green-800 rounded-md">
          Your message has been sent! We will get back to you soon.
        </div>
      )}
      {error() && (
        <div class="bg-red-100 p-4 mb-4 text-red-800 rounded-md">
          {error()}
        </div>
      )}
      <form onSubmit={handleSubmit} class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name()}
            onInput={(e) => setName(e.target.value)}
            class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email()}
            onInput={(e) => setEmail(e.target.value)}
            class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            value={message()}
            onInput={(e) => setMessage(e.target.value)}
            class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </div></div>
  );
};

export default ContactForm;
