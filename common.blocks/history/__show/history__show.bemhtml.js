block('history').elem('show')(
    mix()(
        [
            {
                block:'list',
                elem:'item',
                elemMods:{
                    'vertical-align':'center',
                    'indent-t':'m'
                }
            },
            {
                block:'e-accordion',
                elem:'short'
            }
        ]
    ),
    content()(function () {
            var ctx = this.ctx;

            return [

                {
                    block: 'history',
                    elem: 'destination',
                    content: [
                        ctx.content
                    ]
                },
                {
                    block: 'history',
                    elem: 'quantity'
                }
            ]
        }
    )
);
