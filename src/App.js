import { MyName } from "./MyName";
import { Contact } from "./Contact";
import { Wrapper } from "./Wrapper";

function App() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default App;
