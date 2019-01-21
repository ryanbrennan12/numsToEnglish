const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
import { numToEng, hundred, tens, numObj } from './utils';
import List from './components/List.js';
//component has
//state
//lifecycle methods
//UI (ALWAYS HAS UI)

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      strs: '',
      items: []
    };
    this.onChange = this.onChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  onChange(e) {
    console.log(e.target.value)
    numToEng(e.target.value, numObj, numStr => {
      this.setState({
        amount: e.target.value,
        strs: numStr
      });
    });
  }
  addItem(e) {
    e.preventDefault();
    this.setState({
      amount: '',
      items: [...this.state.items, this.state.strs]
    });
  }
  render() {
    return (
      <div id="container">
        <form onSubmit={this.addItem}>
        <h1>Nums-to-English <i className="fa fa-plus" aria-hidden="true"></i></h1>
          <input placeholder="Add New Number" value={this.state.amount} onChange={this.onChange} />
        </form>

        <List items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

