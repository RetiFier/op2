import React, { useEffect, useState, useLayoutEffect } from "react";
import "react-tabs/style/react-tabs.css";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import "../Styles/Main.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaPalette, FaBuffer } from "react-icons/fa";
import { AiOutlineBlock } from "react-icons/ai";
import TopPanels from "../Components/TopPanels";
import StyleManager from "../Components/StyleManager";
import BlockManager from "../Components/BlockManager";

const Home = () => {
  const [editor, setEditor] = useState();
  useEffect(() => {
    const grapesEditor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: "#gjs",
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: window.screen.height,
      width: "auto",
      // Disable the storage manager for the moment
      storageManager: false,
      // Avoid any default panel
      layerManager: {
        appendTo: ".layers-container",
      },
      // We define a default panel as a sidebar to contain layers
      panels: {
        defaults: [
          {
            id: "layers",
            el: ".panel__right",
            // Make the panel resizable
            resizable: {
              maxDim: 350,
              minDim: 200,
              tc: 0, // Top handler
              cl: 1, // Left handler
              cr: 0, // Right handler
              bc: 0, // Bottom handler
              // Being a flex child we need to change `flex-basis` property
              // instead of the `width` (default)
              keyWidth: "flex-basis",
            },
          },
        ],
      },
      selectorManager: {
        appendTo: ".styles-container",
      },
      styleManager: {
        appendTo: ".styles-container",
        // sectors: [
        //   {
        //     name: "Dimension",
        //     open: false,
        //     // Use built-in properties
        //     buildProps: ["width", "min-height", "padding"],
        //     // Use `properties` to define/override single property
        //     properties: [
        //       {
        //         // Type of the input,
        //         // options: integer | radio | select | color | slider | file | composite | stack
        //         type: "integer",
        //         name: "The width", // Label for the property
        //         property: "width", // CSS property (if buildProps contains it will be extended)
        //         units: ["px", "%"], // Units, available only for 'integer' types
        //         defaults: "auto", // Default value
        //         min: 0, // Min value, available only for 'integer' types
        //       },
        //     ],
        //   },
        //   {
        //     name: "Extra",
        //     open: false,
        //     buildProps: ["background-color", "box-shadow", "custom-prop"],
        //     properties: [
        //       {
        //         id: "custom-prop",
        //         name: "Custom Label",
        //         property: "font-size",
        //         type: "select",
        //         defaults: "32px",
        //         // List of options, available only for 'select' and 'radio'  types
        //         options: [
        //           { value: "12px", name: "Tiny" },
        //           { value: "18px", name: "Medium" },
        //           { value: "32px", name: "Big" },
        //         ],
        //       },
        //     ],
        //   },
        // ],
      },
      blockManager: {
        appendTo: ".blocks-container",
        // blocks: [
        //   {
        //     id: "section", // id is mandatory
        //     label: "<b>Section</b>", // You can use HTML/SVG inside labels
        //     attributes: { class: "gjs-block-section" },
        //     content: `<section>
        //       <h1>This is a simple title</h1>
        //       <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        //     </section>`,
        //   },
        //   {
        //     id: "text",
        //     label: "Text",
        //     content: '<div data-gjs-type="text">Insert your text here</div>',
        //   },
        //   {
        //     id: "image",
        //     label: "Image",
        //     // Select the component once it's dropped
        //     select: true,
        //     // You can pass components as a JSON instead of a simple HTML string,
        //     // in this case we also use a defined component type `image`
        //     content: { type: "image" },
        //     // This triggers `active` event on dropped components and the `image`
        //     // reacts by opening the AssetManager
        //     activate: true,
        //   },
        // ],
      },
    });

    setEditor(grapesEditor);
  }, []);

  return (
    <>
      <TopPanels editor={editor} />
      <div className="editor-row">
        <div className="editor-canvas">
          <div id="gjs">
            <h1>Hello World From No Where</h1>
          </div>
        </div>
        <div className="panel__right">
          <Tabs
            forceRenderTabPanel
            defaultIndex={1}
            style={{ overflow: "auto", height: "calc(100vh - 50px)" }}
          >
            <TabList>
              <Tab>
                <FaPalette />
              </Tab>
              <Tab>
                <FaBuffer />
              </Tab>
              <Tab>
                <AiOutlineBlock />
              </Tab>
            </TabList>
            <TabPanel>
              <div className="styles-container"></div>
              <StyleManager editor={editor} />
            </TabPanel>
            <TabPanel>
              <div className="layers-container"></div>
            </TabPanel>
            <TabPanel>
              <div className="blocks-container"></div>
              <BlockManager editor={editor} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Home;
