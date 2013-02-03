/**
 * Created with JetBrains WebStorm.
 * User: Ped
 * Date: 03/02/2013
 * Time: 16:14
 * To change this template use File | Settings | File Templates.
 */
var pedStore = pedStore || {};

pedStore.CartItem = function(item){
    var self = this;
    self.sku = item.sku || "";
    self.quantity = item.quantity || 1;

    return self;

};

pedStore.Cart = function(){
    var self = this;
    var items = [];

    self.addItem = function(item){
        var existing = self.findBySku(item.sku);
        if(existing){
            existing.quantity += 1;
        }else{
            var newItem = new pedStore.CartItem(item);
            self.items.push(newItem);
        }
        return existing;

    };

    self.itemCount = function(){
        return self.items.length;
    };

    self.empty = function(){

        self.items = [];
    };

    self.findBySku = function(sku){
        return ko.utils.arrayFirst(self.items, function(item){
            return item.sku === sku;
        });

    };


    return self;
};