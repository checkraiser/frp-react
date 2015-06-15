'use strict';

var React = require('react');
var CurrencyComponent = require('./currency-component.react');
var QuantityComponent = require('./quantity-component.react');
var OrderInfoComponent = require('./order-info-component.react');

var SpotComponent = React.createClass({
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

module.exports = SpotComponent;
