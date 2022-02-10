import { MyName } from "./MyName";
import { Contact } from "./Contact";
import { MyFavouriteDishes } from "./MyFavouriteDishes";
import { ContactStyled } from "./ContactStyled";

export const AboutMe = () => {
  // przykład jak można zapisać wczęsniej dane do zmiennej i poźniej przekazac je do propsa (ContactStyled - poniżej w JSX)
  const contactDetails = {
    phone: "111 222 333",
    address: {
      street: "Słowackiego",
      city: "Gdańsk",
      number: 37,
    },
    email: "moj@email.pl",
  };
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
      <MyFavouriteDishes
        dishes={[
          { id: 1, dish: "burger" },
          { id: 2, dish: "pizza" },
          { id: 3, dish: "spaghetti" },
        ]}
      />
      <ContactStyled contact={contactDetails} />
    </>
  );
};
