/**
 * @name RemoveGiftButton
 * @author Banaanae
 * @authorId 467230314268196898
 * @description Removes the annoying gift button in the text area
 * @source https://github.com/Banaanae/Better-Discord-Plugins/blob/main/RemoveGiftButton/RemoveGiftButton.plugin.js
 * @version 0.1
 */

 module.exports = class RemoveGiftButton {
    start() {
		let giftBtn = document.querySelector("#app-mount > div.appDevToolsWrapper-1QxdQf > div > div.app-3xd6d0 > div > div.layers-OrUESM.layers-1YQhyW > div > div.container-1eFtFS > div > div > div.chat-2ZfjoI > div.content-1jQy2l > main > form > div > div.channelTextArea-1FufC0.channelTextArea-1VQBuV > div.scrollableContainer-15eg7h.webkit-QgSAqd > div > div.buttons-uaqb-5 > button")
    	let refreshListener = document.createElement
		let active = "true"
        giftBtn.remove()
        refreshListener("div")
        BdApi.onRemoved(refreshListener, () => {
			if (active == "true") {
				giftBtn.remove()
				refreshListener("div")
			}
        });
    }
  
    stop() {
        let active = "false"
    }
};