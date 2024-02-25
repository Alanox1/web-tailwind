interface TrianguloProps {
    visible: boolean;

}
const Triangulo: React.FC<TrianguloProps> = ({ visible  }) => (
    <div
      className="triangulo"
      style={
        {
          position: "absolute",
          width: 0,
          height: 0,
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderBottom: "22px solid white",
          margin: "auto",
          marginTop: "15px", 
          display : visible ? "block" : "none"
        }
      }
    />
  );

export default Triangulo