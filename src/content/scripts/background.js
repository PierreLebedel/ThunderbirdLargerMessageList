
messenger.WindowListener.registerChromeUrl([
    ["content", "LargerMessageList", "content/"],
]);

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messenger.xhtml",
    "chrome://LargerMessageList/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messageWindow.xhtml",
    "chrome://LargerMessageList/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/customizeToolbar.xhtml",
    "chrome://LargerMessageList/content/scripts/loadMessenger.js");

messenger.WindowListener.startListening();