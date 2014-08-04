(function () {
    var old = document.createTextNode;
    if (!document.createTextNode.apply) {
        document.createTextNode = function (name) {
            return old(name);
        };
        document.createTextNode.apply = function (that, args) {
            return old(args[0]);
        };
    }
}());
(function () {
    var old = document.createElement;
    if (!document.createElement.apply) {
        document.createElement = function (name) {
            return old(name);
        };
        document.createElement.apply = function (that, args) {
            return old(args[0]);
        };
    }
}());
