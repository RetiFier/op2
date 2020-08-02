import React, { useEffect, useState, useLayoutEffect } from "react";
import "react-tabs/style/react-tabs.css";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import "../Styles/Main.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaPalette, FaBuffer, FaCogs } from "react-icons/fa";
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
import gjsForms from "grapesjs-plugin-forms";

const Home = () => {
  const [editor, setEditor] = useState();

  useLayoutEffect(() => {
    const grapesEditor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: "#gjs",
      allowScripts: 1,
      draggable: true,

      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      canvas: {
        styles: [
          "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        ],
        scripts: [
          "https://code.jquery.com/jquery-3.5.1.slim.min.js",
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
          "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",
        ],
      },
      storageManager: {
        id: "gjs", // Prefix identifier that will be used on parameters
        type: "local", // Type of the storage
        autosave: true, // Store data automatically
        autoload: true, // Autoload stored data on init
        stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
      },
      plugins: [thePlugin, customCode, gradient, tUIImageEditor],
      pluginsOpts: {
        [thePlugin]: {
          /* options */
          root: {
            css: {
              "style.css": (ed) => ed.getCss(),
            },

            "index.html": (ed) =>
              `<!doctype html>
          <html lang="en">
          <head>
          <meta charset="utf-8"> 
          <meta name="description" content="Free Prototyping Tool"> <meta name="keywords" > 
          <meta name="author" content="One Page Prototyping Tool"> 
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
          <link rel="stylesheet" href="./css/style.css">

          </head>
          <body>${ed.getHtml()}</body>
          </html>
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
`,
          },
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
          [gjsForms]: {
            //config here
          },
        },
      },

      // Size of the editor
      height: window.screen.height,
      width: "100%",
      // Disable the storage manager for the moment
      // storageManager: true,
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
        clearProperties: true,
        appendTo: ".styles-container",
      },
      blockManager: {
        appendTo: ".blocks-container",
      },
      traitManager: {
        appendTo: ".traits-container",
      },

      // selectorManager: {
      //   appendTo: ".code",
      // }
      // deviceManager: {
      //   appendTo: ".panel",
      // },
    });
    console.log(grapesEditor && grapesEditor.StyleManager.getSector("Setting"));
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
            <div className="text-center m-3 p-3">
              <h1>Welcome form OP2</h1>
            </div>
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
                <FaCogs />
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
              <div className="traits-container"></div>
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
