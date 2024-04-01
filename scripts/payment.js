const submitPayment = document.querySelector('#submitPayment');
const paymentForm = document.querySelector('#paymentForm');

submitPayment.addEventListener('click', function () {
    paymentForm.addEventListener('submit', function (event) {
        // Prevent form submission to prevent page reload
        event.preventDefault();
    
        // Redirect to the payment page
        alert('Please confirm your payment.')
        location.reload();
        alert('Thank you. You have successfully booked your room.');
    });
    

});