function toggleShowMore() {
    const showMoreDetails = document.getElementById('showMoreDetails');
    const showMoreBtn = document.querySelector('.main-loan-details-wrapper .btn-show-more');

    if (showMoreDetails.style.display !== 'none') {
        showMoreDetails.style.display = 'none';
        showMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Show More';
    } else {
        showMoreDetails.style.display = 'grid';
        showMoreBtn.innerHTML = '<i class="fas fa-minus"></i> Show Less';
    }
}

function toggleMoveBorrowerShowMore() {
    const moveBorrowerShowMoreDetails = document.getElementById('moveBorrowerShowMoreDetails');
    const moveBorrowerShowMoreBtn = document.querySelector('.move-borrower-wrapper .btn-show-more');

    if (moveBorrowerShowMoreDetails.style.display !== 'none') {
        moveBorrowerShowMoreDetails.style.display = 'none';
        moveBorrowerShowMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Show More';
    } else {
        moveBorrowerShowMoreDetails.style.display = 'grid';
        moveBorrowerShowMoreBtn.innerHTML = '<i class="fas fa-minus"></i> Show Less';
    }
}


function toggleMoveBorrowerSection(show) {
    const mainLoanDetailsWrapper = document.getElementById('mainLoanDetailsWrapper');
    const mainHeader = document.getElementById('mainHeader');
    const moveBorrowerWrapper = document.getElementById('moveBorrowerWrapper');

    if (show) {
        mainLoanDetailsWrapper.style.display = 'none';
        mainHeader.style.display = 'none';
        moveBorrowerWrapper.style.display = 'block';
    } else {
        mainLoanDetailsWrapper.style.display = 'block';
        mainHeader.style.display = 'block';
        moveBorrowerWrapper.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const mainCopyIcon = document.querySelector('.main-loan-details-wrapper .user-details .copy-icon');
    if (mainCopyIcon) {
        mainCopyIcon.addEventListener('click', () => {
            const loanIdText = document.querySelector('.main-loan-details-wrapper .user-details .loan-id').childNodes[0].nodeValue;
            const loanId = loanIdText.trim();
            navigator.clipboard.writeText(loanId);
            const originalIconClass = mainCopyIcon.className;
            mainCopyIcon.className = 'fas fa-check copy-icon';
            setTimeout(() => {
                mainCopyIcon.className = originalIconClass;
            }, 1000);
        });
    }

    const moveBorrowerCopyIcon = document.querySelector('.move-borrower-wrapper .user-details .copy-icon');
    if (moveBorrowerCopyIcon) {
        moveBorrowerCopyIcon.addEventListener('click', () => {
            const loanIdText = document.querySelector('.move-borrower-wrapper .user-details .loan-id').childNodes[0].nodeValue;
            const loanId = loanIdText.trim();
            navigator.clipboard.writeText(loanId);
            const originalIconClass = moveBorrowerCopyIcon.className;
            moveBorrowerCopyIcon.className = 'fas fa-check copy-icon';
            setTimeout(() => {
                moveBorrowerCopyIcon.className = originalIconClass;
            }, 1000);
        });
    }


    const moveBorrowerLink = document.getElementById('moveBorrowerLink');
    const backButton = document.getElementById('backButton');

    if (moveBorrowerLink) {
        moveBorrowerLink.addEventListener('click', (e) => {
            e.preventDefault(); 
            toggleMoveBorrowerSection(true); 
        });
    }

    if (backButton) {
        backButton.addEventListener('click', () => {
            toggleMoveBorrowerSection(false); 
        });
    }

    const openMapsLinks = document.querySelectorAll('.open-maps-link'); 

    openMapsLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 

            const detailGroup = link.closest('.detail-group');
            if (detailGroup) {
                const addressElement = detailGroup.querySelector('.detail-value');
                if (addressElement) {
                    const address = addressElement.textContent.replace('Address: ', '').trim();
                    const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
                    window.open(mapUrl, '_blank');
                }
            }
        });
    });
});
