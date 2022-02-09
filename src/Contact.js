import "./Contact.css";
/* 
Style zaimportowane do komponentów, zostaną pobrane przez aplikację DOPIERO w momencie renderowania danego komponentu.
Kiedy już zostaną pobrane przez aplikację, będą one dostępne globalnie dla każdego komponentu (mimo, że w kodzie zostały zaimportowane tylko w jednym komponencie). Nie jest to często porządany efekt, poneważ moze dochodzić do nadpisywania (np. w przypadku tych samych nazw klas).
*/

export const Contact = ({ contact: { phone, address, email } }) => {
  // destukturyzacja props
  /* const {
    contact: { phone, address, email },
  } = props;
  */

  // style
  const tittleStyle = {
    color: "orange",
    fontSize: "20px",
  };

  const handleOnClick = () => {
    alert(
      `Dziękuję! Zapraszam do mnie: ${address.city}, ulica ${address.street}, ${address.number}`
    );
  };

  return (
    <div className="contact-container">
      <div>
        <h5 style={tittleStyle}>Tel</h5>
        <h6 style={{ color: "red", fontWeight: "normal" }}>{phone}</h6>
      </div>
      <div>
        <h5 className="title">Adres</h5>
        <h6>
          ul. {address.street} {address.number}
        </h6>
        <h6>{address.city}</h6>
      </div>
      <div>
        <h5 className="title">Email</h5>
        <h6>{email}</h6>
      </div>
      <button onClick={handleOnClick}>Wyślij</button>
    </div>
  );
};
