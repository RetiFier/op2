import React, { useEffect } from "react";
import { isEmpty } from "lodash";
import "../Styles/BlockManager.css";

const BlockManager = ({ editor }) => {
  useEffect(() => {
    const blockManager = !isEmpty(editor) && editor.BlockManager;

    if (!isEmpty(editor)) {
      // Start of Typography Component //
      blockManager.add("header1", {
        id: "header1",
        category: "Typography",
        label:
          "<div><p><b>Header 1</b></p> <i class='fa fa-font' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Header 1" },
        content: "<h1>h1: heading</h1>",
      });

      blockManager.add("header2", {
        id: "header2",
        category: "Typography",
        label:
          "<div><p><b>Header 2</b></p> <i class='fa fa-font' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Header 2" },
        content: "<h2>h2: heading</h2>",
      });

      blockManager.add("header3", {
        id: "header3",
        category: "Typography",
        label:
          "<div><p><b>Header 3</b></p> <i class='fa fa-font' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Header 2" },
        content: "<h3>h3: heading</h3>",
      });

      blockManager.add("header4", {
        id: "header4",
        category: "Typography",
        label:
          "<div><p><b>Header 4</b></p> <i class='fa fa-font' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Header 4" },
        content: "<h4>h4: heading</h4>",
      });

      blockManager.add("header5", {
        id: "header5",
        category: "Typography",
        label:
          "<div><p><b>Header 5</b></p> <i class='fa fa-font' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Header 5" },
        content: "<h4>h5: heading</h4>",
      });

      blockManager.add("header6", {
        id: "header6",
        category: "Typography",
        label:
          "<div><p><b>Header 6</b></p> <i class='fa fa-font' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Header 6" },
        content: "<h6>h6: heading</h6>",
      });

      blockManager.add("paragraph", {
        id: "paragraph",
        category: "Typography",
        label:
          "<div><p><b>Paragraph</b></p> <i class='fa fa-font' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Paragraph" },
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>",
      });

      blockManager.add("unorder_list", {
        id: "unorder_list",
        category: "Typography",
        label:
          "<div><p><b>Unorder List</b></p> <i class='fa fa-list-ul' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Unorder List" },
        content:
          "<ul><li>List</li><li>List</li><li>List</li><li>List</li><li>List</li></ul>",
      });

      blockManager.add("order_list", {
        id: "order_list",
        category: "Typography",
        label:
          "<div><p><b>Order List</b></p> <i class='fa fa-list-ol' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Order List" },
        content:
          "<ol><li>List</li><li>List</li><li>List</li><li>List</li><li>List</li></ol>",
      });
      // End of Typography Component //

      // Start Of Basic Component //

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

      blockManager.add("input", {
        id: "input",
        category: "Basic",
        label:
          "<div><p><b> input </b></p> <i class='fa fa-text-width' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "input" },
        content: "<input href='' />",
      });

      blockManager.add("card", {
        id: "card",
        category: "Basic",
        label:
          "<div><p><b> Card </b></p> <i class='fa fa-id-card-o' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Card" },
        content:
          "<div class='card'>" +
          "<img data-gjs-type='image' />" +
          "<div class='card-body'><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>" +
          "<style>.card {width: 250px;} .card img{width: 100%;} </style>",
      });

      blockManager.add("dropdown", {
        id: "dropdown",
        category: "Basic",
        label:
          "<div><p><b> Dropdown </b></p> <i class='fa fa-caret-square-o-down' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Card" },
        content:
          '<div class="dropdown">' +
          '<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
          "<p>Dropdown</p>" +
          "</button>" +
          '<div class="dropdown-menu" aria-labelledby="dropdownMenu">' +
          '<button class="dropdown-item" type="button"><p>Dropdown list</p></button>' +
          '<button class="dropdown-item" type="button"><p>Dropdown list</p></button>' +
          '<button class="dropdown-item" type="button"><p>Dropdown list</p></button>' +
          "</div>",
      });

      blockManager.add("form_iput", {
        id: "form_input",
        category: "Basic",
        label:
          "<div><p><b>Form Input</b></p> <i class='fa fa-keyboard-o' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Form Input" },
        content:
          "<form>" +
          '<div class="form-group"><label>Input Box</label><input type="text" class="form-control" aria-describedby="emailHelp"></div>' +
          "</form>",
      });

      blockManager.add("form", {
        id: "form_input",
        category: "Basic",
        label:
          "<div><p><b>Form</b></p> <i class='fa fa-list-alt' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Form Input" },
        content:
          "<form>" +
          '<div class="form-group"><label>Input Box</label><input type="text" class="form-control" aria-describedby="emailHelp"></div>' +
          '<div class="form-group">' +
          '<label for="exampleFormControlSelect1">Example select</label>' +
          '<select class="form-control" id="exampleFormControlSelect1">' +
          "<option>Option list</option>" +
          "<option>Option list</option>" +
          "<option>Option list</option>" +
          "<option>Option list</option>" +
          "<option>Option list</option>" +
          "</select>" +
          "</div>" +
          '<div class="form-group">' +
          '<label for="formControlRange">Range input</label>' +
          '<input type="range" class="form-control-range" id="formControlRange">' +
          "</div>" +
          '<div class="form-check">' +
          '<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">' +
          '<label class="form-check-label" for="defaultCheck1">' +
          "<p>checkbox</p>" +
          "</label>" +
          "</div>" +
          '<div class="form-check">' +
          '<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">' +
          '<label class="form-check-label" for="exampleRadios2">' +
          "<p>radio</p>" +
          "</label>" +
          "</div>" +
          "<button type='submit' class='btn btn-primary btn-lg btn-block'>Submit</button>" +
          "<button type='reset' class='btn btn-secondary btn-lg btn-block'>Reset</button>" +
          "</form>" +
          "<style>form {padding: 15px;} </style>",
      });

      // End Of Basic Component //

      // Start Of Layout Component //

      blockManager.add("full-container", {
        id: "full-container",
        category: "Layout",
        label:
          "<div><p><b> Full Container </b></p> <i class='fa fa-square-o' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Full width Container" },
        content:
          "<div class='container-fluid'></div>" +
          "<style>.container-fluid{padding-top: 15px; padding-bottom: 15px; background-color:#01b4bc;}</style>",
      });

      blockManager.add("container", {
        id: "container",
        category: "Layout",
        label:
          "<div><p><b>Container </b></p> <i class='fa fa-square-o' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Container" },
        content:
          "<div class='container'></div>" +
          "<style>.container{padding-top:15px; padding-bottom:15px; background-color: #90ee02}</style>",
      });

      blockManager.add("row", {
        id: "row",
        category: "Layout",
        label:
          "<div><p><b>Row & Col </b></p> <i class='fa fa-columns' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Row" },
        content:
          "<div class='container'><div class='row'><div class='col'></div><div class='col'></div></div></div>" +
          "<style>.container{padding-top:15px; padding-bottom:15px; background-color: #90ee02}</style>" +
          "<style>.row, .col{padding:15px;border: 1px dashed #333;}</style>",
      });

      blockManager.add("column_half", {
        id: "column_half",
        category: "Layout",
        label:
          "<div><p><b>Column <br> Half</b></p> <i class='fa fa-columns' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Column Half" },
        content:
          "<div class='container'><div class='row'><div class='col col-sm-6'></div><div class='col col-sm-6'></div></div></div>" +
          "<style>.container{padding-top:15px; padding-bottom:15px; background-color: #90ee02}</style>" +
          "<style>.row, .col{padding:15px;border: 1px dashed #333;}</style>",
      });

      blockManager.add("column_4/12", {
        id: "column_4/12",
        category: "Layout",
        label:
          "<div><p><b>Column </br>4/12</b></p> <i class='fa fa-columns' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Column 4/12" },
        content:
          "<div class='container'><div class='row'><div class='col col-sm-4'></div><div class='col col-sm-4'></div><div class='col col-sm-4'></div></div></div>" +
          "<style>.container{padding-top:15px; padding-bottom:15px; background-color: #90ee02}</style>" +
          "<style>.row, .col{padding:15px;border: 1px dashed #333;}</style>",
      });

      blockManager.add("column_3/12", {
        id: "column_3/12",
        category: "Layout",
        label:
          "<div><p><b>Column </br>3/12</b></p> <i class='fa fa-columns' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Column 3/12" },
        content:
          "<div class='container'><div class='row'><div class='col col-sm-3'></div><div class='col col-sm-3'></div><div class='col col-sm-3'></div><div class='col col-sm-3'></div></div></div>" +
          "<style>.container{padding-top:15px; padding-bottom:15px; background-color: #90ee02}</style>" +
          "<style>.row, .col{padding:15px;border: 1px dashed #333;}</style>",
      });

      blockManager.add("column_4/12_8/12", {
        id: "column_4/12_8/12",
        category: "Layout",
        label:
          "<div><p><b>Column </br> 4/12 8/12</b></p> <i class='fa fa-columns' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Row" },
        content:
          "<div class='container'><div class='row'><div class='col col-sm-4'></div><div class='col col-sm-8'></div></div></div>" +
          "<style>.container{padding-top:15px; padding-bottom:15px; background-color: #90ee02}</style>" +
          "<style>.row, .col{padding:15px;border: 1px dashed #333;}</style>",
      });

      blockManager.add("column_3/12_6/12_3/12", {
        id: "column_3/12_6/12_3/12",
        category: "Layout",
        label:
          "<div><p><b>Column </br>3/12 6/12 3/12</b></p> <i class='fa fa-columns' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Column 3/12 6/12 3/12" },
        content:
          "<div class='container'><div class='row'><div class='col col-sm-3'></div><div class='col col-sm-6'></div><div class='col col-sm-3'></div></div>" +
          "<style>.container{padding-top:15px; padding-bottom:15px; background-color: #90ee02}</style>" +
          "<style>.row, .col{padding:15px;border: 1px dashed #333;}</style>",
      });

      blockManager.add("column_2/12_8/12_2/12", {
        id: "column_2/12_8/12_2/12",
        category: "Layout",
        label:
          "<div><p><b>Column </br>2/12 8/12 2/12</b></p> <i class='fa fa-columns' aria-hidden='true'></i>",
        attributes: { class: "gjs-block", title: "Column 2/12 8/12 2/12" },
        content:
          "<div class='container'><div class='row'><div class='col col-sm-2'></div><div class='col col-sm-8'></div><div class='col col-sm-2'></div></div>" +
          "<style>.container{padding-top:15px; padding-bottom:15px; background-color: #90ee02}</style>" +
          "<style>.row, .col{padding:15px;border: 1px dashed #333;}</style>",
      });

      // End Of Layout Component //
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
