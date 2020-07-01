block('history').elem('transaction')(
    js()(true),
    mix()(
        [
            {
                block:'list',
                elem:'item',
                elemMods:{
                    border:'bottom',
                    'space-a':'m'
                }
            }
        ]
    ),
    content()(function () {
            var ctx = this.ctx;

            return [
            {
                block: 'history',
                elem: 'show',
                content: [
                    ctx.content
                ]
            },
            {
                block: 'history',
                elem: 'hide'
            }
        ]
        }
    )
);
