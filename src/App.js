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

$.FroalaEditor.DefineIcon('alert', {NAME: 'info'});
$.FroalaEditor.RegisterCommand('alert', {
  title: 'Hello',
  focus: false,
  undo: false,
  refreshAfterCallback: false,
  callback: function () {
    alert('Hello!');
  }
});

$.FroalaEditor.DefineIcon('clear', {NAME: 'remove'});
$.FroalaEditor.RegisterCommand('clear', {
  title: 'Clear HTML',
  focus: false,
  undo: true,
  refreshAfterCallback: true,
  callback: function () {
    this.html.set('');
    this.events.focus();
  }
});

$.FroalaEditor.DefineIcon('insert', {NAME: 'plus'});
$.FroalaEditor.RegisterCommand('insert', {
  title: 'Insert HTML',
  focus: true,
  undo: true,
  refreshAfterCallback: true,
  callback: function () {
    this.html.insert('My New HTML');
  }
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <FroalaEditor tag='textarea' config={ {toolbarButtons: ['insert']} } />
      </div>
    );
  }
}

export default App;
