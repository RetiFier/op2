import React, { useEffect } from "react";
import "../Styles/TopPanel.css";
import { isEmpty } from "lodash";
const TopPanels = ({ editor }) => {
  useEffect(() => {
    const panelManager = !isEmpty(editor) && editor.Panels;
    const DeviceSize = !isEmpty(editor) && editor.Commands;
    console.log(panelManager);
    if (!isEmpty(editor)) {
      panelManager.addPanel({
        id: "panel-top",
        el: ".panel__top",
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
        ],
      });
      DeviceSize.add("device-desktop", {
        run: function (ed) {
          ed.setDevice("Desktop");
        },
        stop: function () {},
      });
      DeviceSize.add("device-tablet", {
        run: function (ed) {
          ed.setDevice("Tablet");
        },
        stop: function () {},
      });
      DeviceSize.add("device-mobile", {
        run: function (ed) {
          ed.setDevice("Mobile portrait");
        },
        stop: function () {},
      });
    }
  }, [editor]);

  return (
    <>
      <div className="panel__top">
        <div className="panel__basic-actions"></div>
        <div className="device-desktop"></div>
        <div className="device-tablet"></div>
        <div className="device-mobile"></div>
      </div>
    </>
  );
};

export default TopPanels;
