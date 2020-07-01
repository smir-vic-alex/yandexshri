block('payment').elem('footer')(
    mix()(
        {
            block: 'form',
            elem: 'item',
            elemMods: {
                distribute: 'between',
                'vertical-align': 'center',
                'space-v': 'l',
                'space-h': 'xl'
            }
        }
    ),
    content()(function () {
        var ctx = this.ctx;

        return [
            {
                block: 'text',
                mix: [
                    {
                        block: 'payment',
                        elem: 'button-label'
                    },
                    {
                        block: 'form',
                        elem: 'label',
                        elemMods: {
                            width:'default'
                        }
                    }
                ],
                mods: {
                    view: 'primary',
                    size: 'l'
                },
                content: [
                    {
                        elem: 'word',
                        elemMods: {width: 'l'},
                        content: ctx.content
                    }
                ]
            },
            {
                block: 'button',
                mix: [
                    {
                        block: 'payment',
                        elem: 'button-box'
                    },
                ],
                mods: {
                    size: 'l',
                    color: 'accent'
                },
                content: []
            }
        ]
    })
);
