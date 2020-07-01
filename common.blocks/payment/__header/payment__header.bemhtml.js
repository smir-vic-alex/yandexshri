block('payment').elem('header')(
    mix()(
        {
            block: 'form',
            elem: 'item',
            elemMods: {
                'space-v': 'l',
                'space-h': 'xl',
                border: 'bottom'

            }
        }
    ),
    content()(function () {
        return [
            {
                elem: 'title',
                content: [
                    {
                        block: 'text',
                        mix:[
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
                            size: 'xxl'
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
            }
        ];
    })
);



