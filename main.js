// criando uma classe

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }

    aniversario() {
        this.idade++;
        console.log(`Feliz aniversário! Agora eu tenho ${this.idade} anos.`);
    }
}

//   classes herdeiras


class Aluno extends Pessoa {
    constructor(nome, idade, turma) {
        super(nome, idade);
        this.turma = turma;
    }

    apresentacao() {
        console.log(`Olá, eu sou o aluno ${this.nome}, tenho ${this.idade} anos e estou na turma ${this.turma}.`);
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
    }

    apresentacao() {
        console.log(`Olá, eu sou o professor ${this.nome}, tenho ${this.idade} anos e leciono a disciplina de ${this.disciplina}.`);
    }
}

// instancias

const pessoa2 = new Pessoa("Maria", 30);
pessoa2.saudacao();

const aluno2 = new Aluno("Pedro", 18, "12B");
aluno2.saudacao();
aluno2.apresentacao(); 

const professor2 = new Professor("Carolina", 40, "História");
professor2.saudacao();
professor2.apresentacao();

