modules.define('onoffswitch', ['i-bem-dom'], function (provide, bemDom) {

    provide(bemDom.declBlock('onoffswitch', {
        _onClick: function (modName, modVal) {

            if(this.domElem.hasClass('onoffswitch_mode_on'))
            {
                this.domElem.removeClass('onoffswitch_mode_on');
                this.domElem.addClass('onoffswitch_mode_off');
            }
            else if(this.domElem.hasClass('onoffswitch_mode_off'))
            {
                this.domElem.removeClass('onoffswitch_mode_off');
                this.domElem.addClass('onoffswitch_mode_on');
            }

            this._emit('clickThemeChange');
        }
    }, {
        onInit: function () {

            this._domEvents().on('click', this.prototype._onClick);
        }
    }));

});
