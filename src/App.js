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
  componentDidMount() {}
  showMore() {
    var number = [];
    var numbertable = [];

    for (var i = 0; i <= 15; i++) {
      var nUrl = "http://www.arabnews.com/tags/saudi-aramco";
      var nTitle =
        "Sudi Aramco Energy Ventures Invests in Norwegian Artificial ";
      var nsource = "google search";
      var nDate = "2019-02-25";
      number.push(
        "<tr><td><a href =" +
          nUrl +
          " target=" +
          "_blank" +
          ">" +
          nTitle +
          "</a></td></tr>"
      );

      number.push("<tr><td>" + nsource + " - " + nDate + "</td></tr>");

      number.push("<tr><td></td></tr>");
    }
    numbertable.push("<table><tbody>" + number.join(" ") + "</tblody></table>");
    var contentDiv = document.getElementsByClassName("fr-element fr-view");
    contentDiv[0].innerHTML = numbertable;
  }

  render() {
    return (
      <div>
        <div id="froala-editor" />
        <FroalaEditor tag="textarea" config={{toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'getPDF', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'] }} />

        <button type="button" onClick={this.showMore}>
          click me
        </button>
      </div>
    );
  }
}

export default App;
