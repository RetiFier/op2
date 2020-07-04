import React, { useEffect, useState, useLayoutEffect } from "react";
import "react-tabs/style/react-tabs.css";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import "../Styles/Main.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaPalette, FaBuffer, FaCode } from "react-icons/fa";
import { AiOutlineBlock } from "react-icons/ai";
import TopPanels from "../Components/TopPanels";
import StyleManager from "../Components/StyleManager";
import BlockManager from "../Components/BlockManager";
import "../Styles/CodeManager.css";
import thePlugin from "grapesjs-plugin-export";
import customCode from "grapesjs-custom-code";
import gradient from "grapesjs-style-gradient";
import "grapick/dist/grapick.min.css";
import tUIImageEditor from "grapesjs-tui-image-editor";

const Home = () => {
  const [editor, setEditor] = useState();

  useLayoutEffect(() => {
    const grapesEditor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: "#gjs",
      allowScripts: 1,
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // canvas: {
      //   scripts: [
      //     "https://cdn.ckeditor.com/ckeditor5/12.4.0/classic/ckeditor.js",
      //   ],
      // },
      plugins: [thePlugin, customCode, gradient, tUIImageEditor],
      pluginsOpts: {
        [thePlugin]: {
          /* options */
        },
        [gradient]: {
          colorPicker: "default",
          grapickOpts: {
            min: 1,
            max: 99,
          },
          [tUIImageEditor]: {
            config: {
              includeUI: {
                initMenu: "filter",
              },
            },
          },
        },
      },
      // Size of the editor
      height: window.screen.height,
      width: "100%",
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
              tc: 0,
              cr: 0,
              cl: 1,
              bc: 0,
              // tc: 0, // Top handler
              // cl: 1, // Left handler
              // cr: 0, // Right handler
              // bc: 0, // Bottom handler
              // Being a flex child we need to change `flex-basis` property
              // instead of the `width` (default)
              keyWidth: "flex-basis",
            },
          },
          // {
          //   id: "views-container",
          //   el: ".imp-mdl-content",
          // },
          // {
          //   id: "code",
          //   el: ".panel__left",
          //   // Make the panel resizable
          //   resizable: {
          //     maxDim: 350,
          //     minDim: 200,
          //     tc: 0,
          //     cr: 1,
          //     bc: 0,
          //     keyWidth: "flex-basis",
          //   },
          // },
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

      // selectorManager: {
      //   appendTo: ".code",
      // }
      // deviceManager: {
      //   appendTo: ".panel",
      // },
    });

    setEditor(grapesEditor);
    // grapesEditor.on("canvas:dragenter", () => setTest(true));
    // console.log("test");
  }, []);

  return (
    <>
      <TopPanels editor={editor} />

      <div className="editor-row">
        {/* <div className="column panel__left">
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
        </div> */}
        <div className="column editor-canvas">
          <div id="gjs">
            <h1>Hello World From No Where</h1>
          </div>
        </div>
        <div className="column panel__right">
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
