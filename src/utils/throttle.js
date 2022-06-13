function throttle(fn, delay) {
    let lastTime = 0
    return function() {
        console.log(2);
        let nowTime = new Date()
        if (nowTime - lastTime > delay) {
            console.log(this);
            fn.apply(this)
            lastTime = nowTime
        }
    }
}

export default throttle