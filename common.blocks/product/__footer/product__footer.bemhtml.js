block('product').elem('footer')(
    mix()(
        [
            {
                block: 'card',
                elem: 'footer',
                elemMods: {
                    'space-a': 'm'
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
                    size: 'm',
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
                    size: 's',
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
