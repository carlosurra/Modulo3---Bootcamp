class Click {
    constructor() {
        this.handlers = []; // observers
    }

 
    subscribe (fn) {
        this.handlers.push(fn);
    }
 
    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    }
 
    fire(o, thisObj) {
        var scope = thisObj;
        this.handlers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}
 


 
    var clickHandler = function(item) {   
        console.log("fired: " + item);
    };
    var clickHandler2 = function(item) { 
        console.log("fired second: " + item);

    };


    
    var click = new Click();
 
    click.subscribe(clickHandler);
    click.subscribe(clickHandler2);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
 

