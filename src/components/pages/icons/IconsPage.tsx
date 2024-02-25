import { Icono } from "../../../types"

const IconsPage: React.FC<Icono> = ({ icono, selected, handleClick, mostrarTriangulo }) => {
  const Icono = icono
  return (
    <Icono  className={`text-3xl text-white lg:text-4xl ${selected}`} 
            onClick={() => {
            handleClick()
            mostrarTriangulo()
            } }
    />
  )
}

export default IconsPage