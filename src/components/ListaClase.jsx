import React from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.titulo = props.titulo;
    this.icono = props.icono;
    this.elementos = props.elementos;
    this.listainicio = [];

    if (this.elementos !== undefined) {
      for (let i = 0; i < this.elementos.length; i++) {
        this.listainicio.push(
          <ComponenteListaClase
            done={this.elementos[i].done}
            texto={this.elementos[i].texto}
            prioridad={this.elementos[i].prioridad}
          />
        );
      }
    }
    this.state = { listacomps: this.listainicio };
    this.valorTextInput = React.createRef();
    this.valorPrioritySelect = React.createRef();
  }

  addElement() {
    const newLista = this.state.listacomps.concat(
      <ComponenteListaClase
        texto={this.valorTextInput.current.value}
        prioridad={this.valorPrioritySelect.current.value}
      />
    );
    this.setState({ listacomps: newLista });
  }

  render() {
    return (
      <div>
        {this.titulo} - {this.icono}
        <ul>
          {this.state.listacomps}
          <li>
            <input
              ref={this.valorTextInput}
              type="text"
              placeholder="Introduce una pieza"
            />
            <br />
            <select ref={this.valorPrioritySelect}>
              <option value="alta">Prioridad Alta</option>
              <option value="media">Prioridad Media</option>
              <option value="baja">Prioridad Baja</option>
            </select>
            <button onClick={this.addElement.bind(this)}>añadir</button>
          </li>
        </ul>
      </div>
    );
  }
}
export default ListaClase;
