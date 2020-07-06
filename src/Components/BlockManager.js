import React, { useEffect } from "react";
import { isEmpty } from "lodash";
import "../Styles/BlockManager.css";

const BlockManager = ({ editor }) => {
  useEffect(() => {
    const blockManager = !isEmpty(editor) && editor.BlockManager;
    console.log(blockManager);
    if (!isEmpty(editor)) {
      blockManager.add("section", {
        id: "section",
        category: "Basic",
        label:
          "<div><p><b> Section </b></p> <i class='fa fa-square-o' aria-hidden='true'></i> </div>",
        attributes: { class: "gjs-section", title: "Section tag" },
        content:
          "<section></section>" +
          "<style> section{width: 100%; padding: 15px 0px; background-color:#ee6002;} </style>",
      });

      blockManager.add("article", {
        id: "article",
        category: "Basic",
        label:
          "<div><p><b> Article </b></p><i class='fa fa-file-text-o' aria-hidden='true'></i> </div>",
        attributes: { class: "gjs-block", title: "Article" },
        content:
          "<article> <h1> Article Title </h1> <p> Text Here </p> </article>" +
          "<style> article {width: auto; padding: 15px ; background-color:#999;} </style>",
      });

      blockManager.add("block", {
        id: "block",
        category: "Basic",
        label:
          "<div><p><b> Block </b></p> <i class='fa fa-square' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Block (div) tag" },
        content:
          "<div class='block'></div>" +
          "<style> .block {display:block; padding: 15px; background-color: #ee0290;} </style>",
      });

      blockManager.add("full-container", {
        id: "full-container",
        category: "Basic",
        label:
          "<div><p><b> Full Container </b></p> <i class='fa fa-square-o' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Full width Container" },
        content:
          "<div class='full_container'></div>" +
          "<style>.full_container{width: 100%; margin:auto; padding: 15px 0px; background-color:#d602ee;}</style>",
      });

      blockManager.add("container", {
        id: "container",
        category: "Basic",
        label:
          "<div><p><b>Container </b></p> <i class='fa fa-square-o' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Container" },
        content:
          "<div class='container'></div>" +
          "<style>.container{width: 90%; max-width: 1220px; margin-left: auto;margin-right: auto; padding: 15px; background-color: #90ee02}</style>",
      });

      blockManager.add("columns", {
        id: "columns",
        category: "Flex Box",
        label:
          "<div><p><b>columns</b></p> <i class='fa fa-columns' aria-hidden='true'></i></i>",
        attributes: { class: "gjs-block", title: "Row (Display Flex)" },
        content:
          "<div class='row'>" +
          "<div class='col'><p> column </p></div>" +
          "</div>" +
          "<style>.row{width: 100%;display:flex; flex-wrap: wrap; padding: 15px 0px; justify-content: space-between; }</style>" +
          "<style>.col {width: 100%; padding: 15px; border: 1px solid #333; text-align:center;}</style>",
      });

      blockManager.add("columns-2", {
        id: "columns-2",
        category: "Flex Box",
        label:
          "<div><p><b>2 columns</b></p> <i class='fa fa-columns' aria-hidden='true'></i></i>",
        attributes: { class: "gjs-block", title: "Row (Display Flex)" },
        content:
          "<div class='row'>" +
          "<div class='col-2'><p>column 1</p></div>" +
          "<div class='col-2'><p> column 2 </p></div>" +
          "</div>" +
          "<style>.row{width: 100%;display:flex; flex-wrap: wrap; padding: 15px 0px; justify-content: space-between; }</style>" +
          "<style>.col-2 {width: 48%; padding: 15px; border: 1px solid #333; text-align:center;}</style>",
      });

      blockManager.add("columns-3", {
        id: "columns-3",
        category: "Flex Box",
        label:
          "<div><p><b>3 columns</b></p> <i class='fa fa-columns' aria-hidden='true'></i></i>",
        attributes: { class: "gjs-block", title: "Row (Display Flex)" },
        content:
          "<div class='row'>" +
          "<div class='col-3'><p>column 1</p></div>" +
          "<div class='col-3'><p> column 2 </p></div>" +
          "<div class='col-3'><p> column 3 </p></div>" +
          "</div>" +
          "<style>.row{width: 100%;display:flex; flex-wrap: wrap; padding: 15px 0px; justify-content: space-between; }</style>" +
          "<style>.col-3 {width: 30%; padding: 15px; border: 1px solid #333; text-align:center;}</style>",
      });

      blockManager.add("columns-4", {
        id: "columns-4",
        category: "Flex Box",
        label:
          "<div><p><b>4 columns</b></p> <i class='fa fa-columns' aria-hidden='true'></i></i>",
        attributes: { class: "gjs-block", title: "Row (Display Flex)" },
        content:
          "<div class='row'>" +
          "<div class='col-4'><p>column 1</p></div>" +
          "<div class='col-4'><p> column 2 </p></div>" +
          "<div class='col-4'><p> column 3 </p></div>" +
          "<div class='col-4'><p> column 4 </p></div>" +
          "</div>" +
          "<style>.row{width: 100%;display:flex; flex-wrap: wrap; padding: 15px 0px; justify-content: space-between; }</style>" +
          "<style>.col-4 {width: 22%; padding: 15px; border: 1px solid #333; text-align:center;}</style>",
      });

      blockManager.add("columns-5", {
        id: "columns-5",
        category: "Flex Box",
        label:
          "<div><p><b>5 columns</b></p> <i class='fa fa-columns' aria-hidden='true'></i></i>",
        attributes: { class: "gjs-block", title: "Row (Display Flex)" },
        content:
          "<div class='row'>" +
          "<div class='col-5'><p>column 1</p></div>" +
          "<div class='col-5'><p> column 2 </p></div>" +
          "<div class='col-5'><p> column 3 </p></div>" +
          "<div class='col-5'><p> column 4 </p></div>" +
          "<div class='col-5'><p> column 5 </p></div>" +
          "</div>" +
          "<style>.row{width: 100%;display:flex; flex-wrap: wrap; padding: 15px 0px; justify-content: space-between; }</style>" +
          "<style>.col-5 {width: 18%; padding: 15px; border: 1px solid #333; text-align:center;}</style>",
      });

      blockManager.add("image", {
        id: "image",
        category: "Basic",
        label:
          "<div><p><b>Image</b></p> <i class='fa fa-file-image-o' aria-hidden='true'></i></div>",
        // Select the component once it's dropped
        select: true,
        // You can pass components as a JSON instead of a simple HTML string,
        // in this case we also use a defined component type `image`
        content: { type: "image" },
        // This triggers `active` event on dropped components and the `image`
        // reacts by opening the AssetManager
        activate: true,
      });

      blockManager.add("image-box", {
        id: "image-box",
        category: "Basic",
        label:
          "<div><p><b>Image Box</b></p> <i class='fa fa-picture-o' aria-hidden='true'></i></div>",
        // Select the component once it's dropped
        select: true,
        // You can pass components as a JSON instead of a simple HTML string,
        // in this case we also use a defined component type `image`
        content:
          "<div class='block'><img data-gjs-type='image' /></div>" +
          "<style> .block {display:block; padding: 15px; background-color: #ee0290;} </style>",
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
