const closeBtn = document.querySelector('#closeBtn');
const bookingBox = document.querySelector('.bookingBox');
const clickAnywhereToClose = document.querySelector('#clickOutsideToClose');
const bookingSubmitBtn = document.querySelector('#bookingSubmitId');


function closeBookingBox() {
    bookingBox.style.display = 'none';
    clickAnywhereToClose.style.display = 'none';
    document.querySelector('body').style.overflow = 'scroll';
}
function showBookingBox() {
    bookingBox.style.display = 'block';
    clickAnywhereToClose.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
bookingSubmitBtn.addEventListener('click', function () {
    document.querySelector('.bookingBox').addEventListener('submit', function (event) {
        // Prevent form submission to prevent page reload
        event.preventDefault();
    
        // Redirect to the payment page
        window.location.href='./payment.html';
    });
    

});


