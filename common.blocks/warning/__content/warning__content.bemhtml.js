block('warning').elem('content')(
    mix()(
        {
            block: 'informer',
            elem: 'content',
            elemMods: {
                'space-a': 'xxl'
            }
        }
    ),
    content()(function () {
        var ctx = this.ctx;

        return [
            {
                block: 'informer',
                elem: 'content',
                elemMods: {
                    distribute: 'center',
                },
                content:
                    [{
                        block: 'placeholder',
                        mix: [
                            {
                                block: 'informer',
                                elem: 'content',
                                elemMods: {
                                    distribute: 'center',
                                    'space-a': 'xxl'
                                }
                            },
                            {
                                block: 'warning',
                                elem: 'content',
                                elemMods: {
                                    'space-b':'m',
                                    'space-t':'m'
                                }
                            }
                        ],
                        mods: {
                            view: 'primary',
                            size: 'm',
                        }
                    }]
            },
            {
                block: 'text',
                mods: {
                    view: 'primary',
                    size: 'xl',
                    align: 'center'
                },
                mix: [
                    {
                        block: 'informer',
                        elem: 'content',
                        elemMods: {
                            distribute: 'center',
                        }
                    },
                    {
                        block: 'warning',
                        elem: 'content',
                        elemMods: {
                            'space-b':'m',
                        }
                    }
                ],
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
                    size: 'xl',
                    align: 'center'
                },
                mix: [
                    {
                        block: 'informer',
                        elem: 'content',
                        elemMods: {
                            distribute: 'center',
                        }
                    },
                    {
                        block: 'warning',
                        elem: 'content',
                        elemMods: {
                            'space-b':'m',
                        }
                    }
                ],
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
                    }
                ]
            },
            {
                block: 'text',
                mods: {
                    view: 'primary',
                    size: 'xl',
                    align: 'center'
                },
                mix: [
                    {
                        block: 'informer',
                        elem: 'content',
                        elemMods: {
                            distribute: 'center',
                        }
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
                            width: 's'
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
            }
        ]

    })
)
