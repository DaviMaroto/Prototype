const pessoa1 = {
    name: "Maroto",
    age: 21,
    job: "Programador"
}

const Pessoa = function(name, age, job){
    this.name = name
    this.age = age
    this.job = job
}

const pessoa2 = new Pessoa("João", 25, "Assistente")

console.log(pessoa2)

//Resultado
//Pessoa {name: 'João', age: 25, job: 'Assistente'}
//age : 25
//job : "Assistente"
//name : "João"
//[[Prototype]]
//: 
//Object
