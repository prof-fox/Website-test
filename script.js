document.getElementById('moreInfoBtn').addEventListener('click', function() {
    var moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'Read More';
    }
});
