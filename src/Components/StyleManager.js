import React, { useEffect } from "react";
import { isEmpty } from "lodash";

const StyleManager = ({ editor }) => {
  useEffect(() => {
    const styleManager = !isEmpty(editor) && editor.StyleManager;
    console.log(styleManager);
    if (!isEmpty(editor)) {
      styleManager.addSector("Common", {
        name: "Common Usage",
        buildProps: [
          "float",
          "display",
          "position",
          "top",
          "right",
          "left",
          "bottom",
        ],
        properties: [
          {
            name: "Float",
            property: "float",
            type: "radio",
            defaults: "none",
            list: [
              { value: "none", className: "fa fa-times" },
              { value: "left", className: "fa fa-align-left" },
              { value: "right", className: "fa fa-align-right" },
            ],
          },
          { property: "position", type: "select" },
        ],
      });
      styleManager.addSector("Dimension", {
        name: "Dimension",
        open: false,
        // Use built-in properties
        buildProps: ["width", "min-height", "padding"],
        // Use `properties` to define/override single property
        properties: [
          {
            // Type of the input,
            // options: integer | radio | select | color | slider | file | composite | stack
            type: "integer",
            name: "The width", // Label for the property
            property: "width", // CSS property (if buildProps contains it will be extended)
            units: ["px", "%"], // Units, available only for 'integer' types
            defaults: "auto", // Default value
            min: 0, // Min value, available only for 'integer' types
          },
        ],
      });

      styleManager.addSector("Typo", {
        name: "Typography",
        open: false,
        buildProps: [
          "font-family",
          "font-size",
          "font-weight",
          "letter-spacing",
          "color",
          "line-height",
          "text-align",
          "text-decoration",
          "text-shadow",
        ],
        properties: [
          { name: "Font", property: "font-family" },
          { name: "Weight", property: "font-weight" },
          { name: "Font color", property: "color" },
          {
            property: "text-align",
            type: "radio",
            defaults: "left",
            list: [
              { value: "left", name: "Left", className: "fa fa-align-left" },
              {
                value: "center",
                name: "Center",
                className: "fa fa-align-center",
              },
              {
                value: "right",
                name: "Right",
                className: "fa fa-align-right",
              },
              {
                value: "justify",
                name: "Justify",
                className: "fa fa-align-justify",
              },
            ],
          },
          {
            property: "text-decoration",
            type: "radio",
            defaults: "none",
            list: [
              { value: "none", name: "None", className: "fa fa-times" },
              {
                value: "underline",
                name: "underline",
                className: "fa fa-underline",
              },
              {
                value: "line-through",
                name: "Line-through",
                className: "fa fa-strikethrough",
              },
            ],
          },
          {
            property: "text-shadow",
            properties: [
              { name: "X position", property: "text-shadow-h" },
              { name: "Y position", property: "text-shadow-v" },
              { name: "Blur", property: "text-shadow-blur" },
              { name: "Color", property: "text-shadow-color" },
            ],
          },
        ],
      });
      styleManager.addSector("BorderDecorations", {
        name: "Border Decorations",
        open: false,
        buildProps: [
          "opacity",
          "border-radius",
          "border",
          "box-shadow",
          "background-color",
        ],
        properties: [
          {
            type: "slider",
            property: "opacity",
            defaults: 1,
            step: 0.01,
            max: 1,
            min: 0,
          },
          {
            property: "border-radius",
            properties: [
              { name: "Top", property: "border-top-left-radius" },
              { name: "Right", property: "border-top-right-radius" },
              { name: "Bottom", property: "border-bottom-left-radius" },
              { name: "Left", property: "border-bottom-right-radius" },
            ],
          },
          {
            property: "box-shadow",
            properties: [
              { name: "X position", property: "box-shadow-h" },
              { name: "Y position", property: "box-shadow-v" },
              { name: "Blur", property: "box-shadow-blur" },
              { name: "Spread", property: "box-shadow-spread" },
              { name: "Color", property: "box-shadow-color" },
              { name: "Shadow type", property: "box-shadow-type" },
            ],
          },
          // {
          //   id: "background-color",
          //   property: "background-color",
          //   type: "background-color",
          // },
        ],
      });
      styleManager.addSector("Advance", {
        name: "Advance",
        open: false,
        buildProps: ["transition", "perspective", "transform"],
        properties: [
          {
            property: "transition",
            properties: [
              { name: "Property", property: "transition-property" },
              { name: "Duration", property: "transition-duration" },
              { name: "Easing", property: "transition-timing-function" },
            ],
          },
          {
            property: "transform",
            properties: [
              { name: "Rotate X", property: "transform-rotate-x" },
              { name: "Rotate Y", property: "transform-rotate-y" },
              { name: "Rotate Z", property: "transform-rotate-z" },
              { name: "Scale X", property: "transform-scale-x" },
              { name: "Scale Y", property: "transform-scale-y" },
              { name: "Scale Z", property: "transform-scale-z" },
            ],
          },
        ],
      });
      styleManager.addSector("Extra", {
        name: "Extra",
        open: false,
        buildProps: ["background-color", "box-shadow", "custom-prop"],
        properties: [
          {
            id: "custom-prop",
            name: "Custom Label",
            property: "font-size",
            type: "select",
            defaults: "32px",
            // List of options, available only for 'select' and 'radio'  types
            options: [
              { value: "12px", name: "Tiny" },
              { value: "18px", name: "Medium" },
              { value: "32px", name: "Big" },
            ],
          },
        ],
      });
    }
  }, [editor]);
  return (
    <>
      <div className="Common"></div>
      <div className="Dimension"></div>
      <div className="Typo"></div>
      <div className="BorderDecorations"></div>
      <div className="Extra"></div>
    </>
  );
};

export default StyleManager;
