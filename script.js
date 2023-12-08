document.addEventListener('DOMContentLoaded', function() {
    let credentials = document.getElementById('credentials');
    let yesButton = document.getElementById('yes');
    let noButton = document.getElementById('no');
    let refresh = document.getElementById('refresh-message')

    yesButton.addEventListener('click', function() {
        credentials.style.display = 'block';
    });

    noButton.addEventListener('click', function() {
        window.open('https://apps.daysmartrecreation.com/dash/index.php?action=Auth/start&company=psa#/', '_blank');
        refresh.style.display = 'block';
    });
});
