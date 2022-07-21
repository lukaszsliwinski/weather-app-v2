import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            place: '',
            conditions: {
                description: '',
                icon: '',
                temp: '',
                sensed: '',
                min: '',
                max: '',
                sunrise: '',
                sunset: '',
                wind: '',
                cloudiness: '',
                pressure: '',
                humidity: '',
            },
            forecast: {
                maxTemp: '',
                minTemp: '',
                nextDays: '',
            }
        };
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post('/api/weather', { city: this.state.input });
        if (response.data.cod == '404') {
            alert(this.state.input + ' ' + response.data.err);
        } else {
            const response2 = await axios.post('/api/forecast', { city: this.state.input });

            this.setState( (state) => {
                state.place = response.data.place;
                state.conditions.description = response.data.description;
                state.conditions.icon = response.data.icon;
                state.conditions.temp = response.data.temp;
                state.conditions.sensed = response.data.sensed;
                state.conditions.min = response.data.min;
                state.conditions.max = response.data.max;
                state.conditions.sunrise = response.data.sunrise;
                state.conditions.sunset = response.data.sunset;
                state.conditions.wind = response.data.wind;
                state.conditions.cloudiness = response.data.cloudiness;
                state.conditions.pressure = response.data.pressure;
                state.conditions.humidity = response.data.humidity;
    
                state.forecast.nextDays = response2.data.nextDays;
                state.forecast.maxTemp = response2.data.maxTemp;
                state.forecast.minTemp = response2.data.minTemp;
                return state;
            });
        };
    };




    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.input}
                        onChange={e => this.setState({ input: e.target.value })}
                    />
                    <button type="submit">submit</button>
                </form>
                <p>{this.state.place}&nbsp;{this.state.conditions.description}<img src={this.state.conditions.icon} /></p>
                <table>
                    <thead>
                        <th colSpan="10">weather</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>temp</th>
                            <th>sensed</th>
                            <th>min</th>
                            <th>max</th>
                            <th>sunrise</th>
                            <th>sunset</th>
                            <th>wind</th>
                            <th>cloudiness</th>
                            <th>pressure</th>
                            <th>humidity</th>
                        </tr>
                        <tr>
                            <td className='rendered-data'>{this.state.conditions.temp}</td>
                            <td className='rendered-data'>{this.state.conditions.sensed}</td>
                            <td className='rendered-data'>{this.state.conditions.min}</td>
                            <td className='rendered-data'>{this.state.conditions.max}</td>
                            <td className='rendered-data'>{this.state.conditions.sunrise}</td>
                            <td className='rendered-data'>{this.state.conditions.sunset}</td>
                            <td className='rendered-data'>{this.state.conditions.wind}</td>
                            <td className='rendered-data'>{this.state.conditions.cloudiness}</td>
                            <td className='rendered-data'>{this.state.conditions.pressure}</td>
                            <td className='rendered-data'>{this.state.conditions.humidity}</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <thead>
                        <th colSpan="4">forecast</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='rendered-data'>{this.state.forecast.nextDays[0]}</th>
                            <th className='rendered-data'>{this.state.forecast.nextDays[1]}</th>
                            <th className='rendered-data'>{this.state.forecast.nextDays[2]}</th>
                            <th className='rendered-data'>{this.state.forecast.nextDays[3]}</th>
                        </tr>
                        <tr>
                            <td className='rendered-data'>{this.state.forecast.maxTemp[0]}</td>
                            <td className='rendered-data'>{this.state.forecast.maxTemp[1]}</td>
                            <td className='rendered-data'>{this.state.forecast.maxTemp[2]}</td>
                            <td className='rendered-data'>{this.state.forecast.maxTemp[3]}</td>
                        </tr>
                        <tr>
                            <td className='rendered-data'>{this.state.forecast.minTemp[0]}</td>
                            <td className='rendered-data'>{this.state.forecast.minTemp[1]}</td>
                            <td className='rendered-data'>{this.state.forecast.minTemp[2]}</td>
                            <td className='rendered-data'>{this.state.forecast.minTemp[3]}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    };
};

export default App;