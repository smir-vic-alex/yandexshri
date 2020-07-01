block('warning').elem('button-wrapper')(
    mix()(
        {
            block: 'informer',
            elem:'action',
            elemMods: {
                'space-a':'xl'
            }
        }
    ),
    content()(function () {
        var ctx = this.ctx;

        return [
            {
                block: 'button',
                mix:[
                    {
                        block: 'informer',
                        elem:'action',
                        elemMods: {
                            distribute:'center',
                        }
                    }
                ],
                mods:{
                    size:'l',
                    color:'accent'
                }
            }
        ]

    })
)
