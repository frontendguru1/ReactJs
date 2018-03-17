

class IndecisionApp extends React.Component {
    render() {
        const AppTitle = "Indecision App"
        const subTitle = "Put your life in the hand of a computer"
        const AppOptions = ["India", "UK", "USA"]
        return (
            <div className={'wrapper'}>
                <Header title={AppTitle} subTitle={subTitle} />
                <Action />
                <Options options={AppOptions} />
                <AddOptions />

                <Counter />
                <VisibilityToggle />
            </div>
        )
    }
}

class Header extends React.Component {
    render () {
        return (
            <div className={'header-container'}>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    constructor (props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }

    handleRemoveAll() {
        console.log(this.props.options)
    }

    render() {
        return (
            <div className={'action'}>
                <span className={'text1'}>What should I do?</span>
                <button className={'btn btn-remove'} onClick={this.handleRemoveAll}>Remove</button>

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

class Counter extends React.Component {
    constructor (props) {
        super (props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)

        this.state = {
            count: 0
        }

    }

    handleAddOne () {
        console.log('handleAddOne')
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleMinusOne () {
        console.log('handleMinusOne')
        this.setState((prevState)=> {
            return {
                count: prevState.count - 1
            }
        })
    }
    
    handleReset () {
        console.log('handleReset')
        this.setState((prevState)=> {
            return {
                count: 0
            }
        })
    }

    render () {
        return (
            <div className={'counter'}>
                <div className={'count-title'}>Count : {this.state.count}</div>
                <button className={'counter-btn'} onClick={this.handleAddOne}>+1</button>
                <button className={'counter-btn'} onClick={this.handleMinusOne}>-1</button>
                <button className={'counter-btn'} onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

class VisibilityToggle extends React.Component {
    constructor (props) {
        super (props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)

        this.state = {
            visibility : false
        }
    }
    
    handleToggleVisibility() {
        console.log('test')
        this.setState (()=> {
            return {
                visibility : !this.state.visibility
            }
        })
    }

    render () {

        return (
            <div className={'toggle-container'}>
                <div>Visibility Toggle</div>
                <button className={'toggle-btn'} onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>

                {this.state.visibility && (
                    <div>
                        <p>
                            Hey, these are some details you can now see!!
                        </p>
                    </div>
                )}
            </div>
        )
    }
}


const app = document.getElementById('app');
ReactDOM.render(
    <IndecisionApp />,
    app
)