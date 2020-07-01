module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}},
        {elem: 'css', url: 'index.min.css'}
    ],
    scripts: [{elem: 'js', url: 'index.min.js'}],
    mix: [
        {
            block: 'theme',
            js: true,
            mods: {
                color: 'project-default',
                size: 'default',
                space: 'default',
                breakpoint: 'default',
                gap: 'small'
            }
        }
    ],
    content: [
        {
            block: 'header',
            content: [

                {
                    elem: 'content'
                }
            ]
        },
        {
            block: 'layout',
            content: [
                {
                    elem: 'container',
                    elemMods: {
                        'indent-b': 'xxl',
                        align: 'center',
                        size:'m'
                    },
                    content: [

                        {
                            block: 'grid',
                            mods: {
                                'row-gap': 'full',
                                'col-gap': 'full'
                            },
                            content: [
                                {
                                    block: 'grid',
                                    elem: 'fraction',
                                    elemMods: {
                                        'm-col': '3'
                                    },
                                    content: [
                                        {
                                            block: 'warning',
                                            content: [
                                                {
                                                    elem: 'content',
                                                },
                                                {
                                                    elem: 'button-wrapper',
                                                }
                                            ]
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'item',
                                            elemMods: {
                                                fill: '2-4'
                                            },
                                            content: [
                                                {
                                                    block: 'payment',
                                                    content: [
                                                        {
                                                            elem: 'header'
                                                        },
                                                        {
                                                            elem: 'content',
                                                            content: [
                                                                {
                                                                    block: 'payment',
                                                                    elem: 'input'
                                                                },
                                                                {
                                                                    block: 'payment',
                                                                    elem: 'input'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'footer'
                                                            // content: [
                                                            //     {
                                                            //         block: 'payment',
                                                            //         elem: 'button'
                                                            //     }
                                                            // ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'container',
                    elemMods: {
                        'indent-b': 'xxl',
                        align: 'center',
                        size:'m'
                    },
                    content: [
                        {
                            block: 'grid',
                            mods: {
                                'row-gap': 'full',
                                'col-gap': 'half'
                            },
                            content: [
                                {
                                    block: 'grid',
                                    elem: 'fraction',
                                    elemMods: {
                                        'm-col': '5'
                                    },
                                    content: [
                                        {
                                            block: 'product',
                                            content: [
                                                {
                                                    elem: 'content'
                                                },
                                                {
                                                    elem: 'footer'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'product',
                                            content: [

                                                {
                                                    elem: 'content'
                                                },
                                                {
                                                    elem: 'footer'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'product',
                                            content: [
                                                {
                                                    elem: 'content'
                                                },
                                                {
                                                    elem: 'footer'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'product',
                                            content: [
                                                {
                                                    elem: 'content'
                                                },
                                                {
                                                    elem: 'footer'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'product',
                                            content: [
                                                {
                                                    elem: 'content'
                                                },
                                                {
                                                    elem: 'footer'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'container',
                    elemMods: {
                        'indent-b': 'xxl',
                        align: 'center',
                        size:'m'
                    },
                    content: [
                        {
                            block: 'grid',
                            mods: {
                                'row-gap': 'full',
                                'col-gap': 'full'
                            },
                            content: [
                                {
                                    block: 'grid',
                                    elem: 'fraction',
                                    elemMods: {
                                        'm-col': '2'
                                    },
                                    content: [
                                        {
                                            block: 'history',
                                        },
                                        {
                                            block: 'event',
                                            content: [
                                                {
                                                    elem: 'content'
                                                },
                                                {
                                                    elem: 'footer'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            block: 'footer',
            mods:{
                distribute:'between'
            },
            content: [
                {
                    elem: 'content',
                    content:[
                        [
                            {
                                block: 'text',
                                mods: {
                                    view: 'primary',
                                    size: 'l'
                                },
                                content: [
                                    {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: {
                                            width: 'l'
                                        }
                                    },
                                    {
                                        block: 'text',
                                        elem: 'word',
                                        elemMods: {
                                            width: 's'
                                        }
                                    }
                                ]
                            },
                            {
                                block: 'text',
                                mods: {
                                    view: 'primary',
                                    size: 'l'
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
                    ]
                }
            ]
        }
    ]
};
