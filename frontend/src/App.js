import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            place: '',
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
        };
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/data', { city: this.state.city });
        this.setState({ 
            place: response.data.place,
            description: response.data.description,
            icon: response.data.icon,
            temp: response.data.temp,
            sensed: response.data.sensed,
            min: response.data.min,
            max: response.data.max,
            sunrise: response.data.sunrise,
            sunset: response.data.sunset,
            wind: response.data.wind,
            cloudiness: response.data.cloudiness,
            pressure: response.data.pressure,
            humidity: response.data.humidity,
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.post}
                        onChange={e => this.setState({ city: e.target.value })}
                    />
                    <button type="submit">submit</button>
                </form>
                
                <p>{this.state.place}</p>
                <p>{this.state.description}</p>
                <img src={this.state.icon} />
                <p>{this.state.temp}</p>
                <p>{this.state.sensed}</p>
                <p>{this.state.min}</p>
                <p>{this.state.max}</p>
                <p>{this.state.sunrise}</p>
                <p>{this.state.sunset}</p>
                <p>{this.state.wind}</p>
                <p>{this.state.cloudiness}</p>
                <p>{this.state.pressure}</p>
                <p>{this.state.humidity}</p>
            </>
        );
    };
};

export default App;