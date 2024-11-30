import { Component } from 'react';

type MyComponentProps = {
    title: string;
}

type MyComponentState = {
    count: number;
}

class MyComponent extends Component<MyComponentProps, MyComponentState> {
    constructor(props: MyComponentProps) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default MyComponent;