class IndecisionApp extends React.Component {
    render() {
        const AppTitle = "Indecision App"
        const subTitle = "Put your life in the hand of a computer"
        const AppOptions = ["India", "UK", "USA"]
        return (
            <div>
                <Header title={AppTitle} subTitle={subTitle} />
                <Action />
                <Options options={AppOptions} />
                <AddOptions />
            </div>
        )
    }
}
class Header extends React.Component {
    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <ol>
                {
                    this.props.options.map((option)=>{
                      return  <Option key={option} optionText={option} />
                    })
                }
            </ol>
        )
    }
}

class Option extends React.Component {
    render () {
        return (
            <li>
                Options: {this.props.optionText}
            </li>
        )
    }
}

class AddOptions extends React.Component {
    render() {
        return (
            <div>
                <input type="text" name="option" />
                <button>Add Option</button>
            </div>
        )
    }
}



const app = document.getElementById('app');
ReactDOM.render(
    <IndecisionApp />,
    app
);