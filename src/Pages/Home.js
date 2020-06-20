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
      },
      blockManager: {
        appendTo: ".blocks-container",
      },
      // deviceManager: {
      //   appendTo: ".panel",
      // },
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
