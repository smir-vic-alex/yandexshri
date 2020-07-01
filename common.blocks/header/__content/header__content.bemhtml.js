block('header').elem('content')(
    content()(
        function () {
            var ctx = this.ctx;

            return [
                {
                    elem: 'logo',
                    elemMods: {
                        color: 'default'
                    }
                },
                {
                    block: 'onoffswitch',
                    mods:{
                        mode:'on'
                    },
                    content: [
                        {
                            elem: 'button'
                        }
                    ]
                }
            ]
        }
    )
);
