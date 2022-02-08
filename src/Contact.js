import "./Contact.css";
/* 
Style zaimportowane do komponentów, zostaną pobrane przez aplikację DOPIERO w momencie renderowania danego komponentu.
Kiedy już zostaną pobrane przez aplikację, będą one dostępne globalnie dla każdego komponentu (mimo, że w kodzie zostały zaimportowane tylko w jednym komponencie). Nie jest to często porządany efekt, poneważ moze dochodzić do nadpisywania (np. w przypadku tych samych nazw klas).
*/

export const Contact = (props) => {
  // destukturyzacja props
  const {
    contact: { phone, address, email },
  } = props;
  // style
  const tittleStyle = {
    color: "orange",
    fontSize: "20px",
  };
  return (
    <>
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
    </>
  );
};
