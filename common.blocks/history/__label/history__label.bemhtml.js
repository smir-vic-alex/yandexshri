block('history').elem('label')(
    mix()(
        [
            {
                block: 'icon-plus',
                elem:'block'
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
                content: [
                    {
                        block: 'text',
                        elem: 'word',
                        elemMods: {
                            width: 'l'
                        }
                    }
                ]
            }
        ]
    )
);
