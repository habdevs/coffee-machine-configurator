let pendingUpdate = false

export const viewportHandler = () => {
  if (pendingUpdate) return
  pendingUpdate = true

  requestAnimationFrame(() => {
    pendingUpdate = false
    if (window.visualViewport) {
      const height = window.visualViewport.height

      const container = document.getElementById('app-container')
      if (container) {
        container.style.maxHeight = height + 'px'
        container.style.height = height + 'px'
      }
    }
    scroll(0, 0)
  })
}

if (window.visualViewport) {
  window.visualViewport.addEventListener('scroll', viewportHandler)
  window.visualViewport.addEventListener('resize', viewportHandler)
}
window.addEventListener('scroll', () => {
  scroll(0, 0)
})
document.addEventListener('wheel', () => {
  scroll(0, 0)
})
if ('ontouchstart' in window) {
  window.addEventListener('touchend', () => {
    scroll(0, 0)
  })
}

