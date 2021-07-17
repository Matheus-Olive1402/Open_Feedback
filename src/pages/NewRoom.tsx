import { Link, useHistory } from 'react-router-dom';
import {FormEvent, useState} from 'react';

import illustrationImg from '../assets/images/illustration.svg';

//antiga logo
//import logoImg from '../assets/images/logo.svg';
import newlogo from '../assets/images/newlogo.svg';

import {Button} from '../components/Button';
import {database} from '../services/firebase';
import {useAuth} from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom(){
    const {user} = useAuth()
    const [newRoom,setNewRoom] = useState('');
    const history = useHistory()

    async function handleCreateRoom(event: FormEvent){
        event.preventDefault();

        //caso for vazio
        if(newRoom.trim() === ''){
             return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })

        history.push(`/rooms/${firebaseRoom.key}`)
    }
    return(
        <div id="page-auth">
            <aside>
            <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas"/>
            <strong>Crie salas para feedback</strong>
            <p>Der Feedback ou mande perguntas em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                <img src={newlogo} alt="open_feedback" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input  
                        type="text"
                        placeholder="Nome da sala"
                        onChange={event => setNewRoom(event.target.value)}
                        value={newRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>

                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}