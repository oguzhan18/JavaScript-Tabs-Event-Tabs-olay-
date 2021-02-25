const article = document.querySelector('article')
const next = document.querySelector('.next')
const back = document.querySelector('.back')
const check = document.querySelector('input')
const max = document.querySelectorAll('.content').length

let getStep = () => {
  return parseInt(article.getAttribute('step')) || 1
}

let setStep = (event) => {
  let css = Array.from(event.target.classList)
  if(css.includes('back') || css.includes('next') || css.includes('reset')) {
    let step = getStep()
    if(css.includes('reset')) {
      step = 1
    }
    else if(css.includes('next')) {
      step++
    }
    else if(css.includes('back')) {
      step--
    }
    return step
  }
}

let readStep = (step) => {
  if(step) {
    article.setAttribute('step', step)
    step === 1 ? back.setAttribute('disabled', true) : back.removeAttribute('disabled')
    step === max ? next.setAttribute('disabled', true) : next.removeAttribute('disabled')
  }
}

document.addEventListener("DOMContentLoaded", () => {
  readStep(getStep())
}, false)

document.addEventListener('click', (e) => {
  readStep(setStep(e))
}, false)

check.addEventListener('change', (e) => {
  e.target.checked ? article.classList.add('fancy') : article.classList.remove('fancy')
}, false)
/*
██████╗  ██████╗ ██╗   ██╗███████╗██╗  ██╗ █████╗ ███╗   ██╗     ██████╗ █████╗ ██████╗ ██████╗ ████████╗
██╔═══██╗██╔════╝ ██║   ██║╚══███╔╝██║  ██║██╔══██╗████╗  ██║    ██╔════╝██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝
██║   ██║██║  ███╗██║   ██║  ███╔╝ ███████║███████║██╔██╗ ██║    ██║     ███████║██████╔╝██████╔╝   ██║   
██║   ██║██║   ██║██║   ██║ ███╔╝  ██╔══██║██╔══██║██║╚██╗██║    ██║     ██╔══██║██╔══██╗██╔══██╗   ██║   
╚██████╔╝╚██████╔╝╚██████╔╝███████╗██║  ██║██║  ██║██║ ╚████║    ╚██████╗██║  ██║██║  ██║██║  ██║   ██║   
 ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝     ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   
                                                                     ██                                     
 ██████╗ ███████╗███████╗██████╗  ██████╗ ██████╗ ██████╗ 
██╔══██╗██╔════╝██╔════╝██╔══██╗██╔════╝██╔═══██╗██╔══██╗
██║  ██║█████╗  █████╗  ██████╔╝██║     ██║   ██║██║  ██║
██║  ██║██╔══╝  ██╔══╝  ██╔═══╝ ██║     ██║   ██║██║  ██║ 
██████╔╝███████╗███████╗██║     ╚██████╗╚██████╔╝██████╔╝
╚═════╝ ╚══════╝╚══════╝╚═╝      ╚═════╝ ╚═════╝ ╚═════╝ 

 ██████╗ █████╗ ██████╗ ████████╗     █████╗ ██████╗ ██████╗ 
██╔════╝██╔══██╗██╔══██╗╚══██╔══╝    ██╔══██╗██╔══██╗██╔══██╗
██║     ███████║██████╔╝   ██║       ███████║██████╔╝██████╔╝
██║     ██╔══██║██╔══██╗   ██║       ██╔══██║██╔═══╝ ██╔═══╝ 
╚██████╗██║  ██║██║  ██║   ██║       ██║  ██║██║     ██║     
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═╝  ╚═╝╚═╝     ╚═╝  
*/