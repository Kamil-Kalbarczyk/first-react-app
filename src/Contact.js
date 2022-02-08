import "./Contact.css";

export const Contact = (props) => {
  const tittleStyle = {
    color: "orange",
    fontSize: "20px",
  };
  return (
    <>
      <div>
        <h5 style={tittleStyle}>Tel</h5>
        <h6 style={{ color: "red", fontWeight: "normal" }}>
          {props.contact.phone}
        </h6>
      </div>
      <div>
        <h5 className="title">Adres</h5>
        <h6>
          ul. {props.contact.address.street} {props.contact.address.number}
        </h6>
        <h6>{props.contact.address.city}</h6>
      </div>
      <div>
        <h5 className="title">Email</h5>
        <h6>{props.contact.email}</h6>
      </div>
    </>
  );
};
