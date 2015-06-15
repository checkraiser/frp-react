var React = require('react/addons');


var SpotContext = require('./contexts/spot-context');
var MarginContext = require('./contexts/margin-context');
var OrdersContext = require('./contexts/orders-context');

var SpotComponent = require('./components/spot-component.react');
var MarginComponent = require('./components/margin-component.react');
var OrdersComponent = require('./components/orders-component.react');


if (typeof window !== 'undefined') {
    var Routie = require('routie');

    Routie({
        '': function(){
            render(SpotComponent, SpotContext);
        },
        '/margin': function(){
            render(MarginComponent, MarginContext);
        },
        '/orders': function(){
            render(OrdersComponent, OrdersContext);
        }
    })

    var render = function(component, context){
        var ApplicationElement = React.createFactory(component);
        React.render(context(ApplicationElement), document.getElementById('spotapp'));
    }


    render(SpotComponent, SpotContext);


    window.React = React; // export for http://fb.me/react-devtools
    window.Perf = React.addons.Perf;
}
