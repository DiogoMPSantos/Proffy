import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
        id: number,
        avatar: string,
        bio: string,
        cost: number,
        name: string,
        subject: string,
        whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher,
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({teacher}) =>{
    return (
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name}/>
                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                        
                    </header>
                    <p>
                        {teacher.bio}
                    </p>
                    
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ {teacher.cost}</strong>
                        </p>
                        <a href={`https://wa.me/${teacher.whatsapp}>`} type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em Contato
                        </a>
                    </footer>
                </article>

    )
}

export default TeacherItem;