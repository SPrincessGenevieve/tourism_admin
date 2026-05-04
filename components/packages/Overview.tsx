"use client"

import React from "react"
import { useEditor, EditorContent, useEditorState } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import { Button } from "../ui/button"
import TextAlign from "@tiptap/extension-text-align"
import { TextStyle } from "@tiptap/extension-text-style"
import { Extension } from "@tiptap/core"
import { TextStyleKit } from "@tiptap/extension-text-style"
import { menuBarStateSelector } from "../menuBarState"
import { MenuBar } from "./MenuBar"
import { Label } from "../ui/label"

/* ---------------- FONT SIZE EXTENSION ---------------- */
const FontSize = Extension.create({
  name: "fontSize",

  addGlobalAttributes() {
    return [
      {
        types: ["textStyle"],
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (el) => el.style.fontSize,
            renderHTML: (attrs) => {
              if (!attrs.fontSize) return {}
              return {
                style: `font-size: ${attrs.fontSize}`,
              }
            },
          },
        },
      },
    ]
  },
})

/* ---------------- EXTENSIONS ---------------- */
const extensions = [
  StarterKit,
  TextStyle,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
]

export default function Overview() {
  const editor = useEditor({
    extensions,
    content: "<p></p>",
    immediatelyRender: false,
    autofocus: true,
  })

  return (
    <div className="flex w-full flex-col gap-4 px-4">
      <Label>Description *</Label>
      <div className="rounded border">
        {/* Toolbar */}
        <div className="flex overflow-hidden rounded-t-2xl border-x border-t border-gray-300 bg-gray-50">
          <MenuBar editor={editor}></MenuBar>
        </div>

        {/* Editor */}
        <EditorContent
          editor={editor}
          className="editor prose prose-sm max-w-none cursor-text text-black"
        />
      </div>
    </div>
  )
}
