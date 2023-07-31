var name = "windowsName";

var a = {
    name : "Cherry",

    func1: function () {
        console.log(this.name)     
    },

    func2: function () {
        console.log(this);
        setTimeout(function () {
            console.log(this);
        },100);
        setTimeout(()=>{console.log(this)},100)
    }

};

a.func2() 

