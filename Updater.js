const autoUpdater = require("electron-updater").autoUpdater
autoUpdater.logger = require("electron-log");
autoUpdater.logger.transports.file.level = "info";

module.exports.check = () => {
    autoUpdater.checkForUpdatesAndNotify()
}
