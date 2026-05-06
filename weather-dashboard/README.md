# Weather Dashboard

A beautiful, responsive weather dashboard that fetches real-time weather data from the OpenWeatherMap API.

## Features

✨ **Real-Time Weather Data**
- Current weather conditions for any city worldwide
- Temperature, humidity, wind speed, pressure, and more
- Sunrise and sunset times
- "Feels like" temperature

📊 **Hourly Forecast**
- 24-hour forecast (8 forecasts at 3-hour intervals)
- Temperature trends
- Humidity and wind speed for each hour

📅 **5-Day Forecast**
- Daily weather predictions
- Max/min temperatures
- Weather conditions and descriptions

🎨 **Beautiful UI**
- Modern, responsive design
- Gradient backgrounds
- Weather icons for visual appeal
- Smooth animations and transitions
- Mobile-friendly interface

🔍 **Search Functionality**
- Search for any city worldwide
- Real-time weather updates
- Error handling for invalid cities

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Functionality
- **OpenWeatherMap API** - Weather data
- **Font Awesome** - Icons

## Setup Instructions

### 1. Get an API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Go to your API keys section
4. Copy your API key

### 2. Configure the Application

Open `script.js` and replace the placeholder:

```javascript
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
```

With your actual API key:

```javascript
const API_KEY = 'abc123def456ghi789jkl012';
```

### 3. Run the Application

Option A: Open directly in browser
- Simply open `index.html` in your web browser

Option B: Use a local server (recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server package)
http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000/weather-dashboard/`

## API Documentation

### Current Weather Endpoint
```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

### Forecast Endpoint
```
GET https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric
```

### Response Example
```json
{
  "coord": {"lon": -0.1257, "lat": 51.5085},
  "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds"}],
  "main": {
    "temp": 12.5,
    "feels_like": 11.8,
    "temp_min": 10.2,
    "temp_max": 14.1,
    "pressure": 1013,
    "humidity": 72
  },
  "wind": {"speed": 4.5, "deg": 230, "gust": 6.2},
  "clouds": {"all": 75},
  "visibility": 10000,
  "sys": {
    "sunrise": 1683619200,
    "sunset": 1683670800,
    "country": "GB"
  },
  "name": "London"
}
```

## File Structure

```
weather-dashboard/
├── index.html          # HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Key JavaScript Functions

### `getWeatherData(city)`
Main function to fetch and display weather data for a city.

### `fetchCurrentWeather(city)`
Fetches current weather data from OpenWeatherMap API.

### `fetchForecast(city)`
Fetches 5-day forecast data from OpenWeatherMap API.

### `displayCurrentWeather(data)`
Renders current weather section with temperature, conditions, and statistics.

### `displayHourlyForecast(data)`
Renders 24-hour hourly forecast cards.

### `displayDailyForecast(data)`
Renders 5-day daily forecast cards.

### `displayWeatherDetails(data)`
Renders detailed weather information cards.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Change Default City
In `script.js`, modify:
```javascript
let currentCity = 'London'; // Change to your preferred city
```

### Modify Temperature Units
Change `units=metric` to `units=imperial` for Fahrenheit:
```javascript
const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=imperial`;
```

### Change Colors
Modify CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #1e3a8a;
    --secondary-color: #3b82f6;
    /* ... other colors ... */
}
```

## Error Handling

The application includes error handling for:
- Invalid city names (404 errors)
- API connection failures
- Missing API key
- Network timeouts

Errors are displayed as user-friendly messages in the UI.

## Performance Optimization

- Debounced search to reduce API calls
- Cached forecast data
- Efficient DOM manipulation
- CSS animations for smooth transitions
- Minified assets for faster loading

## Future Enhancements

- [ ] Multiple city comparison
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Air quality index (AQI)
- [ ] UV index integration
- [ ] Location-based weather (geolocation)
- [ ] Dark/Light theme toggle
- [ ] Weather maps and radar
- [ ] PWA (Progressive Web App) support
- [ ] Local storage for favorite cities

## Free API Limitations

The free tier of OpenWeatherMap includes:
- Current weather data
- 5-day/3-hour forecast
- Unlimited API calls
- No authentication required (for basic use)

## License

This project is open source and available under the MIT License.

## Resources

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CSS-Tricks - Responsive Design](https://css-tricks.com/responsive-web-design-basics/)
- [Font Awesome Icons](https://fontawesome.com/icons)

## Support

For issues or questions:
1. Check the [OpenWeatherMap FAQ](https://openweathermap.org/faq)
2. Review the API response in browser DevTools
3. Verify your API key is valid and active
4. Check your API call limits

## Author

Created as a modern weather dashboard application.

---

**Made with ❤️ using HTML, CSS, and JavaScript**
