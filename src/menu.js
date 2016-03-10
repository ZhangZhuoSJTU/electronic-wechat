"use strict";

let menuHandler = {};

menuHandler.create = () => {
  let remote = require('remote');
  let Menu = remote.require('menu');
  let app = remote.require('app');
  let shell = require('shell');
  let ipcRenderer = require("ipc-renderer");
  let darwinTemplate = [
    {
      label: 'Electronic WeChat',
      submenu: [
        {
          label: 'About Electronic WeChat',
          selector: 'orderFrontStandardAboutPanel:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Services',
          submenu: []
        },
        {
          type: 'separator'
        },
        {
          label: 'Hide Electron',
          accelerator: 'Command+H',
          selector: 'hide:'
        },
        {
          label: 'Hide Others',
          accelerator: 'Command+Shift+H',
          selector: 'hideOtherApplications:'
        },
        {
          label: 'Show All',
          selector: 'unhideAllApplications:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: () => {
            app.exit(0);
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Undo',
          accelerator: 'Command+Z',
          selector: 'undo:'
        },
        {
          label: 'Redo',
          accelerator: 'Shift+Command+Z',
          selector: 'redo:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Cut',
          accelerator: 'Command+X',
          selector: 'cut:'
        },
        {
          label: 'Copy',
          accelerator: 'Command+C',
          selector: 'copy:'
        },
        {
          label: 'Paste',
          accelerator: 'Command+V',
          selector: 'paste:'
        },
        {
          label: 'Select All',
          accelerator: 'Command+A',
          selector: 'selectAll:'
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload This Window',
          accelerator: 'Command+R',
          click: () => {
            ipcRenderer.send('reload');
          }
        },
        {
          label: 'Toggle DevTools',
          accelerator: 'Alt+Command+I',
          click: () => {
            remote.getCurrentWindow().toggleDevTools();
          }
        }
      ]
    },
    {
      label: 'Window',
      submenu: [
        {
          label: 'Minimize',
          accelerator: 'Command+M',
          selector: 'performMiniaturize:'
        },
        {
          label: 'Close',
          accelerator: 'Command+W',
          selector: 'performClose:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Bring All to Front',
          selector: 'arrangeInFront:'
        }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'GitHub Repository',
          click: () => {
            shell.openExternal('https://github.com/geeeeeeeeek/electronic-wechat');
          }
        },
        {
          type: 'separator'
        }, {
          label: 'Report Issues',
          click: () => {
            shell.openExternal('https://github.com/geeeeeeeeek/electronic-wechat/issues');
          }
        }, {
          label: 'Check for New Release',
          click: () => {
            shell.openExternal('https://github.com/geeeeeeeeek/electronic-wechat/releases');
          }
        }]
    }
  ];

  let linuxTemplate = [
    {
      label: 'Window',
      submenu: [
        {
          label: 'Reload This Window',
          accelerator: 'Ctrl+R',
          click: () => {
            ipcRenderer.send('reload');
          }
        },
        {
          label: 'Toggle DevTools',
          accelerator: 'Ctrl+Shift+I',
          click: () => {
            remote.getCurrentWindow().toggleDevTools();
          }
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit The App',
          accelerator: 'Ctrl+Q',
          click: () => {
            app.exit(0);
          }
        }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'GitHub Repository',
          click: () => {
            shell.openExternal('https://github.com/geeeeeeeeek/electronic-wechat');
          }
        },
        {
          type: 'separator'
        }, {
          label: 'Report Issues',
          click: () => {
            shell.openExternal('https://github.com/geeeeeeeeek/electronic-wechat/issues');
          }
        }, {
          label: 'Check for New Release',
          click: () => {
            shell.openExternal('https://github.com/geeeeeeeeek/electronic-wechat/releases');
          }
        }]
    }
  ];


  if (remote.process.platform == "darwin") {
    let darwinMenu = Menu.buildFromTemplate(darwinTemplate);
    Menu.setApplicationMenu(darwinMenu);
  } else if (remote.process.platform == "linux"){
    let linuxMenu = Menu.buildFromTemplate(linuxTemplate);
    Menu.setApplicationMenu(linuxMenu);
  }
};

module.exports = menuHandler;
