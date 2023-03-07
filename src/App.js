import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "linear-gradient(to right, lightblue, #fff)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <img
          src="https://www.merkur.de/bilder/2021/07/01/90835626/26432762-hortensie-mit-blauen-blueten-2p2tlF8PoRef.jpg"
          style={{
            height: "30vh",
            borderRadius: 20,
            boxShadow: "0 0 10px lightblue",
          }}
        />
      </div>
      <button
        style={{
          height: "6vh",
          width: "20vh",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "2vh",
          borderRadius: 20,
          borderWidth: 0,
          boxShadow: "0 0 10px lightblue",
          background: "linear-gradient( to right, #f2eb4f, #fbf9ca)",
        }}
        onClick={() => {
          alert("Hông có gì đâu, liu liu ^^!");
        }}
      >
        Bấm vô đây nè ^^
      </button>
    </div>
  );
}

export default App;
