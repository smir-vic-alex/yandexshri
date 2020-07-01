block('history')(
    js()(true),
    mix()(
        [
            {
                block: 'list',
                mods: {
                    view: 'default',
                    border: 'all'
                }
            }
        ]
    ),
    content()(
        [
            {
                elem: 'transaction',
                content: [
                    'blue'
                ]
            },
            {
                elem: 'transaction',
                content: [
                    'purple'
                ]
            },
            {
                elem: 'transaction',
                content: [
                    'red'
                ]
            },
            {
                elem: 'transaction',
                content: [
                    'green'
                ]
            }
        ]
    )
);
