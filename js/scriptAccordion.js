function initAccordion() {
    const selectQuestion = document.querySelectorAll('.question')

    selectQuestion.forEach((question) => {
        question.addEventListener('click' , () => {
            if (question.parentNode.classList.contains('ativo')) {
                question.parentNode.classList.toggle('ativo')
            } else {
                let tirar = document.querySelectorAll('.question')
                tirar.forEach(question => question.parentNode.classList.remove('ativo'));

                question.parentNode.classList.add('ativo')
            }
        })
    })
}
initAccordion();