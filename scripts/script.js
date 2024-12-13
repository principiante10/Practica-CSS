console.log("jajajja")

const closeButton = document.getElementById('closebannerbutton')
const cookiebanner = document.getElementById('cookiebanner')
closeButton.addEventListener('click', ()=>{
cookiebanner.classList.add('invisible')
})