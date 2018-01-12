console.log('App.js is running');

const template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: 'Claudia',
    age: 25,
    location: 'Glasgow'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const appRoot = document.getElementById('app');

const onRemoveAll = () => {
    app.options = [];
    render();
};

//const numbers = [55, 101, 1000];

/*const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};*/

const render = () => {
    const templateThree = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                /*numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>
                })*/
            }
            <ol>
            {app.options.map((option) => {
                return <li key={option}>Item {option}</li>
            })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(templateThree, appRoot);
};

render();
