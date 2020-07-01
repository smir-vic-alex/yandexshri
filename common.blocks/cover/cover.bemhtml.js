block('cover')(
    mix()(
        [
            {
                block: 'card',
                mods: {
                    view: 'default',
                }
            },
            {
                block: 'theme',
                mods: {
                    color: 'project-brand'
                }
            }
        ]
    ),
    content()(
        [
            {
                elem: 'info'
            },
            {
                elem: 'footer'
            }
        ]
    )
);
