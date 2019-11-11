class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: {}
        }
    }
    componentWillMount() {
        this.setState({
            posts: PostsData
        });
    }


    render() {
        return <div>
            <header className="app-header"></header>
            <Title />
            <div className="app-card-list" id="app-card-list">
                {
                    Object
                        .keys(this.state.posts)
                        .map(key => <Card key={key} index={key} details={this.state.posts[key]} />)
                }
            </div>
        </div>
    }
}