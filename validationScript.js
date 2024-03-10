  /*
  Brooke Moran
  WEB.115.0001
  March 2, 2024
  */
  
  // JavaScript code for form validation
	// Prevent form from submitting
  document.getElementById("myForm").addEventListener("submit", function() {  
      // Retrieve the input field value
      let inputField = document.getElementById('inputField').value;
      //Regular expression pattern for alphanumeric input
      let regex = /^[a-zA-Z0-9]*$/;
      // Check if the input value matches the pattern
      if (regex.test(inputField)) {
        // Valid input: display confirmation and submit the form
        alert('Valid input. The form has been submitted.');
        // Invalid input: display error message
      }else {
        alert('Input value is not alphanumeric.');
        event.preventDefault();
      };
  });  