block('event').elem('footer')(
    mix()(
        [
            {
                block: 'card',
                elem: 'footer',
                elemMods: {
                    'vertical-align': 'center',
                    distribute: 'center',
                    'space-a': 'xxl'
                }
            }
        ]
    ),
    content()(
        [
            {
                block: 'text',
                mods: {
                    view: 'link',
                    size: 'xl',
                    align: 'center'
                },
                // mix:[
                //     {
                //         block:'event',
                //         elem:'description',
                //         elemMods :{
                //             'item-space':'default'
                //         }
                //     }
                // ],
                content:[
                    {
                        block: 'text',

                        elem: 'word',
                        elemMods: {
                            width: 's'
                        }
                    },
                    {
                        block: 'text',

                        elem: 'word',
                        elemMods: {
                            width: 's'
                        }
                    }
                ]
            }
        ]
    )
);
