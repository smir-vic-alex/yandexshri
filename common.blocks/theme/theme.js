modules.define('theme', ['i-bem-dom', 'onoffswitch'], function (provide, bemDom, switchh) {

    provide(bemDom.declBlock('theme', {
            _onClick: function () {

                // this.findChildBlock(event)

                if (this.hasMod('color', 'project-default'))
                {
                    this.delMod('color');
                    this.setMod('color', 'project-inverse');
                }
                else if (this.hasMod('color', 'project-inverse'))
                {
                    this.delMod('color');
                    this.setMod('color', 'project-default');
                }

                this._emit('themeChanged');
            }
        },
        {
            onInit: function () {

                this._events(switchh).on('clickThemeChange', this.prototype._onClick)
            }
        }));

});
