block('cover').elem('info')(
    mix()(
        [
            {
                block: 'card',
                elem: 'content',
                elemMods: {
                    'space-a': 'xxl'
                }
            }
        ]
    ),
    content()(
        [
            {
                block: 'cover',
                mix: [
                    {
                        block: 'theme',
                        mods: {
                            color: 'project-brand'
                        }
                    },
                    {
                        block: 'cover',
                        elem: 'info',
                        elemMods: {
                            space: 'default'
                        }
                    }
                ],
                elem: 'preview'
            },
            {
                block: 'text',
                mods: {
                    view: 'primary',
                    size: 'xxl',
                    type: 'p'
                },
                content: [
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
                    size: 'xxl',
                    type: 'p'
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
);
