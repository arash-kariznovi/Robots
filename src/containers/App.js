import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends React.Component {
	constructor() {
		super()
		this.state = {
			searchField: ' ',
			robots: []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => { return res.json() })
			.then(user => this.setState({ robots: user }))

	}

	searchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}

	render() {
		const filtered = this.state.robots.filter((robots) => {
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		});

		if (this.state.robots.length === 0) {
			return <h1 className="tc">LOADING...</h1>
		} else {
			return (
				<div className=" tc">
					<h1 className=" f2">RoboFriends</h1>
					<SearchBox searchChange={this.searchChange} />
					<Scroll>
						<CardList robots={filtered} />
					</Scroll>
				</div>

			)
		}

	}

}
export default App;