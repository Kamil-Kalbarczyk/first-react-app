import { MyName } from "./MyName";
import { Contact } from "./Contact";
import { MyFavouriteDishes } from "./MyFavouriteDishes";

export const AboutMe = () => (
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
    <MyFavouriteDishes
      dishes={[
        { id: 1, dish: "burger" },
        { id: 2, dish: "pizza" },
        { id: 3, dish: "spaghetti" },
      ]}
    />
  </>
);
