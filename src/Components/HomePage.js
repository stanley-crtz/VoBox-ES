import React from 'react'

export const HomePage = () => {
    return (
        <div className='HomePage'>
            <cite>
                "No puede haber mayor regalo que el dar tiempo y energía en ayudar a los demás sin esperar nada a cambio." Nelson Mandela
            </cite>
            <div className='HomePage_Contents'>
                <div className='Experience'>
                    <h1>"El Voluntariado es un Estilo de Vida"</h1>
                    <p>Ser voluntaria/o es un estilo de vida que conduce cada una de mis acciones, dentro y fuera de casa, teniendo como principios básicos la solidaridad,aceptar y comprender que existen diferentes puntos de vista, pero sobre todo la motivación de llegar a creer que cada uno de nosotros tiene el poder interior necesario para transformar las debilidades en oportunidades,así como cambiar la realidad negativa de nuestro entorno.</p>
                </div>
                <div className='Anecdote'>
                    <iframe
                        src="https://www.youtube.com/embed/cyAO_M09aF8"
                        frameborder="0"
                        title = 'Youtube'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}
