const scrollEvent = () => {
let nav = document.querySelector('.nav')
console.log(nav)
let navWrapper = nav.querySelector('.nav-wrap')
let tabs = Array.prototype.slice.call(document.querySelectorAll('li'))

let navHeight = nav.clientHeight
let boxs = []
let currentTab = 0


const getBox = () => {
  tabs.forEach((item, idx) => {
    let dom = document.querySelector(`#topic-${idx}`)
    let top = dom.offsetTop + dom.offsetParent.offsetTop - navHeight
    boxs[idx] = {
      dom,
      top
    }
    idx > 0 && (boxs[idx - 1].bottom = top)
    let body = document.body
    let html = document.documentElement
    idx === tabs.length - 1 && (boxs[idx].bottom = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - navHeight)
  })
}


const tabSwitch = (top) => {
  currentTab = top > 0 ? boxs.length - 1 : 0
  boxs.some((item, idx) => {
    if (item.bottom > top) {
      currentTab = idx
      return true
    }
  })
  tabs.forEach((item, idx) => {
    item.classList.remove('active-tab')
    if (currentTab === idx) {
      scrollCurrentTab(idx)
      item.classList.add('active-tab')
    }
  })
}

const scrollCurrentTab = (index) => {
  if (index !== null) {
    const tabEl = tabs[index]
    const tabElRect = tabEl.getBoundingClientRect()
    const { scrollLeft } = navWrapper
    let newScrollLeft = scrollLeft + tabElRect.left - (navWrapper.offsetWidth - tabElRect.width) / 2
    newScrollLeft = Math.max(newScrollLeft, 0)
    if (newScrollLeft === scrollLeft) return
    navWrapper.scrollLeft = newScrollLeft
  }
}

window.addEventListener('scroll', () => {
  let top = document.documentElement.scrollTop || document.body.scrollTop
  tabSwitch(top)
})

getBox()
}

export default scrollEvent