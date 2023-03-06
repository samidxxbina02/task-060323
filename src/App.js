import React from "react";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

const App = () => {
  const users = [
    { name: "John", lastName: "Doe", age: 30, id: 1 },
    { name: "Jane", lastName: "Doe", age: 25, id: 2 },
    { name: "Bob", lastName: "Smith", age: 40, id: 3 },
  ];
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
