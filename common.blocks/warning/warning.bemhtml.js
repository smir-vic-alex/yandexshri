block('warning')(
    content()(
        function () {
            var ctx = this.ctx;

            return [
                {
                    elem: 'content',
                },
                {
                    elem: 'button-wrapper'
                }
            ]
        }
    ),

    mix()(
        [
            {
                block: 'informer',
                mods: {
                    view: 'default',
                    border: 'all'
                }
            },
            {
                block: 'theme',
                mods: {
                    color: 'project-warning'
                }
            }
        ]
    )
)




