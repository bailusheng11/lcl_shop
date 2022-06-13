export default function debounce(fn, delay) {
    let timer = null
    return function() {
        console.log('我被处罚');
        if (timer) clearTimeout(timer)
        timer = setTimeout(fn, delay);
    }
}