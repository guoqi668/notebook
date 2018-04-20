//继承
// function Person() {
//     this.name= 'cj';
// }
// function myCreate(){
//     Person.call(this);
// }
// var p =new Person();
// var c = new myCreate();
// console.log(c.name); // cj
// c.name ='cherish';
// console.log(c.name); // cherish
// console.log(p.name);// cj;


// 创建父类
function Person() {
    this.name = 'he';
}
Person.prototype.headCount = 1;
Person.prototype.eat = function() {
    console.log('eating...');
}
// 创建子类
function Child() {

}

// 继承
Child.prototype = Object.create(Person.prototype);
console.log(Child.prototype); // Person;
console.log(Child.prototype.constructor); // function person(){} 应该是child
Child.prototype.constructor = Child;

Child.prototype.language = 'java';
Child.prototype.work = function() {
    console.log('writing coding ...');
}
var java = new Child();
java.eat();
console.log(java.language); // java

