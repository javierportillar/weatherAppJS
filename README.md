# **Weather App JS**

## **Steps**

### **1. HTML Code**
To start with the HTML code, it was necessary to link a new font from Google Fonts.

Inside the `<body>` element, a main `<div>` with the class name "card" was added. This element contains two `<div>` sections.

#### **Div class "search"**
The "search" `<div>` class contains the input and button elements. The input allows you to enter the name of the location for which you want to retrieve weather information.

The button element is responsible for making the request to the API and is styled with SVG code.

#### **Div class "weather"**
The "weather" `<div>` class is designed to display the data obtained from the API. It includes the following:
- The city being searched, displayed with an `<h1>` element and the class name "city."
- Temperature information for that specific city.
- A `<div>` element with the class name "flex-cloud" containing an `<img>` element to display an image representing the current weather conditions.
- A `<div>` class named "description," which displays the weather description (e.g., cloudy, light rain, warm, etc.).
- A `<div>` class named "humidity," providing information about the humidity of the searched city.
- A `<div>` class named "wind," displaying data regarding the wind speed of the searched city.

To conclude, the script element includes a `src` attribute pointing to "index.js" for the logic implementation.

### **2. JS Code**
JavaScript code was designed by this way.

#### **weather variable**

To begin, it was created a variable called weather, this variable is an object with 3 elements.

- apiKey: this is my personal api key that was obtained from [OpenWeatherMap](https://openweathermap.org/) (go to direct link for more information)
- fetchWeather: this is a propierty form weather object that makes the petition to the API, this was made as an fetch fcn request, the data is converted into json and then it's guided to displayWeather propierty.
- displayWeather: this propierty receibes from fetchWeather "data" converted into json, it makes a destructuring for that variable and then it calls a new fcn called updateScreen to upload the data info into the screen.

#### **set city state**

For having an set state, the code begins setting a city called Pasto. For that reason when the project is open, automatically it shows Pasto city weather.

#### **action variables**

It was declarated and setted search and city variables, search is guided to search btn,
city is created for receibing the name of the city 

After that it was created 2 events listeners.
-search event is setted with click action that pulls setQuery fcn.
-document event is setted with keydown event, making that every keydown press generate a new event, in the case that key event is "Enter" key it will pulls setQuery fcn.

#### **action functions**

setQuery fcn calls getResults and gives to it city.value because the element city is an input element.

getResults fcn create a new variable called result that makes the petition to wather variable goint to fetchWeather and giving to it the same information that receibes (city.value).

updateScreen fcn receibes name, icon, description, temp, humidity, speed and country as propierties, it creates te variables according to html className code and inside every variable it create the information updated with the specific city place.