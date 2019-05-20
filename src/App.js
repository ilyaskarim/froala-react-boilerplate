import React, { Component } from 'react';

import 'froala-editor/js/froala_editor.pkgd.min.js';

import FroalaEditor from 'react-froala-wysiwyg';
import Frame from 'react-frame-component';

import $ from 'jquery';
window.$ = $;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			times: 0
		}
	}
  componentDidMount() {
    let i = document.querySelector("#frame-one");
    console.log(i)
  }
  render() {
  	let component = this;
    return (
      <div className="App">
        
       	<h1>Edited {this.state.times}</h1>
        <Frame style={{width: "100%",height: "500px"}} id="frame-one" >
          This is inside frame
          { /* Need to import css by link because for Iframe styling doesn't works */ }
          <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.9.5/css/froala_editor.pkgd.min.css' />
          <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.9.5/css/froala_editor.min.css' />
          <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
          { /* Need to import css by link because for Iframe styling doesn't works */ }
          <FroalaEditor tag='textarea' config={{
          events: {
            'froalaEditor.contentChanged': function (a) {
              component.setState({times: component.state.times + 1})
            }
          }
        }} >
            Netflix shall have 6 exclusive, successive, dependent options to order subsequent seasons/cycles ( each a "Subseguent Season") exercisable until the earlier of 6 months after exhibition of the most recent season on the Netflix service and 9 months from Delivery of the most recent season. In the event Netflix orders subsequent seasons of the U.S. version, then Netflix shall also order a minimum ofone ( 1) additional version that is not in the English language. The Approved Budget may increase up to 5% season over season. The Production Company Fee will be subject to a 5% increase season over season.
        </FroalaEditor>
        </Frame>
      </div>
    );
  }
}

export default App;
