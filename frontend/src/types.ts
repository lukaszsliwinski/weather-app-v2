export interface IWeather {
    description: string,
    icon: string,
    iconCode: string,
    temp: string,
    sensed: string,
    min: string,
    max: string,
    sunrise: string,
    sunset: string,
    wind: string,
    cloudiness: string,
    pressure: string,
    humidity: string
}

export interface IForecast {
    nextDays: string,
    nextDates: string,
    dailyIcons: string,
    maxTemp: string,
    minTemp: string
}

export interface IForecastDetails {
    hours: string,
    temp: string,
    icons: string
}

export interface IForecast24 {
    time24: string,
    icons24: string,
    temp24: string
}

export interface IDataObject {
    place: string,
    today: string,
    now: string,
    weather: IWeather,
    forecast: IForecast,
    forecastDetails: IForecastDetails,
    forecast24: IForecast24
}