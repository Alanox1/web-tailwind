import { IconType } from 'react-icons';

export interface Icono {
  icono: IconType;
  selected : string;
  handleClick : () => void;
  mostrarTriangulo : () => void;
}

export interface Image {
  img : string
}

export interface Visible {
  visible : string
}