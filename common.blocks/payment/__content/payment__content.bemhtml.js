block('payment').elem('content')(
    mix()(
        {
            block: 'form',
            elem: 'item',
            elemMods: {
                'space-v': 'xxxl',
                'space-h': 'xl',
                border: 'bottom'
            }
        }
    ),
    content()(function () {
        var ctx = this.ctx;

        return [
            {
                block: 'form',
                elem: 'item',
                elemMods: {
                    'vertical-align': 'center',
                    distribute: 'between',
                    'indent-b': 'xl',
                },
                content: [
                    {
                        block: 'form',
                        elem: 'label',
                        elemMods: {
                            width:'default'
                        },
                        content: [
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

                    },
                    {
                        block: 'form',
                        elem: 'control',
                        mix:[
                            {
                                block:'payment',
                                elem:'content-input',
                                elemMods:{
                                    width:'default'
                                }
                            }
                        ],
                        content:[
                            {
                                block: 'input',
                                mods: {
                                    size: 'l'
                                }
                            }
                        ]
                    }

                ]
            },
            {
                block: 'form',
                elem: 'item',
                elemMods: {
                    'vertical-align': 'center',
                    distribute: 'between',
                },
                content: [
                    {
                        block: 'form',
                        elem: 'label',
                        elemMods: {
                            width:'default'
                        },
                        content: [
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

                    },
                    {
                        block: 'form',
                        elem: 'control',
                        mix:[
                            {
                                block:'payment',
                                elem:'content-input',
                                elemMods:{
                                    width:'default'
                                }
                            }
                        ],
                        content:[
                            {
                                block: 'input',
                                mods: {
                                    size: 'l'
                                }
                            }
                        ]
                    }

                ]
            }
        ]
    })
);
