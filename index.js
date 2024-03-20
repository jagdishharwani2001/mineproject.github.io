// JavaScript for any interactivity or form submission handling goes here
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  // You can handle form submission here, such as sending data to a server
  // For demonstration purposes, let's just log the form data
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const guests = formData.get('guests');
  
  console.log(`Name: ${name}, Email: ${email}, Guests: ${guests}`);
  
  // You can add further logic here, like showing a thank you message
});
