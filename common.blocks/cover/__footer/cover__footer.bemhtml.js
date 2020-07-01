block('cover').elem('footer')(
    mix()(
        [
            {
                block: 'card',
                elem: 'footer',
                elemMods: {
                    'space-a': 'xxl'
                }
            }
        ]
    ),
    content()(
        [
            {
                block: 'button',
                mods: {
                    width:'full',
                    size:'l',
                    color: 'accent'
                }
            }
        ]
    )
);
