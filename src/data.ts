export type Shortcut = {
  action: string;
  keys: string[];
  labels: string[];
};

export type TabData = Shortcut[];

export const shortcuts: Record<string, TabData> = {
  Chrome: [
    {
      action: "navigate to previous page",
      keys: ["Meta", "ArrowLeft"],
      labels: ["⌘", "←"],
    },
    {
      action: "navigate to next page",
      keys: ["Meta", "ArrowRight"],
      labels: ["⌘", "→"],
    },
    {
      action: "navigate to previous page (alternative)",
      keys: ["Meta", "["],
      labels: ["⌘", "[]"],
    },
    {
      action: "navigate forward (alternative)",
      keys: ["Meta", "]"],
      labels: ["⌘", "]"],
    },
    {
      action: "focus the URL bar",
      keys: ["Meta", "L"],
      labels: ["⌘", "L"],
    },
    {
      action: "duplicate tab",
      keys: ["Meta", "L", "Meta", "Shift", "Enter"],
      labels: ["⌘", "L", "then", "⌘", "⇧", "Return"],
    },
    {
      action: "switch to previous tab",
      keys: ["Meta", "Alt", "ArrowLeft"],
      labels: ["⌘", "⌥", "←"],
    },
    {
      action: "switch to next tab",
      keys: ["Meta", "Alt", "ArrowRight"],
      labels: ["⌘", "⌥", "→"],
    },
    {
      action: "switch to next tab (alternative)",
      keys: ["Control", "Tab"],
      labels: ["⌃", "Tab"],
    },
    {
      action: "switch to previous tab (alternative)",
      keys: ["Control", "Shift", "Tab"],
      labels: ["⌃", "⇧", "Tab"],
    },
    {
      action: "switch to previous tab (Mac)",
      keys: ["Fn", "Control", "ArrowUp"],
      labels: ["fn", "⌃", "↑"],
    },
    {
      action: "switch to next tab (Mac)",
      keys: ["Fn", "Control", "ArrowDown"],
      labels: ["fn", "⌃", "↓"],
    },
    {
      action: "enter/exit full screen mode",
      keys: ["Control", "Meta", "F"],
      labels: ["⌃", "⌘", "F"],
    },
    {
      action: "go to numbered tab (1-8)",
      keys: ["Meta", "1-8"],
      labels: ["⌘", "1-8"],
    },
    {
      action: "go to final tab",
      keys: ["Meta", "9"],
      labels: ["⌘", "9"],
    },
    {
      action: "search for tabs",
      keys: ["Meta", "Shift", "A"],
      labels: ["⌘", "⇧", "A"],
    },
    {
      action: "switch windows",
      keys: ["Meta", "`"],
      labels: ["⌘", "`"],
    },
    {
      action: "open Chrome history",
      keys: ["Meta", "Y"],
      labels: ["⌘", "Y"],
    },
    {
      action: "open settings",
      keys: ["Meta", ","],
      labels: ["⌘", ","],
    },
    {
      action: "open new tab",
      keys: ["Meta", "T"],
      labels: ["⌘", "T"],
    },
    {
      action: "close tab/window",
      keys: ["Meta", "W"],
      labels: ["⌘", "W"],
    },
    {
      action: "open last closed tab",
      keys: ["Meta", "Shift", "T"],
      labels: ["⌘", "⇧", "T"],
    },
    {
      action: "open link in new tab",
      keys: ["Meta", "Shift", "Enter"],
      labels: ["⌘", "⇧", "Return"],
    },
    {
      action: "open link in new tab (mouse)",
      keys: ["Meta", "Click"],
      labels: ["⌘", "Click"],
    },
    {
      action: "move current tab to the left",
      keys: ["Control", "Shift", "Fn", "ArrowUp"],
      labels: ["⌃", "⇧", "fn", "↑"],
    },
    {
      action: "move current tab to the right",
      keys: ["Control", "Shift", "Fn", "ArrowDown"],
      labels: ["⌃", "⇧", "fn", "↓"],
    },
    {
      action: "move window to left half",
      keys: ["Fn", "Control", "ArrowLeft"],
      labels: ["fn", "⌃", "←"],
    },
    {
      action: "move window to right half",
      keys: ["Fn", "Control", "ArrowRight"],
      labels: ["fn", "⌃", "→"],
    },
    {
      action: "move window to center",
      keys: ["Fn", "Control", "C"],
      labels: ["fn", "⌃", "C"],
    },
    {
      action: "restore full width",
      keys: ["Fn", "Control", "F"],
      labels: ["fn", "⌃", "F"],
    },
  ],
  Mac: [
    {
      action: "open Spotlight",
      keys: ["Meta", "Space"],
      labels: ["⌘", "Space"],
    },
    {
      action: "switch to next app",
      keys: ["Control", "ArrowRight"],
      labels: ["⌃", "→"],
    },
    {
      action: "switch to previous app",
      keys: ["Control", "ArrowLeft"],
      labels: ["⌃", "←"],
    },
    {
      action: "toggle full/half screen",
      keys: ["Fn", "F"],
      labels: ["fn", "F"],
    },
    {
      action: "minimize application",
      keys: ["Meta", "M"],
      labels: ["⌘", "M"],
    },
    {
      action: "un-minimize application",
      keys: ["Meta", "Tab", "Alt"],
      labels: ["⌘", "Tab", "then", "⌥"],
    },
    {
      action: "quit highlighted app",
      keys: ["Meta", "Tab", "Q"],
      labels: ["⌘", "Tab", "then", "Q"],
    },
    {
      action: "open emoji/special character keyboard",
      keys: ["Control", "Meta", "Space"],
      labels: ["⌃", "⌘", "Space"],
    },
    {
      action: "switch to icons view",
      keys: ["Meta", "1"],
      labels: ["⌘", "1"],
    },
    {
      action: "switch to list view",
      keys: ["Meta", "2"],
      labels: ["⌘", "2"],
    },
    {
      action: "switch to column view",
      keys: ["Meta", "3"],
      labels: ["⌘", "3"],
    },
    {
      action: "switch to gallery view",
      keys: ["Meta", "4"],
      labels: ["⌘", "4"],
    },
    {
      action: "go up file system tier",
      keys: ["Meta", "ArrowUp"],
      labels: ["⌘", "↑"],
    },
    {
      action: "go down file system tier",
      keys: ["Meta", "ArrowDown"],
      labels: ["⌘", "↓"],
    },
    {
      action: "go to top of files",
      keys: ["Alt", "ArrowUp"],
      labels: ["⌥", "↑"],
    },
    {
      action: "go to bottom of files",
      keys: ["Alt", "ArrowDown"],
      labels: ["⌥", "↓"],
    },
    {
      action: "navigate pages (up)",
      keys: ["Alt", "ArrowUp"],
      labels: ["⌥", "↑"],
    },
    {
      action: "navigate pages (down)",
      keys: ["Alt", "ArrowDown"],
      labels: ["⌥", "↓"],
    },
    {
      action: "go to last page",
      keys: ["Meta", "ArrowDown"],
      labels: ["⌘", "↓"],
    },
    {
      action: "go to first page",
      keys: ["Meta", "ArrowUp"],
      labels: ["⌘", "↑"],
    },
    {
      action: "open app settings",
      keys: ["Meta", ","],
      labels: ["⌘", ","],
    },
    {
      action: "delete current file",
      keys: ["Meta", "Delete"],
      labels: ["⌘", "⌫"],
    },
    {
      action: "navigate back in Finder history",
      keys: ["Meta", "["],
      labels: ["⌘", "["],
    },
    {
      action: "navigate forward in Finder history",
      keys: ["Meta", "]"],
      labels: ["⌘", "]"],
    },
  ],
  "Text Editing": [
    {
      action: "move word right",
      keys: ["Alt", "ArrowRight"],
      labels: ["⌥", "→"],
    },
    {
      action: "move word left",
      keys: ["Alt", "ArrowLeft"],
      labels: ["⌥", "←"],
    },
    {
      action: "go to beginning of file",
      keys: ["Meta", "ArrowUp"],
      labels: ["⌘", "↑"],
    },
    {
      action: "go to end of file",
      keys: ["Meta", "ArrowDown"],
      labels: ["⌘", "↓"],
    },
    {
      action: "go to beginning of line",
      keys: ["Meta", "ArrowRight"],
      labels: ["⌘", "→"],
    },
    {
      action: "go to end of line",
      keys: ["Meta", "ArrowLeft"],
      labels: ["⌘", "←"],
    },
    {
      action: "move cursor to end of line",
      keys: ["Alt", "ArrowDown"],
      labels: ["⌥", "↓"],
    },
    {
      action: "go to end of line (emacs)",
      keys: ["Control", "E"],
      labels: ["⌃", "E"],
    },
    {
      action: "go to beginning of line (emacs)",
      keys: ["Control", "A"],
      labels: ["⌃", "A"],
    },
    {
      action: "go to next line (emacs)",
      keys: ["Control", "N"],
      labels: ["⌃", "N"],
    },
    {
      action: "go to next misspelled word",
      keys: ["Meta", ";"],
      labels: ["⌘", ";"],
    },
    {
      action: "highlight to beginning of line",
      keys: ["Alt", "Shift", "ArrowUp"],
      labels: ["⌥", "⇧", "↑"],
    },
    {
      action: "highlight to end of word",
      keys: ["Alt", "Shift", "ArrowLeft"],
      labels: ["⌥", "⇧", "←"],
    },
    {
      action: "highlight to end of line",
      keys: ["Alt", "Shift", "ArrowDown"],
      labels: ["⌥", "⇧", "↓"],
    },
    {
      action: "highlight to end of word (right)",
      keys: ["Alt", "Shift", "ArrowRight"],
      labels: ["⌥", "⇧", "→"],
    },
    {
      action: "move cursor to beginning of line",
      keys: ["Alt", "ArrowUp"],
      labels: ["⌥", "↑"],
    },
    {
      action: "move selected text up",
      keys: ["Control", "Shift", "ArrowUp"],
      labels: ["⌃", "⇧", "↑"],
    },
    {
      action: "move selected text down",
      keys: ["Control", "Shift", "ArrowDown"],
      labels: ["⌃", "⇧", "↓"],
    },
    {
      action: "delete from cursor to beginning of line",
      keys: ["Meta", "Delete"],
      labels: ["⌘", "⌫"],
    },
    {
      action: "delete a word at a time",
      keys: ["Alt", "Delete"],
      labels: ["⌥", "⌫"],
    },
    {
      action: "delete line from cursor to end",
      keys: ["Control", "K"],
      labels: ["⌃", "K"],
    },
    {
      action: "move current paragraph up",
      keys: ["Control", "Shift", "ArrowUp"],
      labels: ["⌃", "⇧", "↑"],
    },
    {
      action: "move current paragraph down",
      keys: ["Control", "Shift", "ArrowDown"],
      labels: ["⌃", "⇧", "↓"],
    },
    {
      action: "insert link",
      keys: ["Meta", "K"],
      labels: ["⌘", "K"],
    },
  ],
  "Google Docs": [
    {
      action: "open keyboard shortcuts",
      keys: ["Meta", "/"],
      labels: ["⌘", "/"],
    },
    {
      action: "go to next misspelled word",
      keys: ["Meta", "'"],
      labels: ["⌘", "'"],
    },
    {
      action: "turn line into Header 1",
      keys: ["Meta", "Alt", "1"],
      labels: ["⌘", "⌥", "1"],
    },
    {
      action: "turn line into Header 2",
      keys: ["Meta", "Alt", "2"],
      labels: ["⌘", "⌥", "2"],
    },
    {
      action: "turn line into Header 3",
      keys: ["Meta", "Alt", "3"],
      labels: ["⌘", "⌥", "3"],
    },
    {
      action: "turn line into Header 4",
      keys: ["Meta", "Alt", "4"],
      labels: ["⌘", "⌥", "4"],
    },
    {
      action: "turn line into Header 5",
      keys: ["Meta", "Alt", "5"],
      labels: ["⌘", "⌥", "5"],
    },
    {
      action: "turn line into Header 6",
      keys: ["Meta", "Alt", "6"],
      labels: ["⌘", "⌥", "6"],
    },
    {
      action: "turn line into Header 7",
      keys: ["Meta", "Alt", "7"],
      labels: ["⌘", "⌥", "7"],
    },
    {
      action: "open File dropdown",
      keys: ["Control", "Alt", "F"],
      labels: ["⌃", "⌥", "F"],
    },
    {
      action: "toggle top menu",
      keys: ["Control", "Shift", "F"],
      labels: ["⌃", "⇧", "F"],
    },
    {
      action: "open new Google doc",
      keys: ["docs.new"],
      labels: ["docs.new"],
    },
    {
      action: "skip quickly through doc",
      keys: ["Fn", "ArrowDown"],
      labels: ["fn", "↓"],
    },
    {
      action: "indent line",
      keys: ["Meta", "]"],
      labels: ["⌘", "]"],
    },
    {
      action: "un-indent line",
      keys: ["Meta", "["],
      labels: ["⌘", "["],
    },
    {
      action: "open search menu for styles",
      keys: ["Alt", "/"],
      labels: ["⌥", "/"],
    },
  ],
  "Any Site": [
    {
      action: "navigate through clickable elements",
      keys: ["Tab"],
      labels: ["Tab"],
    },
    {
      action: "click focused element",
      keys: ["Escape", "Enter"],
      labels: ["Esc", "then", "Enter"],
    },
    {
      action: "scroll quickly to top",
      keys: ["Meta", "ArrowUp"],
      labels: ["⌘", "↑"],
    },
    {
      action: "scroll quickly to bottom",
      keys: ["Meta", "ArrowDown"],
      labels: ["⌘", "↓"],
    },
    {
      action: "scroll relatively quick to top",
      keys: ["Alt", "ArrowUp"],
      labels: ["⌥", "↑"],
    },
    {
      action: "scroll relatively quick to bottom",
      keys: ["Alt", "ArrowDown"],
      labels: ["⌥", "↓"],
    },
    {
      action: "find text on page",
      keys: ["Control", "F"],
      labels: ["⌃", "F"],
    },
    {
      action: "move to next search result",
      keys: ["Enter"],
      labels: ["Enter"],
    },
    {
      action: "move to previous search result",
      keys: ["Shift", "Enter"],
      labels: ["⇧", "Enter"],
    },
    {
      action: "leave search focus",
      keys: ["Escape"],
      labels: ["Esc"],
    },
    {
      action: "click focused search result",
      keys: ["Enter"],
      labels: ["Enter"],
    },
  ],
  YouTube: [
    {
      action: "play/pause",
      keys: ["K"],
      labels: ["K"],
    },
    {
      action: "show captions",
      keys: ["C"],
      labels: ["C"],
    },
    {
      action: "mute",
      keys: ["M"],
      labels: ["M"],
    },
    {
      action: "preview captions",
      keys: ["W"],
      labels: ["W"],
    },
    {
      action: "toggle miniplayer",
      keys: ["I"],
      labels: ["I"],
    },
    {
      action: "increase volume",
      keys: ["ArrowUp"],
      labels: ["↑"],
    },
    {
      action: "decrease volume",
      keys: ["ArrowDown"],
      labels: ["↓"],
    },
    {
      action: "jump to 10% of video",
      keys: ["1"],
      labels: ["1"],
    },
    {
      action: "jump to 20% of video",
      keys: ["2"],
      labels: ["2"],
    },
    {
      action: "jump to 30% of video",
      keys: ["3"],
      labels: ["3"],
    },
    {
      action: "jump to 40% of video",
      keys: ["4"],
      labels: ["4"],
    },
    {
      action: "jump to 50% of video",
      keys: ["5"],
      labels: ["5"],
    },
    {
      action: "jump to 60% of video",
      keys: ["6"],
      labels: ["6"],
    },
    {
      action: "jump to 70% of video",
      keys: ["7"],
      labels: ["7"],
    },
    {
      action: "jump to 80% of video",
      keys: ["8"],
      labels: ["8"],
    },
    {
      action: "jump to 90% of video",
      keys: ["9"],
      labels: ["9"],
    },
  ],
  Zoom: [
    {
      action: "open/hide chat",
      keys: ["Meta", "Shift", "H"],
      labels: ["⌘", "⇧", "H"],
    },
    {
      action: "toggle video",
      keys: ["Meta", "Shift", "V"],
      labels: ["⌘", "⇧", "V"],
    },
    {
      action: "toggle audio",
      keys: ["Meta", "Shift", "A"],
      labels: ["⌘", "⇧", "A"],
    },
    {
      action: "pull up meeting link to copy",
      keys: ["Meta", "I"],
      labels: ["⌘", "I"],
    },
  ],
};
