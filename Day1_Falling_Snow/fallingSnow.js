(()=>{
    setup =()=>{
        const timeInterval = 50
        const numberOfSnowballs =250
        let canvas = document.getElementById('fallingSnowCanvas')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        return {
            canvas,
            ctx:canvas.getContext('2d'),
            numberOfSnowballs,
            timeInterval
        }
    }
    random =(min,max)=>Math.floor(Math.random()*(max-min+1))+min
    createSnowBalls = (canvas,numberOfSnowballs) =>(
        [...Array(numberOfSnowballs)].map(()=>({
            x:random(0,canvas.width),
            y:random(0,canvas.height),
            radius:random(2,4),
            opacity:random(0.5,1),
            speedX:random(-5,5),
            speedY:random(1,3)
        }
            ))
    )
    drawSnowBall = (ctx,snowBall)=>{
        let startAngle = 0
        ctx.beginPath() // begin draw canvas
        ctx.arc(snowBall.x,snowBall.y,snowBall.radius,startAngle,Math.PI*2) // draw circle (x,y,radius,Start Angle,Pi2)
        ctx.fillStyle=`rgba(255, 255, 255,${snowBall.opacity})`
        ctx.fill()
    }
    moveSnowBall=(snowBall,canvas)=>{
        const{speedX,speedY} = snowBall
        snowBall.x+=speedX
        snowBall.y+=speedY
        snowBall.x = snowBall.x > canvas.width ? 0 : snowBall.x< 0 ? canvas.width :snowBall.x
        snowBall.y = snowBall.y > canvas.height ? 0 :snowBall.y
    }
    run=()=>{
        const {canvas,ctx,numberOfSnowballs,timeInterval} = setup()
        const snowBalls = createSnowBalls(canvas,numberOfSnowballs)
        snowBalls.forEach(snowBall => drawSnowBall(ctx,snowBall));
        setInterval(()=>{
            ctx.clearRect(0,0,canvas.width,canvas.height)
            snowBalls.forEach(snowBall => drawSnowBall(ctx,snowBall))
            snowBalls.forEach(snowBall => moveSnowBall(snowBall,canvas))
            
        },timeInterval)
    }
    run()
})();