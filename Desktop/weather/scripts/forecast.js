const key = 'MfnQ8iIaZf1VKvaKZdftiYqDWCG4luV1'

const getWeather = async() =>{

    const base = 'http://dataservice.accuweather.com/locations/v1/{locationkey}';
    const query =`${id}?apikey=${key}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}
//도시정보 가져오기
const getCity = async (id)=>{

    const base = 'http://dataservice.accuweather.com/locations/v1/{locationkey}';
    const query =`?apikey=${key}&q=${key}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data; 
}

getCity('newyork')
    .then(data=>{
        return getWeather(data.Key);
    })
    .catch(err=>console.log(err));
    /* https://trends.google.com/trends/explore?q=%EC%95%BC%EA%B5%AC&date=now%201-d&geo=US&hl=ko */

