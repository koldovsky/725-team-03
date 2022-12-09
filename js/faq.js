document.querySelectorAll('.faq__question-acordion').forEach( (el) => {
    el.addEventListener('click', () => {
        let content = el.lastElementChild;
        console.log(content);
        if (content.style.maxHeight) {
            document.querySelectorAll('.faq__question-answer').forEach((el) => el.style.maxHeight = null);
        } else {
            document.querySelectorAll('.faq__question-answer').forEach((el) => el.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})
