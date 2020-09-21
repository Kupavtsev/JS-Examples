import React from 'react';

const scaleName = {
    c: 'Цельсий',
    f: 'Фаренгейт'
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
};

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

// change!!!
function tryConver(temperature, convert) {
    //debugger;
    let input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Вода закипела</p>
    }
    return <p>Вода не закипит</p>
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.state = { temperature: '' };
    }

    handleChange(e) {
        //this.setState({temperature: e.target.value})
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        //debugger;
        const temperature = this.props.temperature;
        const scale = this.props.scale

        return (
            <fieldset>
                <legend>Введите температуру {scaleName[scale]}</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { scale: 'c', temperature: '' }
    }

    // setState I HAVE MADE A HUGE MISTAKE
    // OF SYNTAX I FORGOT BRACKETS AFTER () and put setState = !!!
    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature })
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature })
    }

    render() {
        // mistake
        //  this.props.temperature;
        //  this.props.scale;
        
        const temperature = this.state.temperature;
        const scale = this.state.scale;

        const celsius = scale === 'f'
            ? tryConver(temperature, toCelsius)
            : temperature;

        const fahrenheit = scale === 'c'
            ? tryConver(temperature, toFahrenheit)
            : temperature;

        return (
            <div>
                <TemperatureInput scale="c" onTemperatureChange={this.handleCelsiusChange} temperature={celsius} />
                <TemperatureInput scale="f" onTemperatureChange={this.handleFahrenheitChange} temperature={fahrenheit} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

export default Calculator;