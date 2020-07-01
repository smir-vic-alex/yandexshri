block('history').elem('time')(
    content()(
        [
            {

                block: 'text',
                mods: {
                    view: 'ghost',
                    size: 's'
                },
                mix:[
                    {
                        block:'history',
                        elem:'time',
                        elemMods:{
                            space:'default'
                        }
                    }
                ],
                content: [
                    {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                            width: 'm'
                        }
                    }
                ]
            },
            {

                block: 'text',
                mods: {
                    view: 'ghost',
                    size: 's'
                },
                content: [
                    {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                            width: 'm'
                        }
                    }
                ]
            }
        ]
    )
)
