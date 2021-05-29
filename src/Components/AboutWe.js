import React from 'react'
import icon_valores from '../Assets/Images/icon_valores.webp'
import icon_mision from '../Assets/Images/icon_mision.webp'
import icon_vision from '../Assets/Images/icon_vision.webp'

export const AboutWe = () => {
    return (
        <div className='AboutWe'>
            <h1>¿Que es VoBox?</h1>

            <p>El proyecto VoBox ES (Caja de voluntariado El Salvador) es un sistema creado con la finalidad de ofrecer un espacio para que las organizaciones salvadoreñas puedan publicar sus necesidades de voluntariado en las diferentes áreas de ayuda que ofrecen agilizando el registro, control y asignación, referente a la participación en las actividades de voluntariado publicadas.</p>

            <div className='Cards'>
                <div class="card">
                    <img src={icon_mision} alt='imagen mision'/>
                    <h3>Somos un medio que facilita a las personas empezar a ejercer actividades de voluntariado de las distintas indoles a nivel nacional.​</h3>

                </div>

                <div class="card">
                    <img src={icon_vision} alt='imagen vision' />
                    <h3>Convertirnos en un pilar del voluntariado alcanzando a todas las personas que necesiten de este servicio y aquellas que deseen formar parte de este servicio.​</h3>


                </div>

                <div class="card">
                    <img src={icon_valores} alt='imagen valores'/>
                    <ul><b>
                        <li>Respeto</li>
                        <li>Empatia</li>
                        <li>Igualdad</li>
                        <li>Paciencia</li>
                        <li>Altruismo</li>
                        <li>Solidaridad</li>
                        <li>Humanidad</li>
                        <li>Compromiso</li>
                        </b>
                    </ul>
                </div>
            </div>
        </div>
    )
}
