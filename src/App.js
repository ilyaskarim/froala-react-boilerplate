import React from 'react';
import jquery from "jquery";

import 'froala-editor/js/froala_editor.pkgd.min.js';

import 'froala-editor/css/froala_style.min.css';

import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import 'font-awesome/css/font-awesome.css';

window.$ = jquery;

class App extends React.Component {

    render() {
        
        return (
          <div>
           <FroalaEditor
              tag='textarea'
              config={{
                pluginsEnabled: ["align", "charCounter", "codeBeautifier", "codeView", "colors", "draggable", "embedly", "emoticons", "entities", "file", "fontAwesome", "fontFamily", "fontSize", "fullscreen", "image", "imageTUI", "imageManager", "inlineStyle", "inlineClass", "lineBreaker", "lineHeight", "link", "lists", "paragraphFormat", "paragraphStyle", "quickInsert", "quote", "save", "table", "url", "video", "wordPaste"],
                toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'getPDF', 'spellChecker', 'help', 'html', '|', 'undo', 'redo']
              }}
            />
          </div>

      );
    }
}


export default App;
