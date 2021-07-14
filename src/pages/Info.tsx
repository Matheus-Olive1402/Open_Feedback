import {Link} from 'react-router-dom';

import '../styles/info.scss';

export function info() {



 return (
    <div id="page-info">
        <header>
        <form>
            <h1>Sobre eu</h1>
            <h3><Link to="/" style={{color: '#fff'}}> voltar </Link></h3>    
        </form>
        </header>
        <main>
            <h3>Olá, tudo bem ? espero que sim 😁, meu nome é Matheus sou um programador junior e é um prazer você acessar meu site.</h3>
            <p> </p>
            <h3>A ideia do site é fruto de um workshop que participei e gostei da ideia, com isso quis melhorar o site.</h3>
            <h3>O propósito do site é em si, criar salas com sua conta google (essa autenticação é realizada pelo firebase)
            ou entrar em salas com o código da sala, para realizar perguntas ou da feedback tanto para mim, quanto para outras pessoas.</h3>
            <h3>Ao criar a sala, no canto superior direito, existe um código com um traço e 20 caracteres e com ele você passa para outros usuário,
             logo eles vão conseguir acessar a sala com esse código, caso você queira encerrar a sala ou apagar alguma interação não desejada,
             basta colar '/admin' antes de '/room' na URL, ai você acessar o admin do canal.</h3>
            <p> </p>
            <h3>Ficha técnica:</h3>
            <h3>Concepção e Programador: Matheus de oliveira</h3>
            <h3>Linguagem: JavaScript (com typescript)</h3>
            <h3>Folha de estilo: SASS</h3>
            <h3>Framework: ReactJS</h3>
            <h3>Baas: Firebase (back-end como serviço)</h3>
            <p> </p>
            <h3>Estou sempre querendo aprender e busco oportunidades de me aperfeiçoar profissionalmente, estou sempre aberto a sugestões e dicas 😁.</h3>
            <h3>Meu contato: matheus.olive1402@hotmail.com ou meu Github:  <a href="https://github.com/Matheus-Olive1402">Matheus-Olive1402</a> </h3>

        </main>
    </div>
  );
}