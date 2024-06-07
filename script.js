document.addEventListener('DOMContentLoaded', function() {
  // Select the form element
  const form = document.getElementById('myForm');

  // Add event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission behavior

    // Collect form data
    const formData = {
      name: document.getElementById('name').value,
      address: document.getElementById('address').value,
      mobile: document.getElementById('mobile').value,
      flavour: document.getElementById('flavour').value,
      chips: document.querySelector('input[name="chips"]:checked').value
    };

    // Perform any necessary validation here

    // Submit the form data securely to the server using fetch API or AJAX
    fetch('/submit-form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // Handle successful form submission
        alert('Form submitted successfully!');
        form.reset(); // Optionally reset the form after successful submission
      } else {
        // Handle errors
        alert('Form submission failed. Please try again later.');
      }
    }).catch(error => {
      // Handle network errors
      console.error('Error submitting form:', error);
      alert('Form submission failed. Please check your network connection.');
    });
  });
});
