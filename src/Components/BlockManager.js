import React, { useEffect } from "react";
import { isEmpty } from "lodash";

const BlockManager = ({ editor }) => {
  useEffect(() => {
    const blockManager = !isEmpty(editor) && editor.BlockManager;
    console.log(blockManager);
    if (!isEmpty(editor)) {
      blockManager.add("section", {
        id: "section", // id is mandatory
        label: "<b>Section</b>", // You can use HTML/SVG inside labels
        attributes: { class: "gjs-block-section" },
        content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
      });
      blockManager.add("text", {
        id: "text",
        label: "Text",
        content: '<div data-gjs-type="text">Insert your text here</div>',
      });
      blockManager.add("image", {
        id: "image",
        label: "Image",
        // Select the component once it's dropped
        select: true,
        // You can pass components as a JSON instead of a simple HTML string,
        // in this case we also use a defined component type `image`
        content: { type: "image" },
        // This triggers `active` event on dropped components and the `image`
        // reacts by opening the AssetManager
        activate: true,
      });
    }
  }, [editor]);
  return (
    <>
      {/* <div className="section" />
      <div className="text" />
      <div className="image" /> */}
    </>
  );
};

export default BlockManager;
