class Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    render() {
        return (
            <div>
                {this.name} {this.age}
            </div>
        )
    }
}

let m1 = new Man('Oleg', 36);
let jsx = m1.render();

// The same, but as Class Component
class Man2 {
    constructor(props) {
        this.props = props;
    }
    render() {
        return (
            <div>
                {this.props.name} {this.props.age}
            </div>
        )
    }
}
// We make packing in Object this two propirties
let m2 = new Man2({
    name: 'Oleg',
    age: 36
});
let jsx2 = m2.render();

// Наследование от др Класса extends React.Component
class Man3 extends React.Component {
    // Наш Конструктор ничего не конструирует, поэтому его можно не писать
    constructor(props) {
        // вызывается React.Component в него передаются props
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.name} {this.props.age}
            </div>
        )
    }
}