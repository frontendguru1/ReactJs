// import styles from 'style.css'

var app = {
    title: 'Add Number App',
    subtitle: 'Put your life in the hand of a computer',
    options: ['one','two']
}

const onFormSubmit = (e)=> {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value= '';
        render();
    }
    
}

const removeOptions = ()=> {
    app.options = [];
    render();
}

var appRoot = document.getElementById('app');
const render = ()=> {
    var template = (
        <div>
            <h1> { app.title }</h1>
            {app.subtitle && <p>{ app.title }</p>}
            <p>{ app.options.length >0 ? 'Here are your options' : 'No Options' }</p>
            <p> { app.options.length }</p>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
                {/* {app.map((key, index) => (
                    // <p>Hello, {person.name} from {person.country}!</p>
                    <li key={index}>{ app.option[index] }</li>
                ))} */} 
                 
            </ol>
            <br /> <br />
            <button onClick={ removeOptions }>Remove Options</button>
            <br /> <br />
            <form onSubmit={ onFormSubmit }>
                <input type="text" name="option" />
                <button>Add Options</button>
            </form>

        </div>
    );    
    ReactDOM.render(template, appRoot);
}

render();

