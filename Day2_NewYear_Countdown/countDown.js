(()=>{
    const second = 1000
    const minute = 60 * second
    const hour   = 60 * minute
    const day    = 24 * hour
    const wrap   =  [day,hour,minute,second]
    const nowFullYear = new Date().getUTCFullYear()
    updateInnerElem = (id,value) =>{
        document.getElementById(id).innerText = value
    }
    calculateTimeLeft = (unixTimeLeft) =>{
        return wrap.reduce((acc,val)=>{
            let {result,unixLeft} = acc
            result.push(Math.floor(unixLeft/val))
            unixLeft =  unixLeft % val
            return ({result,unixLeft})
        },{unixLeft:unixTimeLeft,result:[]})
    }
    countDown =()=>{
        const topicID = "Topic"
        const topicDetail = `Countdown to New Year ${nowFullYear+1}`
        const idWrap =  ['days','hours','minutes','seconds']
        updateInnerElem(topicID,topicDetail)
        const unixTimeNow   = new Date().getTime()
        const unixTimeEndYear = new Date(`December 31, ${nowFullYear} 23:59:59`).getTime();
        let {result}  = calculateTimeLeft(unixTimeEndYear-unixTimeNow)
        result.map((val,idx)=>{
            updateInnerElem(idWrap[idx],val)
        })
    }
    run=()=>{
        setInterval(countDown,second)
    }
    run()
})()