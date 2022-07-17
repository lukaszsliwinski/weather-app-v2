import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        inputValue: '',
        data: '',
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/data', { postedData: this.state.inputValue });
        console.log(response.data);
        this.setState({ data: response.data.receivedData })
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.post}
                        onChange={e => this.setState({ inputValue: e.target.value })}
                    />
                    <button type="submit">submit</button>
                </form>
            </>
        );
    };
};

export default App;