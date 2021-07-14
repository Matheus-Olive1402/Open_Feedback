import {ButtonHTMLAttributes} from 'react'

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes <HTMLButtonElement> &{
    isOutlined? : boolean
};

export function Button({isOutlined = false, ...props} : ButtonProps){    
    return(
        <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
    );
}


// || caso não exista colocar o default

/*
trabalhar com array
type ButtonProps = {
    text?: string[];
}

*/