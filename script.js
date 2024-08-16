document.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementById('input1');
    const btn1 = document.getElementById('submit'); 
    const div1a = document.getElementById('div1a');
    const div2a = document.getElementById('div2a');
    const div3a= document.getElementById('div3a');
    const div4a = document.getElementById('div4a');
    const div1b = document.getElementById('div1b');
    const div2b = document.getElementById('div2b');
    const div3b = document.getElementById('div3b');
    const div4b = document.getElementById('div4b');

    btn1.addEventListener('click', () => {
        console.log(search.value);
        const url1 = `http://api.weatherapi.com/v1/current.json?key=18f557c2dc594893925111213242607&q=${search.value}&aqi=no`;
        
        fetch(url1)
            .then(response => response.json())
            .then(data => {
                div1b.innerText = `Name :  ${data.location.name}`;
                div2b.innerText = `Temp: ${data.current.temp_c}°C`;
                div3b.innerText = `Humidity : ${data.current.humidity}%`;
                div4b.innerText = `Wind : ${data.current.wind_kph}Km/h`;

                console.log(data);
            })
            .catch(error => console.error('Error:', error));
    });
});
