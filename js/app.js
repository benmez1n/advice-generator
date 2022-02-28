const adviceId = document.getElementById("advice-id")
const advice = document.getElementById("advice")
const random = document.getElementById("dice")
const fetchData = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(response=>{return response.json()})
    .then( data => {
        adviceId.textContent = data.slip.id
        advice.textContent = `" ${data.slip.advice} "`
    })
}
fetchData();
random.onclick = () => {
    fetchData();
}
