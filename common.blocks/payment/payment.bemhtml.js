block('payment')(
    elem('header'),
    elem('content'),
    elem('footer'),
    mix()(
        {
            block: 'form',
            mods: {
                border: 'all'
            }
        }
    )
);
