modules.define('history__transaction', ['i-bem-dom'], function (provide, bemDom) {

    provide(bemDom.declElem('history', 'transaction', {
        _onClick: function () {

            var child = this.findChildElem('hide').domElem;

            if(child.hasClass('e-accordion__more_view_default'))
            {
                child.removeClass('e-accordion__more_view_default');
                child.addClass('e-accordion__more');
            }
            else
            {
                child.removeClass('e-accordion__more');
                child.addClass('e-accordion__more_view_default');
            }
        }
    }, {
        onInit: function () {

            this._domEvents().on('click', this.prototype._onClick);
        }
    }));

});
