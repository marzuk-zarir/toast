const toast = document.querySelector('.toast')
const toastClose = document.querySelector('.toast .bi-x-lg')

document.addEventListener('DOMContentLoaded', () => {
    toastClose.addEventListener('click', () => {
        toast.classList.add('toast-hide')
    })

    setTimeout(() => {
        toast.classList.add('toast-hide')
    }, 6000)
})
