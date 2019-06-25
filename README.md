# scripts
Collection of random scripts and utilities

# qs2things
Take the text in Quicksilver and use it to create a Things3 to do. Save this script in `~/Library/Application Support/Quicksilver/Actions/qs2things.scpt` and it should *just work*.

# MoveEmailToCalendar
Mac Outlook doesn't support dragging emails onto one's calendar like Windows Outlook does. This is my attempt to hack around it:

1. Open Automator and create a new Quick Action.
1. Select "Run AppleScript" from the Actions list.
1. Replace the boilerplate script with the contents of this script.
1. At the top, select "no input" from "any application".
1. Save, and you'll see the filename in your Services menu.
1. Create a keyboard shortcut:
  * Open System Preferences -> Keyboard -> Shortcuts.
  * Select "App Shortcuts".
  * Click +, and select Microsoft Outlook.
  * Enter the exact name of your Automator script in the Menu Title field
  * Choose a keyboard shortcut (I use Cmd+Shift+C)
  * Click Add.
