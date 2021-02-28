var MyClass = function(title) {
    this.title = title;
    var privateValue = 'secret';

    this.tellTitle = function () {
        console.log(this.title);
        console.log(this);
    };

    function privateFunction() {
        console.log(privateValue);
        console.log('This is', this); 
    };

    this.runPrivate = function() {
        privateFunction();
    };

    this.runPrivateWithCall = function() {
        privateFunction.call(this);
        privateFunction.apply(this, []);
    };
};