# **Weather App JS**

## **Steps**

### **1. HTML Code**
To begin with the HTML code, it was necessary to link a new font from Google Fonts.

Inside the `<body>` element, a main `<div>` with the class name "card" was added. This element contains two `<div>` sections.

#### **"search" div class**
The "search" `<div>` class contains the input and button elements. The input allows you to enter the name of the location for which you want to retrieve weather information.

The button element is responsible for making the request to the API and is styled with SVG code.

#### **"weather" div class**
The "weather" `<div>` class is designed to display the data obtained from the API. It includes the following:
- The city being searched, displayed with an `<h1>` element with the class name "city."
- Temperature information for that specific city.
- A `<div>` element with the class name "flex-cloud" containing an `<img>` element to display an image representing the current weather conditions.
- A `<div>` class named "description," which displays the weather description (e.g., cloudy, light rain, warm, etc.).
- A `<div>` class named "humidity," providing information about the humidity of the searched city.
- A `<div>` class named "wind," displaying data regarding the wind speed of the searched city.

To conclude, the script element includes a `src` attribute pointing to "index.js" for the logic implementation.

### **2. JS Code**
The JavaScript code was designed as follows:

#### **"weather" variable**

To begin, a variable called "weather" was created. This variable is an object with three properties:

- `apiKey`: This property stores my personal API key obtained from [OpenWeatherMap](https://openweathermap.org/) (you can visit the direct link for more information).
- `fetchWeather`: This property of the "weather" object makes a request to the API using the `fetch` function. The data is then converted into JSON, and it's directed to the "displayWeather" property.
- `displayWeather`: This property receives the "data" converted into JSON from the "fetchWeather" property. It performs destructuring on that variable and then calls a new function called "updateScreen" to display the data on the screen.

#### **Setting the city state**

To set an initial state, the code starts by setting the city to "Pasto." This means that when the project is opened, it automatically displays the weather for the city of Pasto.

#### **Action variables**

Two variables, "search" and "city," were declared and initialized. "Search" is connected to the search button, while "city" is created to receive the name of the city.

Afterward, two event listeners were created:
- The "search" event is set with a click action, triggering the "setQuery" function.
- The "document" event is set with a keydown event, which means that every key press generates a new event. In the case that the key event is the "Enter" key, it calls the "setQuery" function.

#### **Action functions**

The "setQuery" function calls "getResults" and provides it with `city.value` because the "city" element is an input element.

The "getResults" function creates a new variable called "result," which makes a request to the "weather" variable, going to "fetchWeather" and providing it with the same information received (`city.value`).

The "updateScreen" function receives "name," "icon," "description," "temp," "humidity," "speed," and "country" as properties. It creates variables according to the HTML class names and updates the information for the specific city location within each variable.

### **3. CSS Code**
The CSS code begins with styling the `<body>`, making the `<div>` display as a flex container and centering the `<div>` elements on the screen. It sets background color, font-family, font size, and a background image.

Styles for the "card" `<div>` class include background color, text color, organization with padding, border radius, and a maximum width to avoid overloading certain elements.

The "search" `<div>` class uses `display: flex` to organize the city input and button, centering both `<div>` elements.

The styling for the city input includes background color, borders, text color, and width.

Similar styling is applied to the search button, which sets background color, text color, border radius, and div size. Additionally, a larger size is applied to the SVG, and the button changes on hover with a cursor pointer, new text color, and background color.

The "flex-cloud" class uses `display: flex` to center the `<div>` elements without borders.

The `.loading` class hides information while the API request is loading.
