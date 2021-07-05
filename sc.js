var days = ["Sunday", "Monday", "Tuesday", "Wensday", "Thusday", "Friday", "Saturday"];
var cityName = "Rivne";
var codeCountry = "uk";
function Start() {
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}, ${codeCountry}&key=7b7aabf35a7d4bdfb3a6f58878f9960c`)
        .then(res => res.json())
        .then(json => {
            document.getElementById("place").innerText = `${json.city_name}, ${json.timezone}`;
            document.getElementById("t-td").innerHTML = `${json.data[0].temp}&#176;`;
            document.getElementById("cont").innerHTML = `Conditions: ${json.data[0].weather.description}`;
            document.getElementById("pop").innerHTML = `POP: ${json.data[0].pop}%`;
            document.getElementById("wind").innerHTML = `Wind speed: ${json.data[0].wind_spd} m/s`;
            document.getElementById("im-td").innerHTML = `<img class="im-td" src="https://www.weatherbit.io/static/img/icons/${json.data[0].weather.icon}.png">`;
            document.getElementById("elems").innerHTML = ` `;
            for (var i = 1; i < 8; i++) {
                var day = new Date(json.data[i].valid_date);
                document.getElementById("elems").innerHTML += `
            <div class="elem">
                <div class="cntr">
                    <p class="day">${days[day.getDay()]}</p>
                    <p class="dat">${json.data[i].valid_date}</p>
                </div>
                <img class="im" src="https://www.weatherbit.io/static/img/icons/${json.data[i].weather.icon}.png">
                <div class="temps">
                    <span class="mm-temp">${json.data[i].min_temp}&#176;</span>
                    <span class="temp">${json.data[i].temp}&#176;</span>
                    <span class="mm-temp">${json.data[i].max_temp}&#176;</span>
                </div>
            </div>
            `};
        })

}

onload = Start();

function SeachCity() {
    cityName = document.getElementById("city-s").value;
    codeCountry = document.getElementById("country-s").value.toLowerCase();
    Start();
}