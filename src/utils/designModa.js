// 设计模式-工厂模式
class Plant {
    constructor (name) {
        this.name = name
        console.log(name)
    }
    grow() {
        console.log('I have the grow function~')
    }
}

class Apple extends Plant {
    constructor (name, color) {
        super(name)
        this.color = color
        console.log(this.color)
    }
}

class Pear extends Plant {
    constructor (name, color) {
        super(name)
        this.color = color
        console.log(this.color)
    }
}

// 创建基类Factory
class Factory {
    create () {}
}

// 子类继承父类并实现create()方法
class AppleFactory extends Factory {
    static create () {
        return new Apple('apple', 'red')
    }
}
class PearFactory extends Factory {
    static create () {
        return new Pear('pear', 'yellow')
    }
}

const setting = {
    apple: AppleFactory,
    pear: PearFactory
}

let apple=new settings['apple']().create();
console.log(apple);
let orange=new settings['orange']().create();
console.log(orange);

/**
 * 优点：不动原逻辑，继续拓展新的功能，提高效率。
 */

 // 2. 单例模式: 保证实例只有一个
 const single = (function () {
    let instance
    // create Constructor
    function Window(name) {
        this.name = name
    }
    // 获取实例
    function getInstance (name) {
        if (!instance) {
            instance = new Window(name)
        }
        return instance
    }

    return {
        getInstance: getInstance
    }
})()

// 3. 工厂模式
//安全模式创建的工厂方法函数
let UserFactory = function(role) {
    if(this instanceof UserFactory) {
      var s = new this[role]();
      return s;
    } else {
      return new UserFactory(role);
    }
  }
    //工厂方法函数的原型中设置所有对象的构造函数
UserFactory.prototype = {
    SuperAdmin: function() {
        this.name = "超级管理员",
        this.viewPage = ['首页', '通讯录', '发现页', '应用数据', '权限管理']
    },
    Admin: function() {
        this.name = "管理员",
        this.viewPage = ['首页', '通讯录', '发现页', '应用数据']
    },
    NormalUser: function() {
        this.name = '普通用户',
        this.viewPage = ['首页', '通讯录', '发现页']
    }
}
  
//调用
let superAdmin = UserFactory('SuperAdmin');
let admin = UserFactory('Admin') 
let normalUser = UserFactory('NormalUser')

/**
 * 外观模式案例：  绑定事件
 */
function addEvent (element, event, hander) {
    if (element.addEventListener) {
        element.addEventListener(event, hander, false)
    } else if (element.attachEvent) {
        element.attachEvent('on'+event, hander)
    } else {
        element['on'+event] = hander
    }
}

function removeEvent (element, event, hander) {
    if (element.removeEventListener) {
        element.removeEventListener(event, hander, false)
    } else if (element.detachEvent) {
        element.detachEvent('on'+event, hander)
    } else {
        element['on'+event] = null
    }
}

/**
 * 代理模式案例： 
 */
// 甲方
class StockPriceApi {
    getValue = function (stock, callback) {
        console.log('calling extern Api....')
        setTimeout(() => {
            switch(stock){
                case 'GOOGL':
                    callback('$1265.23');
                    break;
                case 'AAPL':
                    callback('$287.05');
                    break;
                case 'MSFT':
                    callback('$173.70');
                    break;
                default:
                    callback('');
            }
        })
    }
}
// 中介
class StockPriceApiProxy {
    // 设置缓存对象
    constructor () {
        this.cache = {}
        this.realApi = new StockPriceApi()
    }

    getValue = (stock, callback) => {
        if (this.cache[stock]) {
            callback(this.cache[stock])
        } else {
            this.realApi.getValue(stock, (price) => {
                this.cache[stock] = price
                callback(price)
            })
        }
    }
}
const api = new StockPriceApiProxy()

api.getValue('GOOGL', (price) => { console.log(price) });
api.getValue('AAPL', (price) => { console.log(price) });
api.getValue('MSFT', (price) => { console.log(price) });

setTimeout(() => {
  api.getValue('GOOGL', (price) => { console.log(price) });
  api.getValue('AAPL', (price) => { console.log(price) });
  api.getValue('MSFT', (price) => { console.log(price) });
}, 3000)