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

export interface IHourlyForecast {
    time: string,
    icons: string,
    temp: string
}

export interface IDailyForecast {
    nextDays: string,
    dailyIcons: string,
    maxTemp: string,
    minTemp: string
}

export interface IDataObject {
    place: string,
    today: string,
    now: string,
    weather: IWeather,
    hourlyForecast: IHourlyForecast,
    dailyForecast: IDailyForecast
}