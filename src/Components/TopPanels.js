import React, { useEffect } from "react";
import "../Styles/TopPanel.css";
import { isEmpty } from "lodash";
const TopPanels = ({ editor }) => {
  useEffect(() => {
    const panelManager = !isEmpty(editor) && editor.Panels;
    const DeviceSize = !isEmpty(editor) && editor.DeviceManager;

    if (!isEmpty(editor)) {
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
            className: "fa fa-download",
            command: "export-template",
            context: "export-template", // For grouping context of buttons from the same panel
          },
          {
            id: "set-device-desktop",
            command: function (e) {
              return e.setDevice("Desktop");
            },
            className: "fa fa-desktop",
            active: 1,
          },
          {
            id: "set-device-tablet",
            command: function (e) {
              return e.setDevice("Tablet");
            },
            className: "fa fa-tablet",
          },
          {
            id: "set-device-tablet2",
            command: function (e) {
              return e.setDevice("Tablet 2");
            },
            className: "fa fa-tablet",
          },
          {
            id: "set-device-mobile",
            command: function (e) {
              return e.setDevice("Mobile portrait");
            },
            className: "fa fa-mobile",
          },
          {
            id: "clear",
            className: "fa fa-trash",
            command: function (e) {
              if (window.confirm("Are you sure to clean")) {
                console.log(e);
                e.DomComponents.clear();
                setTimeout(function () {
                  localStorage.clear();
                }, 0);
              }
            },
          },
          {
            id: "preview",
            className: "fa fa-eye",
            command: "preview",
          },
          {
            id: "undo",
            className: "fa fa-undo",
            command: function (e) {
              console.log(e);
              e.UndoManager.undo();
            },
          },
          {
            id: "redo",
            className: "fa fa-repeat",
            command: function (e) {
              e.UndoManager.redo();
            },
          },
          // {
          //   id: "import",
          //   className: "fa fa-cloud-upload",
          //   command: function (e) {
          //     return e.runCommand(r.cmdImport);
          //   },
          // },
        ],
      });
    }
  }, [editor]);

  return (
    <>
      <div className="panel__top">
        <div className="panel__basic-actions"></div>
      </div>
    </>
  );
};

export default TopPanels;
