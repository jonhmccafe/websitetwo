// Get the div element with the class "contract"
const contractDiv = document.querySelector('.contract');



// Show a text pop up when the contract is copied
contractDiv.addEventListener('click', () => {
    // Create a temporary input element
    const tempInput = document.createElement('input');
    
    // Set the value of the input element to the string you want to copy
    tempInput.value = '797w2rtxn8nljmj6ucqc8m7bnqv6knnryqztkfa6ycua';
    
    // Append the input element to the document
    document.body.appendChild(tempInput);
    
    // Select the value of the input element
    tempInput.select();
    
    // Copy the selected value to the clipboard
    document.execCommand('copy');
    
    // Remove the temporary input element from the document
    document.body.removeChild(tempInput);
    
    // Show a text pop up
    alert('Contract copied: 797w2rtxn8nljmj6ucqc8m7bnqv6knnryqztkfa6ycua');
});