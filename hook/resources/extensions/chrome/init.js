/**
 * San DevHook
 * Copyright 2017 Baidu Inc. All rights reserved.
 *
 * @file Init hook config.
 */


window.sanDevHook = {
    autohook: true,
    config: {
        subKey: 'sub',
        hookOnly: false,
        onAfterGenerateData: (message, cnode, parentId, component, config) => {
            component.el.dataset['san_id'] = cnode.id;
            return {hello: 'world'};
        },
        onSan: san => {
            const version = san && san.version;
        }
    }
};
