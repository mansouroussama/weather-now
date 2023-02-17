// CITY & COUNTRY
export const API_KEY = 'rAD3pTWJlLz3asR63BCv1w==svt9jIHgBggZn5sh';
export const CITY_API_URL = 'https://api.api-ninjas.com/v1/city?name=';
export const REVERSE_GEO_API_URL = 'https://api.api-ninjas.com/v1/reversegeocoding';

// WEATHER 
export const WEATHER_API_URL = (lat, lon) => {
  return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation,rain,weathercode,visibility,windspeed_10m&daily=weathercode,apparent_temperature_max&current_weather=true&timeformat=unixtime&timezone=Europe%2FBerlin`
}
export const weatherCodes = [
  [[0], 'Clear Sky'],
  [[1, 2, 3], 'Partly Cloudy'],
  [[45, 48], 'Foggy'],
  [[51, 53, 55, 56, 57], 'Drizzle'],
  [[61, 63, 65, 66, 67], 'Rain'],
  [[71, 73, 75, 77, 85, 86], 'Snow'],
  [[80, 81, 82], 'Rain Showers'],
  [[95, 96, 99], 'Thunderstorm']
]