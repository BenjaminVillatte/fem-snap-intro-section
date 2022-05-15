import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.js-menu-open')
  const closeBtn = document.querySelector('.js-menu-close')

  const overlay = document.createElement('div')
  overlay.classList.add('menu-overlay')
  document.body.prepend(overlay)

  openBtn.addEventListener('click', toggleMenu)
  closeBtn.addEventListener('click', toggleMenu)
  overlay.addEventListener('click', toggleMenu)

  const dropdownsLinks = document.querySelectorAll('.dropdown-menu > .nav-link')
  dropdownsLinks.forEach((el) => {
    el.addEventListener('click', (e) => {
      closeDropdown(e.currentTarget)
      el.parentNode.classList.toggle('expanded')
    })
  })

  document.body.addEventListener('click', (e) => {
    if (! dropdownsLinks.contains(e.target)) {
      closeDropdown()
    }
  })

  function closeDropdown(target = null) {
    dropdownsLinks.forEach((element) => {
      if (element !== target) {
        element.parentNode.classList.remove('expanded')
      }
    })
  }
})

function toggleMenu() {
  document.body.classList.toggle('menu-expanded')
}

NodeList.prototype.contains = function(element) {
  let found = false
  this.forEach(function(item) {
    if (item === element) {
      found = true
    }
  })
  
  return found
}