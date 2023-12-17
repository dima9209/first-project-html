console.log('test');

var letReviewButton = document.getElementById('letReviewBtn');
var popapWrp = document.getElementById('popapWrp');
var popapCloseBtn = document.getElementById('popapCloseBtn');

letReviewButton.addEventListener('click', () => {
    console.log('test-clic');
    popapWrp.classList.toggle('popap-close')
})

popapCloseBtn.addEventListener('click', () => {
    popapWrp.classList.toggle('popap-close')
})