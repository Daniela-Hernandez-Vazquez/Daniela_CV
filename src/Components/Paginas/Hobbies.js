import React from 'react'
import Image from './Images/peli2.jpg'
import Image2 from './Images/musi2.jpg'
import Image3 from './Images/caminar1.jpg'
import Image4  from './Images/dormir2.jpg'


export const Hobbies = () => {
  return (
    <div>Hobbies

<div id='Image'>
<h3><span class="badge text-bg-danger">Ver Peliculas </span></h3>
<img src={Image} width="350" height="350"/>
<br></br>
<h3><span class="badge text-bg-danger">Escuhar musica</span></h3>
<img src={Image2} width="450" height="450"/>
<br></br>
<h3><span class="badge text-bg-danger">Salir a caminar</span></h3>
<img src={Image3} width="450" height="450"/>
<br></br>
<h3><span class="badge text-bg-danger">Dormir</span></h3>
<img src={Image4} width="450" height="450"/>

</div>
    </div>
  )
}
