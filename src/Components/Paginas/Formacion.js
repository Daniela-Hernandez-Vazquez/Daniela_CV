import React from 'react'
import Imagen from './Images/tec.jpg'
import Imagen2 from './Images/cbtis.jpg'

export const Formacion = () => {
  return (
    <div>Formacion


<br></br>
      <br></br>

<table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">Grado Academico</th>
      <th scope="col">Nombre de la Escuela </th>
      <th scope="col">Periodo</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Kinder</th>
      <td>Niño Artillero Narciso Mendoza</td>
      <td>2004-2007</td>
      
    </tr>
    <tr>
      <th scope="row">Primaria</th>
      <td>Mtro. Esteban Alfonzo</td>
      <td>2007-2013</td>
     
    </tr>

    <tr>
      <th scope="row">Secundaria</th>
      <td>Tecnica Numero 5</td>
      <td>2013-2016</td>
     
    </tr>
    
    <tr>
      <th scope="row">Preparatoria</th>
      <td>CBTis 108</td>
      <td>2016-2019</td>
     
    </tr>
    <tr>
      <th scope="row">Universidad</th>
      <td>Instituto Tecnologico de Comitan </td>
      <td>2019--</td>
     
    </tr>
  </tbody>
</table>
<br></br>
<br></br>
<h3><span class="badge text-bg-danger">Instituto Tecnologico de Comitan </span></h3>
<br></br>

<div id='Imagen'>
  <img src={Imagen} width="250" height="250"/>
<h3><span class="badge text-bg-danger">CBTis 108</span></h3>
<img src={Imagen2} width="250" height="250"/>
<br></br>

</div>

    </div>
  )
}
