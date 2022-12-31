function rippleEffect() {
    const buttons = document.querySelectorAll('.ripple')
    buttons.forEach(button => {
        button.addEventListener('click', (event:any) => {
            const btn = event.currentTarget
    
            const circle = document.createElement("span")
            const diameter = Math.max(btn.clientWidth, btn.clientHeight)
            const radius = diameter / 2

            circle.style.width = circle.style.height = `${diameter}px`
            circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`
            circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`
            circle.classList.add("rippleStyle")

            // remove span if it already exists
            const ripple = btn.getElementsByClassName("rippleStyle")[0]
            if (ripple) {
                ripple.remove()
            }
  
            btn.appendChild(circle)
        })
    })  
}
  
export default rippleEffect