block('product')(
    mix()(
        {
            block: 'card',
            mods: {
                view: 'default',
                border: 'all'
            }
        },

    ),
    // elem('image'),
    elem('content'),
    elem('footer')
    // content()(function () {
    //         var ctx = this.ctx;
    //
    //         return [
    //             {
    //                 elem: 'image',
    //                 content: [
    //                     {
    //                         block: 'image'
    //                     }
    //                 ]
    //             },
    //             {
    //                 elem: 'content',
    //                 content: [
    //                     {
    //                         block: 'text',
    //                         mods: {
    //                             view: 'primary',
    //                             size: 'm'
    //                         },
    //                         content: [
    //                             {
    //                                 block: 'text',
    //                                 elem: 'word',
    //                                 elemMods: {
    //                                     width: 'l'
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                 elem: 'footer',
    //                 content: [
    //                     {
    //                         block: 'text',
    //                         mods: {
    //                             view: 'primary',
    //                             size: 's'
    //                         },
    //                         content: [
    //                             {
    //                                 block: 'text',
    //                                 elem: 'word',
    //                                 elemMods: {
    //                                     width: 'm'
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // )
);
