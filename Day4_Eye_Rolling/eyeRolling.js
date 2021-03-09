(()=>{
    const run =()=>{
        const elemBody = document.querySelector('body')
        const elemEyes = document.querySelectorAll('.eye')
        mouseMove =({pageX,pageY}) =>{
            elemEyes.forEach((eye)=>{
                const {left,top} = eye.getBoundingClientRect();
                const eyeCenterX = left +  eye.offsetWidth/2;
                const eyeCenterY = top +  eye.offsetWidth/2;
                const radian = Math.atan2(pageX-eyeCenterX,pageY-eyeCenterY)
                const angle = radian * 180 / Math.PI *-1
                eye.style.transform = `rotate(${angle}deg)`
            })
        }
        elemBody.addEventListener('mousemove',mouseMove)
    }
    run()
    
})()