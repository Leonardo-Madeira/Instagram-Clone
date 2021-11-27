import '../styles/header.scss'
import {useEffect} from 'react'
import {auth} from './firebase.js'

export function Header(props) {

    useEffect(() => {

    }, [])

    function abrirModalCriarConta(e){
        e.preventDefault();

        let modal = document.querySelector('.modalCriarConta');
        modal.style.display="block";
    }

    function fecharModalCriarConta(){
        let modal = document.querySelector('.modalCriarConta');
        modal.style.display="none";
    }

    function criarConta(e){
        e.preventDefault()
        
        let email = document.getElementById('email-cadastro').value
        let username = document.getElementById('nome-cadastro').value
        let senha = document.getElementById('senha-cadastro').value

        //criar conta firebase
        auth.createUserWithEmailAndPassword(email,senha)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName:username
            })
            alert('Conta Criada Com SUCESSO!')
            let modal = document.querySelector('.modalCriarConta');
            modal.style.display="none";

        }).catch((error)=>{
             alert(error.message)
        })
    }
    return(
        <div className="header">

            <div className="modalCriarConta">
                <div className="formCriarConta">
                    <div onClick={()=>fecharModalCriarConta()} className="closeModalCriar">X</div>
                    <h2>Criar Conta</h2>
                    <form onSubmit={(e)=>criarConta(e)}>
                        <input id="email-cadastro" className="createEmail" type="text" placeholder="Email" />
                        <input id="nome-cadastro" className="createName" type="text" placeholder="Nome" />
                        <input id="senha-cadastro" className="createPassword" type="password" placeholder="Senha" />
                        <button>Criar</button>
                    </form>
                </div>
            </div>

            <div className="center">
  
                <div className="headerLogo">
                <a href=""><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" /></a>
                </div>
    
                {
                (props.user)?
                <div className="Logadoinf">
                    <span>Olá <strong>{props.user}</strong></span>
                    <a href="#">Postar</a>  
                </div>
                :
                <div className="headerloginForm">
                    <form action="">
                    <input className="email" type="text" placeholder="Login" />
                    <input className="senha" type="password" placeholder="Senha" name="" id="" />
                    <button>Logar</button>

                    <span className="createCount">
                        <a onClick={(e)=>abrirModalCriarConta(e)} 
                            href="#">
                            Criar Conta
                        </a>
                    </span>
                    </form>
                </div>
                }
            
            </div>
            
        </div>
    );
}