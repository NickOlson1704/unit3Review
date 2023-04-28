let rrImage = document.querySelector('img')
let theForm = document.querySelector('form')


rrImage.addEventListener('mouseover', () => {
    alert('gotcha, sucker!')
})

theForm.addEventListener('submit', (event) => {
    event.preventDefault()
        alert('yo man!')    
})

