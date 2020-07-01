block('history').elem('hide')(
    mix()(
        [
            {
                block: 'list',
                elem: 'item',
                elemMods: {
                    'indent-t': 'm'
                }
            },
            {
                block: 'e-accordion',
                elem: 'more',
                elemMods: {
                    view: 'default'
                }
            }
        ]
    ),
    content()(
        [
            {
                block: 'text',
                mods: {
                    view: 'primary',
                    size: 'l'
                },
                mix:[
                    {
                        block:'history',
                        elem:'hide',
                        elemMods:{
                            'item-space':'default'
                        }
                    }
                ],
                content: [
                    {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                            width: 'l'
                        }
                    },
                    {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                            width: 'm'
                        }
                    },
                    {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                            width: 'l'
                        }
                    }
                ]
            },
            {
                block: 'text',
                mods: {
                    view: 'primary',
                    size: 'l'
                },
                mix:[
                    {
                        block:'history',
                        elem:'hide',
                        elemMods:{
                            'item-space':'xxxl'
                        }
                    }
                ],
                content: [
                    {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                            width: 'l'
                        }
                    },
                    {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                            width: 'm'
                        }
                    },
                    {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                            width: 'l'
                        }
                    }
                ]
            },
            {
                block: 'text',
                mods: {
                    view: 'primary',
                    size: 'l'
                },
                mix:[
                    {
                        block:'history',
                        elem:'hide',
                        elemMods:{
                            'item-space':'default'
                        }
                    }
                ],
                content: [
                    {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                            width: 'l'
                        }
                    },
                    {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                            width: 'm'
                        }
                    }
                ]
            },
        ]
    )
);
