import React, { useEffect, useState } from "react";
import "../Styles/TopPanel.css";
import { isEmpty } from "lodash";
import Split from "split.js";
import "../Styles/CodeManager.css";

const TopPanels = ({ editor }) => {
  const [trigger, setTrigger] = useState(false);
  const [getHTML, setGetHTML] = useState("");
  const [getCSS, setGetCSS] = useState("");

  const panelManager = !isEmpty(editor) && editor.Panels;
  const DeviceSize = !isEmpty(editor) && editor.DeviceManager;
  const CodeManager = !isEmpty(editor) && editor.CodeManager;

  useEffect(() => {
    if (!isEmpty(editor)) {
      var pfx = editor.getConfig().stylePrefix;
      var modal = editor.Modal;
      var cmdm = editor.Commands;
      var htmlCodeViewer = CodeManager.getViewer("CodeMirror").clone();
      var cssCodeViewer = CodeManager.getViewer("CodeMirror").clone();
      var container = document.createElement("div");
      var btnEdit = document.createElement("button");
      container.className = "imp-dialog";

      editor.RichTextEditor.remove("link");

      editor.RichTextEditor.add("dropcap", {
        icon: "<b>D<sup>c</sup></b>",
        attributes: { title: "Dropcap" },
        result: (rte) => {
          var component = editor.getSelected();

          if (
            component.is("text") &&
            component.getClasses().includes("dropCaps")
          ) {
            component.replaceWith(`${component.get("content")}`);
          } else {
            var range = rte.selection().getRangeAt(0);

            var container = range.commonAncestorContainer;

            if (container.nodeType == 3) container = container.parentNode;

            if (
              container.nodeName == "SPAN" &&
              container.classList.contains("dropCaps")
            ) {
              var parent = container.parentNode;
              var content = document.createTextNode(container.innerHTML);

              // insert all our children before ourselves.
              parent.insertBefore(content, container);

              parent.removeChild(container);
            } else {
              rte.insertHTML(
                `<span class="dropCaps">${rte.selection()}</span>`,
              );
            }
          }
        },
      });

      editor.RichTextEditor.add("superscript", {
        icon: "<b>S<sup>s</sup></b>",
        attributes: { title: "Superscript" },
        result: (rte) => rte.exec("superscript"),
      });

      editor.RichTextEditor.add("subscript", {
        icon: "<b>S<sub>s</sub></b>",
        attributes: { title: "Subscript" },
        result: (rte) => rte.exec("subscript"),
      });

      editor.RichTextEditor.add("hyperlink", {
        icon: "&#128279;",
        attributes: { title: "Hyperlink" },
        result: (rte) => {
          var component = editor.getSelected();

          if (component.is("link")) {
            component.replaceWith(`${component.get("content")}`);
          } else {
            var range = rte.selection().getRangeAt(0);

            var container = range.commonAncestorContainer;
            if (container.nodeType == 3) container = container.parentNode;

            if (container.nodeName === "A") {
              var sel = rte.selection();
              sel.removeAllRanges();
              range = document.createRange();
              range.selectNodeContents(container);
              sel.addRange(range);
              rte.exec("unlink");
            } else {
              var url = window.confirm(
                "Do you want to change this element to link? If yes ,  you can manage this link attribute in setting",
              );
              if (url)
                rte.insertHTML(
                  `<a class="link" href="${url}">${rte.selection()}</a>`,
                );
            }
          }
        },
      });

      editor.RichTextEditor.add("indent", {
        icon: "&#8594;",
        attributes: { title: "Indent" },
        result: (rte) => rte.exec("indent"),
      });

      editor.RichTextEditor.add("outdent", {
        icon: "&#8592;",
        attributes: { title: "Outdent" },
        result: (rte) => rte.exec("outdent"),
      });

      editor.RichTextEditor.add("orderedList", {
        icon: "1.",
        attributes: { title: "Ordered List" },
        result: (rte) => rte.exec("insertOrderedList"),
      });

      editor.RichTextEditor.add("unorderedList", {
        icon: "&#8226;",
        attributes: { title: "Unordered List" },
        result: (rte) => rte.exec("insertUnorderedList"),
      });
      // Trits
      editor.DomComponents.addType("input", {
        isComponent: (el) => el.tagName === "INPUT",
        model: {
          defaults: {
            traits: [
              // Strings are automatically converted to text types
              "name", // Same as: { type: 'text', name: 'name' }
              "placeholder",
              "value",
              "class",
              "id",
              {
                type: "select", // Type of the trait
                label: "Type", // The label you will see in Settings
                name: "type", // The name of the attribute/property to use on component
                options: [
                  { id: "text", name: "Text" },
                  { id: "email", name: "Email" },
                  { id: "password", name: "Password" },
                  { id: "number", name: "Number" },
                  { id: "radio", name: "radio" },
                  { id: "button", name: "button" },
                  { id: "checkbox", name: "checkbox" },
                  { id: "date", name: "date" },
                  { id: "file", name: "file" },
                  { id: "search", name: "search" },
                  { id: "submit", name: "submit" },
                  { id: "reset", name: "reset" },
                  { id: "color", name: "color" },
                ],
              },
              {
                type: "checkbox",
                name: "required",
              },
            ],
            // As by default, traits are binded to attributes, so to define
            // their initial value we can use attributes
            attributes: { type: "text", required: true },
          },
        },
      });
      //Top
      htmlCodeViewer.set({
        codeName: "htmlmixed",
        readOnly: 0,
        theme: "hopscotch",
        autoBeautify: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineWrapping: true,
        styleActiveLine: true,
        smartIndent: true,
        indentWithTabs: true,
      });

      cssCodeViewer.set({
        codeName: "css",
        readOnly: 0,
        theme: "hopscotch",
        autoBeautify: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineWrapping: true,
        styleActiveLine: true,
        smartIndent: true,
        indentWithTabs: true,
      });

      btnEdit.innerHTML = "Save";
      btnEdit.className = pfx + "btn-prim " + pfx + "btn-import";
      btnEdit.onclick = function () {
        var html = htmlCodeViewer.editor.getValue();
        var css = cssCodeViewer.editor.getValue();

        editor.DomComponents.getWrapper().set("content", "");
        editor.setComponents(html.trim());
        editor.setStyle(css);
        modal.close();
      };
      const htmlSection = document.createElement("section");
      htmlSection.className = "gjs-cm-editor-c";
      htmlSection.setAttribute("id", "gjs-cm-htmlmixed");
      const cssSection = document.createElement("section");
      cssSection.setAttribute("id", "gjs-cm-css");
      cssSection.className = "gjs-cm-editor-c";
      htmlSection.innerHTML = "<div id='gjs-cm-title'>HTML</div>";
      cssSection.innerHTML = "<div id='gjs-cm-title'>CSS</div>";

      container.appendChild(htmlSection);
      container.appendChild(cssSection);

      cmdm.add("html-edit", {
        run: function (editor, sender) {
          sender && sender.set("active", 0);

          var htmlViewer = htmlCodeViewer.editor;
          var cssViewer = cssCodeViewer.editor;
          modal.setTitle("Edit code");
          if (!htmlViewer && !cssViewer) {
            const htmlTextArea = document.createElement("textarea");
            htmlTextArea.className = "CodeMirror cm-s-hopscotch";
            const cssTextArea = document.createElement("textarea");
            cssTextArea.className = "CodeMirror cm-s-hopscotch";
            htmlSection.appendChild(htmlTextArea);
            cssSection.appendChild(cssTextArea);
            container.appendChild(btnEdit);
            htmlCodeViewer.init(htmlTextArea);
            cssCodeViewer.init(cssTextArea);

            htmlViewer = htmlCodeViewer.editor;
            cssViewer = cssCodeViewer.editor;
          }

          var InnerHtml = editor.getHtml();
          var Css = editor.getCss({ avoidProtected: true });

          modal.setContent("");
          modal.setContent(container);

          htmlCodeViewer.setContent(InnerHtml);
          cssCodeViewer.setContent(Css);
          modal.open();
          htmlViewer.refresh();
          cssViewer.refresh();
        },
      });
      cmdm.add("clear-canvas", function () {
        // eslint-disable-next-line no-restricted-globals
        // if (confirm("This will be delete entire Page. Are you Sure?")) {
        editor.DomComponents.clear();
        setTimeout(function () {
          localStorage.clear();
        }, 0);
      });

      // Start Panel Thing

      panelManager.addPanel({
        id: "panel-top",
        el: ".panel__top",
      });
      DeviceSize.add("device-tablet", "100px", {
        height: "300px",
        // At first, GrapesJS tries to localize the name by device id.
        // In case is not found, the `name` property is used (or `id` if name is missing)
        name: "Tablet 2",
        widthMedia: "810px", // the width that will be used for the CSS media
      });
      panelManager.addPanel({
        id: "basic-actions",
        el: ".panel__basic-actions",
        buttons: [
          {
            id: "export",
            className: "fa fa-download ",
            attributes: {
              title: "View Code",
            },
            command: "export-template",
            context: "export-template", // For grouping context of buttons from the same panel
          },

          {
            id: "edit",
            className: "fa fa-code",
            command: "html-edit",
            attributes: {
              title: "Edit",
            },
          },
          {
            id: "clearCanvas",
            className: "fa fa-trash",
            attributes: {
              title: "Delete All the Code",
            },
            command: "clear-canvas",
          },

          {
            id: "undo",
            className: "fa fa-undo",
            attributes: {
              title: "Undo",
            },
            command: function (e) {
              e.UndoManager.undo();
            },
          },
          {
            id: "redo",
            className: "fa fa-repeat",
            attributes: {
              title: "Redo",
            },
            command: function (e) {
              e.UndoManager.redo();
            },
          },
        ],
      });
      panelManager.addPanel({
        id: "basic-actions-2",
        el: ".panel__basic-actions-2",
        buttons: [
          {
            id: "set-device-desktop",
            command: function (e) {
              return e.setDevice("Desktop");
            },
            attributes: {
              title: "Default Desktop Size",
            },
            className: "fa fa-desktop",
            active: 1,
          },
          {
            id: "set-device-tablet",
            attributes: {
              title: "Tablet Size",
            },
            command: function (e) {
              return e.setDevice("Tablet");
            },
            className: "fa fa-tablet",
          },

          {
            id: "set-device-mobile",
            attributes: {
              title: "Mobile Size",
            },
            command: function (e) {
              return e.setDevice("Mobile portrait");
            },
            className: "fa fa-mobile",
          },
          {
            id: "preview",
            className: "fa fa-eye",
            command: "preview",
          },
        ],
      });
      panelManager.addPanel({
        id: "basic-actions-3",
        el: ".panel__basic-actions-3",
        buttons: [
          {
            id: "help",
            attributes: {
              title: "Help",
            },
            command: {
              run: function (editor) {
                let modal = editor.Modal;
                modal.open();
                modal.setTitle("User Feedback");
                modal.setContent(
                  '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSepyCqCXsf85boPWEQDuw5Nb4ax3j8U-PFXKJJb9bDdOWH9zQ/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>',
                );
              },
            },
            className: "fa fa-question",
          },
        ],
      });
    }
  });

  return (
    <>
      <div className="panel__top">
        <div className="panel__basic-actions"></div>
        <div className="panel__basic-actions-2"></div>
        <div className="panel__basic-actions-3"></div>
      </div>
    </>
  );
};

export default TopPanels;
