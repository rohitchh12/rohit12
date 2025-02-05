import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BackImage from "./assets/back.jpg";
import Home from "./pages/Home";

function App() {
  return (
    <div className="relative h-screen w-screen">
      <div
        style={{
          backgroundImage: `url(${BackImage})`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0"
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      
      <div className="relative z-10">
        <Header />
        <Main />
        {/*<Footer />*/}
      </div>
    </div>
  );
}

export default App;
