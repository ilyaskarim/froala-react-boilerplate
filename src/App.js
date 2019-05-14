import React, { Component } from 'react';

import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

import $ from 'jquery';
window.$ = $;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			times: 0
		}
	}
  render() {
  	let component = this;
    return (
      <div className="App">
        <FroalaEditor tag='textarea' config={{
        	events: {
        		'froalaEditor.contentChanged': function (a) {
        			component.setState({times: component.state.times + 1})
	        	}
        	}
        }} >
        		Netflix shall have 6 exclusive, successive, dependent options to order subsequent seasons/cycles ( each a "Subseguent Season") exercisable until the earlier of 6 months after exhibition of the most recent season on the Netflix service and 9 months from Delivery of the most recent season. In the event Netflix orders subsequent seasons of the U.S. version, then Netflix shall also order a minimum ofone ( 1) additional version that is not in the English language. The Approved Budget may increase up to 5% season over season. The Production Company Fee will be subject to a 5% increase season over season.
        </FroalaEditor>
       	<h1>Edited {this.state.times}</h1>
      </div>
    );
  }
}

export default App;
