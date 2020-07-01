module.exports = {
    block: 'page',
    title: 'Page taskone',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: 'taskone.min.css'}
    ],
    scripts: [{elem: 'js', url: 'taskone.min.js'}],
    mix: [
        {
            block: 'theme',
            mods: {
                color: 'project-default',
                size: 'default',
                space: 'default',
                breakpoint: 'default'
            }
        }
    ],
    content: [
        {
            block: 'payment',
            content: [
                {
                    elem: 'header',
                    content: [
                        'l'
                    ]
                },
                {
                    elem: 'content',
                    content: [
                        {
                            block: 'payment',
                            elem: 'input',
                            content: [
                                'l'
                            ]
                        },
                        {
                            block: 'payment',
                            elem: 'input',
                            content: [
                                'l'
                            ]
                        }
                    ]
                },
                {
                    elem: 'footer',
                    content: [
                        {
                            block: 'payment',
                            elem: 'button',
                            content: [
                                'l'
                            ]
                        }
                    ]
                }
            ]
        },
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
            block: 'product',
            content: [
                {
                    elem: 'image',
                    content: [
                        {
                            block: 'image'
                        }
                    ]
                },
                {
                    elem: 'content',
                    content: [
                        {
                            block: 'text',
                            mods: {
                                view: 'primary',
                                size: 'm'
                            },
                            content: [
                                {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                        width: 'l'
                                    },
                                    content: 'l'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'footer',
                    content: [
                        {
                            block: 'text',
                            mods: {
                                view: 'primary',
                                size: 's'
                            },
                            content: [
                                {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                        width: 'm'
                                    },
                                    content: 'm'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'history',
            content: [
                {
                    elem: 'transaction',
                    content: [
                        {
                            block: 'history',
                            elem: 'show',
                            content: [
                                {
                                    block: 'history',
                                    elem: 'time'
                                },
                                {
                                    block: 'history',
                                    elem: 'destination',
                                    content: [
                                        {
                                            block: 'history',
                                            elem: 'pic',
                                            content: [
                                                {
                                                    block: 'brand-logo',
                                                    mods: {
                                                        name: 'blue',
                                                        size: 'm'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block: 'history',
                                            elem: 'label'
                                        }
                                    ]
                                },
                                {
                                    block: 'history',
                                    elem: 'quantity'
                                }
                            ]
                        },
                        {
                            block: 'history',
                            elem: 'hide'
                        }
                    ]
                },
                {
                    elem: 'transaction',
                    content: [
                        {
                            block: 'history',
                            elem: 'show',
                            content: [
                                {
                                    block: 'history',
                                    elem: 'time'
                                },
                                {
                                    block: 'history',
                                    elem: 'destination',
                                    content: [
                                        {
                                            block: 'history',
                                            elem: 'pic',
                                            content: [
                                                {
                                                    block: 'brand-logo',
                                                    mods: {
                                                        name: 'purple',
                                                        size: 'm'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block: 'history',
                                            elem: 'label'
                                        }
                                    ]
                                },
                                {
                                    block: 'history',
                                    elem: 'quantity'
                                }
                            ]
                        },
                        {
                            block: 'history',
                            elem: 'hide'
                        }
                    ]
                },
                {
                    elem: 'transaction',
                    content: [
                        {
                            block: 'history',
                            elem: 'show',
                            content: [
                                {
                                    block: 'history',
                                    elem: 'time'
                                },
                                {
                                    block: 'history',
                                    elem: 'destination',
                                    content: [
                                        {
                                            block: 'history',
                                            elem: 'pic',
                                            content: [
                                                {
                                                    block: 'brand-logo',
                                                    mods: {
                                                        name: 'red',
                                                        size: 'm'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block: 'history',
                                            elem: 'label'
                                        }
                                    ]
                                },
                                {
                                    block: 'history',
                                    elem: 'quantity'
                                }
                            ]
                        },
                        {
                            block: 'history',
                            elem: 'hide'
                        }
                    ]
                },
                {
                    elem: 'transaction',
                    content: [
                        {
                            block: 'history',
                            elem: 'show',
                            content: [
                                {
                                    block: 'history',
                                    elem: 'time'
                                },
                                {
                                    block: 'history',
                                    elem: 'destination',
                                    content: [
                                        {
                                            block: 'history',
                                            elem: 'pic',
                                            content: [
                                                {
                                                    block: 'brand-logo',
                                                    mods: {
                                                        name: 'green',
                                                        size: 'm'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block: 'history',
                                            elem: 'label'
                                        }
                                    ]
                                },
                                {
                                    block: 'history',
                                    elem: 'quantity'
                                }
                            ]
                        },
                        {
                            block: 'history',
                            elem: 'hide'
                        }
                    ]
                }
            ]
        },
        {
            block: 'cover',
            content: [
                {
                    elem: 'preview',
                    content: [
                        {
                            block: 'image',
                            mix: [
                                {
                                    block: 'cover',
                                    elem: 'image',
                                    elemMods: {
                                        size: 'default'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'info',
                    content: [
                        {
                            block: 'text',
                            mods: {
                                view: 'primary',
                                size: 'm'
                            },
                            content: [
                                {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                        width: 'l'
                                    },
                                    content: 'l'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'footer',
                    content: [
                        {
                            block: 'text',
                            mods: {
                                view: 'primary',
                                size: 's'
                            },
                            content: [
                                {
                                    block: 'text',
                                    elem: 'word',
                                    elemMods: {
                                        width: 'm'
                                    },
                                    content: 'm'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'event',
            content: [
                {
                    elem: 'content',
                    content: [
                        {
                            block: 'event',
                            elem: 'preview',
                            content: [
                                {
                                    block: 'event',
                                    elem: 'speaker',
                                    content: [
                                        {
                                            block: 'avatar',
                                            mods: {
                                                size: 'm'
                                            },
                                            mix: {
                                                block: 'event',
                                                elem: 'speaker',
                                                elemMods: {
                                                    color: 'white'
                                                }
                                            }
                                        }
                                    ]
                                },
                                {
                                    block: 'brand-logo',
                                    mods: {
                                        name: 'blue',
                                        size: 'm'
                                    },
                                    mix: [
                                        {
                                            block: 'event',
                                            elem: 'speaker',
                                            elemMods: {
                                                inline: 'block'
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'event',
                            elem: 'title',
                            content: [
                                {
                                    block: 'text'
                                }
                            ]
                        },
                        {
                            block: 'event',
                            elem: 'description',
                            content: [
                                {
                                    block: 'text'
                                },
                                {
                                    block: 'text'
                                },
                                {
                                    block: 'text'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'footer'
                }
            ]
        },
        {
            block:'header',
            content:[
                {
                    elem:'logo',
                    elemMods: {
                        color:'default'
                    }
                },
                {
                    elem:'content'
                }
            ]
        },
        {
            block:'onoffswitch',
            content:[
                {
                    elem:'button'
                }
            ]
        },
        {
            block:'footer',
            content:[
                {
                    elem:'content'
                }
            ]
        }
    ]
};
