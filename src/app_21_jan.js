console.log("this is app.js....");

var obj = {
    name: "rahul",
    age: 23,
    city: "Delhi"
}

function getName(username) {
    if (username) {
        return username;
    }
    else {
        return 'Unknown'
    }
}

function getName1(username) {
    return <div> User name:  {username}</div>
}

var template =
    (<div>
        <p>{obj.name}</p>
        <p id="test" class="test">this is my first JSX code 1</p>
        <p>{getName(obj.name)}</p>
        {getName1(obj.name)}
        {obj.name ? obj.name : "Knasdf"}
        {obj.age && obj.age>18 && <p>User age is {obj.age}</p>}
    </div>
    )

var app = document.getElementById("app");

ReactDOM.render(template, app);
