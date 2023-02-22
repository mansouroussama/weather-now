import { useState, useEffect, useContext, useCallback, Fragment } from 'react';
import Context from './context/Context';
import { API_KEY, REVERSE_GEO_API_URL, WEATHER_API_URL} from './utilities/Config';
import { Player } from '@lottiefiles/react-lottie-player';
import loadingAnimation from '../src/assets/img/loader.json';

import Viewport from './components/UI/Viewport';
import Container from './components/UI/Container';
import Search from './components/Search/Search';
import Weather from './components/Weather/Weather';

const App = () => {
	const [pageLoaded, setPageLoaded] = useState(false);
   const ctx = useContext(Context);
	console.log(pageLoaded)

	const curPosHandler = async () => {
		const requestPosition = async() => {
			return new Promise(function(resolve, reject) {
			navigator.geolocation.getCurrentPosition(
				pos => { resolve(pos.coords); }, 
				err => { reject (err); });
			});
		}
		const {latitude: lat, longitude: lon } = await requestPosition();

		const res = await fetch(`${REVERSE_GEO_API_URL}?lat=${lat}&lon=${lon}`, {
			method: "GET",
			contentType: 'application/json',
			headers: {"X-Api-Key": `${API_KEY}`}
		})
		const data = await res.json();
		const name = data[0]["name"];
		const cityWeather = await fetchCityData(lat, lon, name);
		console.log(cityWeather);
		ctx.onSelect(cityWeather)
	}

	const fetchCityData = async (lat, lon, name) => {
		// Get weather data
		const res = await fetch(`${WEATHER_API_URL(lat, lon)}`)
		const data = await res.json();

		console.log(data);

		const formatNum = (number) => {
			const rounded = Math.round(number);
			if (rounded === -0 ) return 0
			else return rounded
		}

		const cityWeather = {
			summary: {
				cityName: name,
				temperature: formatNum(data.current_weather.temperature),
				weatherCode: data.current_weather.weathercode,
			},
			info: {
				feels_like: formatNum(data.hourly.apparent_temperature[12]),
				rain: formatNum(data.hourly.rain[12]),
				wind: formatNum(data.hourly.windspeed_10m[12]),
				wind_direction: formatNum(data.current_weather.winddirection),
				humidity: formatNum(data.hourly.relativehumidity_2m[12]),
				precipitation: formatNum(data.hourly.precipitation[12]),
				visibility: formatNum(data.hourly.relativehumidity_2m[12]),
				dew_point: formatNum(data.hourly.dewpoint_2m[12]),
			},
			hourly: data.hourly.time.slice(0, 49).map((time, i) => {
				const date = new Date(time * 1000).toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
				const weathercode = data.hourly.weathercode[i];
				const temperature = data.hourly.apparent_temperature[i];
				return [date, temperature, weathercode]
			}),
			daily: data.daily.time.map((el, i) => {
				const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date(data.daily.time[i] * 1000));
				const temperature = data.daily.apparent_temperature_max[i];
				const weathercode = data.daily.weathercode[i];
				return [day, formatNum(temperature), weathercode]
				
			})
		}
		return cityWeather
	}
	useEffect(() => {
		const fn = async() => {
			await curPosHandler();
			setPageLoaded(true);
		}
		fn();
	}, [])

	return <Fragment>
		<Viewport>
			<Container>
				<Search curPosHandler={curPosHandler} fetchCityData={fetchCityData}/>
				{!pageLoaded && <Player loop autoplay speed={.6} src={loadingAnimation} className="h-52 flex-1"/>}
				{pageLoaded && <Weather/>}
			</Container>
		</Viewport>
	</Fragment>
  
}

export default App;
