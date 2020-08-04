import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf3_MOm0aKlkhPBPKHbHd4EE7hyBdejaJrVA&usqp=CAU" alt="Diogo Santos"/>
                        <div>
                            <strong>Elon Musk</strong>
                            <span>Química</span>
                        </div>
                        
                    </header>
                    <p>
                        Entusiasta das Melhores tecnologias de química avançada.
                        <br/><br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas 
                        através de experiências. Mais de 200.000 já passram por 
                        uma das minhas explosões.
                    </p>
                    
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em Contato
                        </button>
                    </footer>
                </article>

    )
}

export default TeacherItem;