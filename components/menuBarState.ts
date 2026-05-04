import { Editor, EditorStateSnapshot } from "@tiptap/react"

export type MenuBarState = {
  isBold: boolean
  isItalic: boolean
  isStrike: boolean
  isCode: boolean
  isUnderline: boolean
  canUnderline: boolean
  canBold: boolean
  canItalic: boolean
  canStrike: boolean
  canCode: boolean
  canClearMarks: boolean
  isAlignLeft: boolean
  isAlignCenter: boolean
  isAlignRight: boolean
  isAlignJustify: boolean
  isParagraph: boolean
  isHeading1: boolean
  isHeading2: boolean
  isHeading3: boolean
  isHeading4: boolean
  isHeading5: boolean
  isHeading6: boolean

  isBulletList: boolean
  isOrderedList: boolean
  isCodeBlock: boolean
  isBlockquote: boolean

  canUndo: boolean
  canRedo: boolean
}

export function menuBarStateSelector(
  ctx: EditorStateSnapshot<Editor>
): MenuBarState {
  const editor = ctx.editor

  return {
    // TEXT
    isBold: editor.isActive("bold"),
    isItalic: editor.isActive("italic"),
    isStrike: editor.isActive("strike"),
    isCode: editor.isActive("code"),
    isUnderline: editor.isActive("underline"),
    canUnderline: editor.can().chain().toggleUnderline().run(),
    canBold: editor.can().chain().toggleBold().run(),
    canItalic: editor.can().chain().toggleItalic().run(),
    canStrike: editor.can().chain().toggleStrike().run(),
    canCode: editor.can().chain().toggleCode().run(),
    canClearMarks: editor.can().chain().unsetAllMarks().run(),
    isAlignLeft: editor.isActive({ textAlign: "left" }),
    isAlignCenter: editor.isActive({ textAlign: "center" }),
    isAlignRight: editor.isActive({ textAlign: "right" }),
    isAlignJustify: editor.isActive({ textAlign: "justify" }),
    // BLOCKS
    isParagraph: editor.isActive("paragraph"),
    isHeading1: editor.isActive("heading", { level: 1 }),
    isHeading2: editor.isActive("heading", { level: 2 }),
    isHeading3: editor.isActive("heading", { level: 3 }),
    isHeading4: editor.isActive("heading", { level: 4 }),
    isHeading5: editor.isActive("heading", { level: 5 }),
    isHeading6: editor.isActive("heading", { level: 6 }),

    // LISTS
    isBulletList: editor.isActive("bulletList"),
    isOrderedList: editor.isActive("orderedList"),
    isCodeBlock: editor.isActive("codeBlock"),
    isBlockquote: editor.isActive("blockquote"),

    // HISTORY
    canUndo: editor.can().chain().undo().run(),
    canRedo: editor.can().chain().redo().run(),
  }
}
