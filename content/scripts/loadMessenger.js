
const defaultMessageListHeight = "36";
const defaultFolderTreeHeight = "28";

function onLoad(activatedWhileWindowOpen) {
  WL.injectCSS("chrome://LargerMessageList/content/styles/messenger.css");

  var gettingItem = WL.messenger.storage.sync.get(['messageListHeight', 'folderTreeHeight']);
  gettingItem.then((res) => {
    document.querySelector(':root').style.setProperty('--message-list-row-height', (res.messageListHeight || defaultMessageListHeight) + "px");
    document.querySelector(':root').style.setProperty('--folder-tree-row-height', (res.folderTreeHeight || defaultFolderTreeHeight) + "px");
  });

}

function onUnload(deactivatedWhileWindowOpen) {
}