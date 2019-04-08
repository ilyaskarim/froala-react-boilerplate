/// <reference path="../froala-editor/js/plugins/image.min.js" />
// <reference path="../froala-editor/js/froala_editor.min.js" />
// <reference path="../froala-editor/js/froala_editor.min.js" />
import React from "react";
//Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";

//Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditor from "react-froala-wysiwyg";

import $ from 'jquery';

window.$ = $;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state=  {
      boolean: true,
      editor: null
    }
    this.toggle(true);
    this.toggle = this.toggle.bind(this);
    this.handleManualController = this.handleManualController.bind(this);
  }
  toggle(boolean) {
    this.setState({
      boolean: boolean
    })
    if (boolean) {
      $(this.state.editor).froalaEditor("edit.on");
    }else {
      $(this.state.editor).froalaEditor("edit.off");
    }
  }

  handleManualController(e) {
    e.initialize();
    this.setState({
      editor: e.getEditor()(),
    })
  }

  render() {
    return (
      <div>
        <div id="froala-editor">
          <FroalaEditor onManualControllerReady={this.handleManualController} tag="textarea" config={{toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'getPDF', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'] }} />
        </div>

        <button type="button" onClick={() => this.toggle(!this.state.boolean) }>
          click me
        </button>
      </div>
    );
  }
}

export default App;
