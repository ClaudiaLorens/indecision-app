class RenderToggle extends React.Component {
    constructor(props) {
        super(props);

        this.onToggleInfo = this.onToggleInfo.bind(this);

        this.state = {
            visibility: false
        };
    }

    onToggleInfo() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onToggleInfo}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility ? <div><p>You can now see this details!</p></div> : ""}
            </div>
        );
    }
}

ReactDOM.render(<RenderToggle/>, document.getElementById('app'));


/*let visibility = false;

const onToggleInfo = () => {
    visibility = !visibility;
    renderToggle();
};

const renderToggle = () => {
    const template = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={onToggleInfo}>{visibility ? 'Hide details' : 'Show details'}</button>
        {visibility && (
            <div>
                <p>Now you can see this text!</p>
            </div>
        )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

renderToggle();*/