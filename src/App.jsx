import React from 'react';

import { Lista } from './components/Lista';
import ListaClase from './components/ListaClase';

export function App() {
  const elementos1 = [
    { done: false, texto: 'Hacer la compra', prioridad: 'alta' },
    { done: true, texto: 'Sacar al perro', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: false, texto: 'Tomates' },
    { done: true, texto: 'Queso' },
    { done: false, texto: 'Leche' },
  ];
  const elementos3 = [{ done: false, texto: 'Estudiar React.js' }];
  const elementos4 = [
    { done: false, texto: 'Carter', prioridad: 'alta' },
    { done: true, texto: 'Linea Escapes', prioridad: 'media' },
    { done: true, texto: 'Ruedas', prioridad: 'alta' },
    { done: false, texto: 'Tapones Antirrobo', prioridad: 'baja' },
  ];
  const elementos5 = [
    { done: true, texto: 'Insignia', prioridad: 'baja' },
    { done: true, texto: 'Carter', prioridad: 'alta' },
    { done: false, texto: 'Linea Escapes', prioridad: 'media' },
    { done: true, texto: 'Tapones Antirrobo', prioridad: 'baja' },
  ];
  const elementos6 = [
    { done: true, texto: 'Carter', prioridad: 'alta' },
    { done: false, texto: 'Linea Escapes', prioridad: 'media' },
    { done: false, texto: 'Tapones Antirrobo', prioridad: 'baja' },
    { done: true, texto: 'Parasol', prioridad: 'baja' },
  ];

  return (
    <div>
      <h1>Piezas del Coche</h1>
      <ListaClase titulo="Comprar BMW" icono="🚗" elementos={elementos4} />
      <ListaClase titulo="Comprar Mercedes" icono="🏎️" elementos={elementos5} />
      <ListaClase titulo="Comparar Audi" icono="🏆" elementos={elementos6} />

      <h1>Listas de tareas</h1>
      <ListaClase titulo="Tareas de la casa" icono="♥" elementos={elementos1} />
      <Lista titulo="Lista de la compra" icono="✌" elementos={elementos2} />
      <Lista titulo="Todos del curso" icono="🙌" elementos={elementos3} />
    </div>
  );
}
