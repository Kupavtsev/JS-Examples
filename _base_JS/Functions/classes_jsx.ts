// TypeScript

class ManTS {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    render() {
        return(
            <div>
                {this.name} {this.age}
            </div>
        )
    }
}

let m = new ManTS('Antony', 30);
