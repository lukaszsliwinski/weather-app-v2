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

            }
        };
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/data', { city: this.state.input });
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
            return state;
        });
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
                
                <p>{this.state.place}</p>
                <p>{this.state.conditions.description}</p>
                <img src={this.state.conditions.icon} />
                <p>{this.state.conditions.temp}</p>
                <p>{this.state.conditions.sensed}</p>
                <p>{this.state.conditions.min}</p>
                <p>{this.state.conditions.max}</p>
                <p>{this.state.conditions.sunrise}</p>
                <p>{this.state.conditions.sunset}</p>
                <p>{this.state.conditions.wind}</p>
                <p>{this.state.conditions.cloudiness}</p>
                <p>{this.state.conditions.pressure}</p>
                <p>{this.state.conditions.humidity}</p>
            </>
        );
    };
};

export default App;