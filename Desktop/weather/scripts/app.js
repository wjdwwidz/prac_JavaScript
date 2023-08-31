const cityForm = document.querySelector('form');
/**/
const details = document.querySelector('details');

const updateUI = (data) =>{
    const cityName = data.cityInfo;
    const weather = data.weather;
    
    console.log(cityName);
    console.log(weather);
    if(weather.IsDayTime){
        details.innerHTML = `
        <img src="./img/day.jpg">
        <h5 class="my-3">${cityName.EnglishName}</h5>
        <div class="my-3">${weather.weathertext}</div>
        <div class="display-4 my-4">
        <span>${weather.Temperature.Matric.Value}</span>
        <span>&deg;C</span>`;

    }



    else{
        details.innerHTML = `
        <img src="./img/night.jpg">
        <h5 class="my-3">${cityName.EnglishName}</h5>
        <div class="my-3">${weather.weathertext}</div>
        <div class="display-4 my-4">
        <span>${weather.Temperature.Matric.Value}</span>
        <span>&deg;C</span>`;}

    
    
    if(card.classList.contains('d-none')){
            card.classList.remove('none');
        }
}



const updateCity = async(city) =>{
    const cityInfo =await getCity(city);
    const weather = await getWeather(cityInfo.Key);

    return{ cityInfo, weather }
}



cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // const city = cityForm.city.value;
    // updateCity(city);
    //     .then(data=>updateUI(data));
})