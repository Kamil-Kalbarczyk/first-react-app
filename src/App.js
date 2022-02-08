import { MyName } from "./MyName";
import { Contact } from "./Contact";

function App() {
  return (
    <>
      <MyName name="Kamilos" surname="Kalbar" />
      <MyName name="Maciek" />
      <Contact
        contact={{
          phone: "111 222 333",
          address: {
            street: "Słowackiego",
            city: "Gdańsk",
            number: 37,
          },
          email: "moj@email.pl",
        }}
      />
    </>
  );
}

export default App;
