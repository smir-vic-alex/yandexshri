block('event').elem('content')(
    mix()(
        [
            {
                block: 'card',
                elem: 'content',
                elemMods: {
                    'vertical-align': 'center',
                    distribute: 'center',
                    'space-a': 'xxxl'
                }
            }
        ]
    ),
    content()(
        [
            {
                block: 'event',
                elem: 'preview'
            },
            {
                block: 'event',
                elem: 'title'
            },
            {
                block: 'event',
                elem: 'description'
            }
        ]
    )
);
