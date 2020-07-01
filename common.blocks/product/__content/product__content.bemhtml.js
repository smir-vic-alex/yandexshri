block('product').elem('content')(
    mix()(
        [
            {
                block: 'card',
                elem: 'content',
                elemMods: {
                    'space-a': 'm'
                }
            }
        ]
    ),
    content()(
        [
            {
                elem: 'image'
            },

        ]
    )
);
