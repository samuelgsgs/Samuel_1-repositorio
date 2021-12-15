import React from 'react';
import ComponenteLista from './ComponenteLista';
export function Lista(props) {
  const listaComponentes = [];

  if (props.elementos !== undefined) {
    for (let i = 0; i < props.elementos.length; i++) {
      listaComponentes.push(<ComponenteLista texto={props.elementos[i]} />);
    }
  }

  return (
    <div>
      {props.titulo} - {props.icono}
      <ul>
        <ComponenteLista texto="Elemento 1" />
        <ComponenteLista texto="Elemento 2" />
        <ComponenteLista texto="Elemento 3" />
        {listaComponentes}
      </ul>
    </div>
  );
}
