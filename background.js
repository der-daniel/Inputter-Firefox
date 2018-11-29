browser.commands.onCommand.addListener(command => {
  browser.tabs
    .query({
      currentWindow: true,
      active: true
    })
    .then(tabs => {
      browser.tabs
        .sendMessage(tabs[0].id, {})
        .then(() => {})
        .catch();
    })
    .catch();
});
