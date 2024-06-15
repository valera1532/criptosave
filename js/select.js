
const selects = document.querySelectorAll('.__select');


selects.forEach(select => {
    const selectTitle = select.querySelector('.__select__title');
    const selectLabels = select.querySelectorAll('.__select__label');

    selectTitle.addEventListener('click', () => {
        if ('active' === select.getAttribute('data-state')) {
            select.setAttribute('data-state', '');
        } else {
            select.setAttribute('data-state', 'active');
        }
    });


    selectLabels.forEach(label => {

        label.addEventListener('click', handleLabelClick);

        const img = label.querySelector('img');
        if (img) {
            img.addEventListener('click', handleLabelClick);
        }
    });

    function handleLabelClick(evt) {

        const clickedLabel = evt.target.closest('.__select__label');

        let labelText = '';
        let imgSrc = '';
        let labelNumber = '';

        const headerBalanceName = clickedLabel.querySelector('.header-balance__name');
        if (headerBalanceName) {
            labelText = headerBalanceName.textContent;
        }
        const imgElement = clickedLabel.querySelector('img');
        if (imgElement) {
            imgSrc = imgElement.src;
        }
        const spanElements = clickedLabel.querySelectorAll('span');
        if (spanElements.length > 0) {
            labelNumber = spanElements[0].textContent;
        }

        let titleHtml = '';
        if (imgSrc) {
            titleHtml += `<img src="${imgSrc}" alt=""> `;
        }
        if (labelNumber) {
            titleHtml += `${labelNumber} `;
        }
        if (labelText) {
            titleHtml += `${labelText}`;
        }

        selectTitle.innerHTML = titleHtml;

        select.setAttribute('data-state', '');
    }
});
