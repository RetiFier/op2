import React, { useEffect } from "react";
import "../Styles/TopPanel.css";
import { isEmpty } from "lodash";
const TopPanels = ({ editor }) => {
  useEffect(() => {
    const panelManager = !isEmpty(editor) && editor.Panels;
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
            className: "btn-open-export",
            label: "Export",
            command: "export-template",
            context: "export-template", // For grouping context of buttons from the same panel
          },
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
