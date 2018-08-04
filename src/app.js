class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            Coption : []
        }
    }

    handleDeleteOptions() {
        this.setState(()=>{
            return {
                Coption: []
            }
        })
    }

    handleAddOption(option) {
        if(!option) {
            return <span className={'error'}>Enter valid value to add item</span>
        }
        else if (this.state.Coption.indexOf(option) > -1) {
            return <span className={'msg-green'}>This option already exists</span>
        }
        this.setState((prevState)=>{
            return {
                Coption: prevState.Coption.concat(option)
            }
        })
    }

    render() {
        const AppTitle = "Indecision App";
        const subTitle = "React Application";
        return (
            <div className={'wrapper'}>
                <Header title={AppTitle} subTitle={subTitle} />
                <Action hasOptions={this.state.Coption.length>0} handleDeleteOptions={this.handleDeleteOptions} />
                <Options options={this.state.Coption} />
                <AddOptions handleAddOption={this.handleAddOption} />
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
        console.log(this.props.hasOptions)
    }

    render() {
        return (
            <div className={'action'}>
                <span className={'text1'}>What should I do?</span>
                <button className={'btn btn-remove'} disabled={!this.props.hasOptions} onClick={this.props.handleDeleteOptions}>Remove</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        console.log(this.props.options,'test')
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
                Option: {this.props.optionText}
            </li>
        )
    }
}

class AddOptions extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(()=> {
            return {error}
        })
        e.target.elements.option.value = ''
        // if(option) {
        //     this.props.handleAddOption(option)
        // }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
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
        const currentCount = this.state.count
        return (
            <div className={'counter'}>
                <div className={'count-title'}>Count : {currentCount}</div>
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