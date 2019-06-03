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
  handleManualControllerA(arg) {
    arg.initialize();
    console.log(arg)
  }
  handleManualControllerB(arg) {
    arg.initialize();
    console.log(arg)
  }
  handleManualControllerC(arg) {
    arg.initialize();
    console.log(arg)
  }
  render() {
    return (
      <div className="App">
        <FroalaEditor onManualControllerReady={this.handleManualControllerA} config={{
          events: {
            "froalaEditor.initialized": function (e,a) {
              console.log(e,a)
            }
          }
        }} tag='textarea'/>
        <FroalaEditor onManualControllerReady={this.handleManualControllerB} config={{
          events: {
            "froalaEditor.initialized": function (e,a) {
              console.log(e,a)
            }
          }
        }} tag='textarea'/>
        <FroalaEditor onManualControllerReady={this.handleManualControllerC} config={{
          events: {
            "froalaEditor.initialized": function (e,a) {
              console.log(e,a)
            }
          }
        }} tag='textarea'/>
      </div>
    );
  }
}

export default App;
