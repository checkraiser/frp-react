'use strict';

var React = require('react');
var CurrencyComponent = require('./currency-component.react');
var QuantityComponent = require('./quantity-component.react');
var OrderInfoComponent = require('./order-info-component.react');

var OrdersComponent = React.createClass({
  render: function(){
    return (
      <div>
        <CurrencyComponent />
        <QuantityComponent />
        <OrderInfoComponent />
      </div>
    );
  }
});

module.exports = OrdersComponent;
