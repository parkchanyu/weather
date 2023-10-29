async function logJSONData() {
    const lat = document.querySelector('#lat').value;
    const lon = document.querySelector('#lon').value;
    const API = 'd2a1ba15f22e7483af707992a6307fe1';
    const respone = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${API}`);
    const jsonData = await respone.json();
    console.log(jsonData.cod);
    if (jsonData.cod == "400") {
        document.querySelector("err").innerHTML = '오류';
        console.log('오류')
    }
    document.querySelector("#temp").innerHTML = (Math.floor((jsonData.main.temp)-273.15))+'°C';
    document.querySelector("#desc").innerHTML = jsonData.weather[0].description;
}
const btEl = document.querySelector("button");
btEl.addEventListener("click", ()=>{
    logJSONData();
})