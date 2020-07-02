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