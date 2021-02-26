// create a module that returns the current date and time:
// you have to put it in a different module and then import it using 'require'
exports.myDateTime = function(){
    return Date();
} // you use the 'exports' keyword to make properties and methods available outside the module file.