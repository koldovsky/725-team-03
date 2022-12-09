(() => {
    document.querySelectorAll('.faq__question-acordion').forEach( (el) => {
        el.addEventListener('click', () => {
            let content = el.lastElementChild;
            let expand = el.firstElementChild.lastElementChild;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                expand.classList.remove('active');
            } else {
                document.querySelectorAll('.faq__question-answer').forEach((el) => el.style.maxHeight = null);
                document.querySelectorAll('.faq__question-expand').forEach((el) => el.classList.remove('active'));
                content.style.maxHeight = content.scrollHeight + 'px';
                expand.classList.add('active');
            }
        })
    })

})();