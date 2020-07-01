module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}},
        {elem: 'css', url: 'product.min.css'}
    ],
    scripts: [{elem: 'js', url: 'product.min.js'}],
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
                        'indent-b': 'xxxxl',
                        align: 'center',
                        size: 'm'
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
                                            block: 'cover'
                                        },
                                        {
                                            block: 'grid',
                                            elem: 'item',
                                            elemMods: {
                                                fill: '2-4'
                                            },
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'xxl',
                                                        type: 'h1'
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
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'm',
                                                        type: 'p'
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
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }

                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                    ]
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'm',
                                                        type: 'p'
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
                                                                width: 'l'
                                                            }
                                                        },

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
                                                        },
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
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                    ]
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'm',
                                                        type: 'p'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
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
                                                                width: 'l'
                                                            }
                                                        },
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
                                                        },
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
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                    ]
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'm',
                                                        type: 'p'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
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
                                                                width: 'l'
                                                            }
                                                        },
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
                                                        },
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
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                    ]
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'm',
                                                        type: 'p'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
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
                                                                width: 'l'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
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
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                    ]
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'm',
                                                        type: 'p'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
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
                                                        },
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
                                                        },
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
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                    ]
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'm',
                                                        type: 'p'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
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
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
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
                                                                width: 'l'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },

                                                    ]
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'm',
                                                        type: 'p'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
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
                                                                width: 'l'
                                                            }
                                                        },
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
                                                        },
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
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                    ]
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'm',
                                                        type: 'p'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
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
                                                                width: 'm'
                                                            }
                                                        }
                                                    ]
                                                },

                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'xxl',
                                                        type: 'h2'
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
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'm',
                                                        type: 'p'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
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
                                                                width: 'l'
                                                            }
                                                        },
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
                                                        },
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
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                    ]
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'm',
                                                        type: 'p'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
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
                                                                width: 'l'
                                                            }
                                                        },
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
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'l'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        view: 'primary',
                                                        size: 'm',
                                                        type: 'p'
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 's'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            elem: 'word',
                                                            elemMods: {
                                                                width: 'm'
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
                        'space-v': 'xxxxl'
                    },
                    mix: [
                        {
                            block: 'theme',
                            mods: {
                                color: 'project-inverse',
                            }
                        }
                    ],

                    content: [
                        {
                            elem: 'container',
                            elemMods: {
                                align: 'center',
                                size: 'm'
                            },
                            mix: [
                                {
                                    block: 'theme',
                                    mods: {
                                        color: 'project-inverse',
                                    }
                                }
                            ],
                            content: [
                                {
                                    block: 'text',
                                    mods: {
                                        view: 'primary',
                                        size: 'xl',
                                    },
                                    mix: [
                                        {
                                            block: 'product',
                                            elem: 'title'
                                        }
                                    ],
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
                                                width: 'l'
                                            }
                                        }
                                    ]
                                },
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
                                                'm-col': '4'
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
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                    ]
                }

            ]
        },
        {
            block: 'footer',
            mods: {
                distribute: 'between'
            },
            content: [
                {
                    elem: 'content',
                    content: [
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
