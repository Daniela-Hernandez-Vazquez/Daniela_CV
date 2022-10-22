import React from 'react'
import { Carrucel } from '../Carrucel/Carrucel'

export const Domicilio = () => {
  return (
    <div>Domicilio
      <br></br>
      <br></br>
      <div>
      <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Estado</th>
      <th scope="col">Municipio </th>
      <th scope="col">Colonia</th>
      <th scope="col">Calle</th>
      <th scope="col">Manzana</th>
      <th scope="col">Lote</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chiapas </th>
      <td>Comitan de Dominguez</td>
      <td>Col.Valle Balun Canan</td>
      <td>Av. Venustiano Carranza</td>
      <td>31</td>
      <td>06</td>
     
    </tr>
  </tbody>
</table>

<Carrucel/>
</div>


    </div>
  )
}
