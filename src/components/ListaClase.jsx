import React from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.icono = props.icono;
    this.titulo = props.titulo;
  }
  render() {
    return (
      <div>
        {this.titulo} - {this.icono}
      </div>
    );
  }
}
export default ListaClase;
