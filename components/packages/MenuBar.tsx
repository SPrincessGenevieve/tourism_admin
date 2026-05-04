"use client"

import type { Editor } from "@tiptap/core"
import { useEditorState } from "@tiptap/react"
import TextAlign from "@tiptap/extension-text-align"
import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconBlockquote,
  IconBold,
  IconItalic,
  IconLayoutDistributeHorizontal,
  IconList,
  IconListNumbers,
  IconStrikethrough,
  IconTextDecrease,
  IconTextIncrease,
  IconUnderline,
} from "@tabler/icons-react"

import { menuBarStateSelector } from "../menuBarState"
import { Button } from "../ui/button"

/* ---------------- TOOLBAR ---------------- */
const btnList = [
  { id: "increase", icon: IconTextIncrease },
  { id: "decrease", icon: IconTextDecrease },

  { id: "bold", icon: IconBold },
  { id: "italic", icon: IconItalic },
  { id: "underline", icon: IconUnderline },
  { id: "strike", icon: IconStrikethrough },

  { id: "left", icon: IconAlignLeft },
  { id: "center", icon: IconAlignCenter },
  { id: "right", icon: IconAlignRight },
  { id: "justify", icon: IconAlignJustified },

  { id: "bullet_list", icon: IconList },
  { id: "order_list", icon: IconListNumbers },

  { id: "block_quote", icon: IconBlockquote },
  { id: "horizontal_rule", icon: IconLayoutDistributeHorizontal },
]

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null
  TextAlign.configure({
    types: ["heading", "paragraph"],
  })
  const editorState = useEditorState({
    editor,
    selector: menuBarStateSelector,
  })

  /* ---------------- ACTION HANDLER ---------------- */
  const handleAction = (id: string) => {
    const chain = editor.chain().focus()

    switch (id) {
      case "bold":
        chain.toggleBold().run()
        break

      case "italic":
        chain.toggleItalic().run()
        break

      case "underline":
        chain.toggleUnderline().run()
        break

      case "strike":
        chain.toggleStrike().run()
        break

      case "bullet_list":
        chain.toggleBulletList().run()
        break

      case "order_list":
        chain.toggleOrderedList().run()
        break

      case "block_quote":
        chain.toggleBlockquote().run()
        break

      case "horizontal_rule":
        chain.setHorizontalRule().run()
        break

      case "left":
        editor.chain().focus().setTextAlign("left").run()
        break

      case "center":
        editor.chain().focus().setTextAlign("center").run()
        break

      case "right":
        editor.chain().focus().setTextAlign("right").run()
        break

      case "justify":
        editor.chain().focus().setTextAlign("justify").run()
        break

      case "increase": {
        const current = editor.getAttributes("textStyle").fontSize || "16px"
        const size = parseInt(current)
        editor
          .chain()
          .focus()
          .setMark("textStyle", { fontSize: `${Math.min(size + 2, 50)}px` })
          .run()
        break
      }

      case "decrease": {
        const current = editor.getAttributes("textStyle").fontSize || "16px"
        const size = parseInt(current)
        editor
          .chain()
          .focus()
          .setMark("textStyle", { fontSize: `${Math.max(size - 2, 6)}px` })
          .run()
        break
      }

      default:
        break
    }
  }

  /* ---------------- UI ---------------- */
  return (
    <div className="flex overflow-hidden                                ">
      {btnList.map((item, i) => {
        const Icon = item.icon

        const isActive =
          (item.id === "bold" && editorState.isBold) ||
          (item.id === "italic" && editorState.isItalic) ||
          (item.id === "strike" && editorState.isStrike) ||
          (item.id === "underline" && editorState.isUnderline) ||
          (item.id === "bullet_list" && editorState.isBulletList) ||
          (item.id === "order_list" && editorState.isOrderedList) ||
          (item.id === "left" && editorState.isAlignLeft) ||
          (item.id === "center" && editorState.isAlignCenter) ||
          (item.id === "right" && editorState.isAlignRight) ||
          (item.id === "justify" && editorState.isAlignJustify) ||
          (item.id === "block_quote" && editorState.isBlockquote)

        return (
          <div key={item.id} className="group">
            <Button
              onClick={() => handleAction(item.id)}
              disabled={
                (item.id === "bold" && !editorState.canBold) ||
                (item.id === "italic" && !editorState.canItalic) ||
                (item.id === "strike" && !editorState.canStrike) ||
                (item.id === "underline" && !editorState.canUnderline)
              }
              className={`rounded-none bg-transparent text-gray-500 hover:bg-primary-blue-400 hover:text-white`}
            >
              <Icon />
            </Button>
          </div>
        )
      })}
    </div>
  )
}
