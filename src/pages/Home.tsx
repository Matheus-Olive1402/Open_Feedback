import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import illustrationImg from '../assets/images/illustration.svg';

//antiga logo
//import logoImg from '../assets/images/logo.svg';
import newlogo from '../assets/images/newlogo.svg';

import googleIconImg from '../assets/images/google-icon.svg';

import { database } from '../services/firebase';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('');

  //função para verificar, 1 se tiver usuario google ir para nova sala 2 caso não esperar o singGoogle para ir na nova sala
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new');
  }
  
  // função para ir na info
  async function handleJoinInfo(){
    history.push('/info');
  }

  //fazer um pesquisa no input para procurar a sala apos aperta o botão 'entrar na sala'
  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed.');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }
/*
ClassName main-content -> no seu button tem um espaço em caracter especial 'alt+255'
*/
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas para feedback</strong>
        <p>Um projeto simples, para poder receber feedback usando a sua conta google</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={newlogo} alt="open_feedback" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
             Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input 
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
          <form onSubmit={handleJoinInfo}>
            <Button type="submit">
              Sobre
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}