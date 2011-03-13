/*
---
description: One checkbox to rule them all

license: MIT-style

authors:
- Amitay Horwitz

requires:
- core/1.3.1: '*'

provides:
- CheckboxGroup

...
*/

(function($) {

this.CheckboxGroup = new Class({

    Implements: Events,

    initialize: function(master, slaves) {
        this.master = $(master);
        this.slaves = $$(slaves);
        var that = this;
        this.master.addEvent('click', this.onMasterClick.bind(this));
        this.slaves.addEvent('click', function() {
            that.onSlaveClick(this);
        });
    },

    onMasterClick: function() {
        this.slaves.set('checked', this.master.get('checked')).fireEvent('change');
        this.fireEvent('masterClick');
    },

    onSlaveClick: function(slave) {
        this.master.set('checked', this.slaves.every(function(el) { return el.get('checked'); }));
        this.fireEvent('slaveClick', slave);
    }

});

})(document.id);