block('history').elem('destination')(
    mix()(
        [
            {
                block: 'icon-plus',
                mods: {
                    'vertical-align': 'center'
                }
            }
        ]
    ),
    content()(function () {
            var ctx = this.ctx;

            return [
                {
                    block: 'history',
                    elem: 'time'
                },
                {
                    block: 'history',
                    elem: 'pic',
                    content: [
                        {
                            block: 'brand-logo',
                            mods: {
                                name: ctx.content,
                                size: 'm'
                            }
                        }
                    ]
                },
                {
                    block: 'history',
                    elem: 'label'
                }
            ]
        }
    )
);
