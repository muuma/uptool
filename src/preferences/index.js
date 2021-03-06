const {app} = require('electron');
const path = require('path');
const os = require('os');
const ElectronPreferences = require('electron-preferences');

export default new ElectronPreferences({
    /**
     * Where should preferences be saved?
     */
    'dataStore': path.resolve(app.getPath('userData'), 'preferences.json'),
    'defaults': {
        'general': {
            'system': ['minimize']
        },
        'appearance': {
            'controlStyle': (os.platform == 'darwin') ? 'mac' : 'win'
        }
    },
    /**
     * The preferences window is divided into sections. Each section has a label, an icon, and one or
     * more fields associated with it. Each section should also be given a unique ID.
     */
    'sections': [
        {
            'id': 'general',
            'label': '通用',
            /**
             * See the list of available icons below.
             */
            'icon': 'settings-gear-63',
            'form': {
                'groups': [
                    {
                        /**
                         * Group heading is optional.
                         */
                        'label': '通用',
                        'fields': [
                            {
                                'label': '系统',
                                'key': 'system',
                                'type': 'checkbox',
                                'options': [
                                    { 'label': '关闭时最小化到系统托盘', 'value': 'minimize' }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            'id': 'appearance',
            'label': '外观',
            'icon': 'diamond',
            'form': {
                'groups': [
                    {
                        'label': '外观',
                        'fields': [{
                            'label': '窗口风格',
                            'key': 'controlStyle',
                            'type': 'radio',
                            'options': [
                                {'label': 'Windows 风格', value: 'win'},
                                {'label': 'macOS 风格', value: 'mac'},
                            ]
                        }]
                    }
                ]
            }
        },
        {
            'id': 'notification',
            'label': '通知',
            'icon': 'bell-53',
            'form': {
                'groups': [
                    {
                        'label': '通知',
                        'fields': [{
                            'label': '提醒',
                            'key': 'alert',
                            'type': 'checkbox',
                            'options': [
                                {
                                    'label': '视频未上传完退出时提醒我',
                                    'value': 'unuploaded'
                                },
                                {
                                    'label': '稿件未提交退出时提醒我',
                                    'value': 'unsubmitted'
                                },
                                {
                                    'label': '上传完成后提醒我',
                                    'value': 'postUpload'
                                },
                            ]
                        }]
                    }
                ]
            }
        }
    ]
});