import styled from "styled-components";

export const ContactStyled = ({ contact: { phone, address, email } }) => {
  // style z Styled-Components

  const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: palevioletred;
    color: white;
  `;

  const TittleStyle = styled.h5`
    color: orange;
    font-size: 20px"
  `;

  const DetailsContact = styled.h6`
    color: red;
    font-weight: normal;
  `;

  const handleOnClick = () => {
    alert(
      `Dziękuję! Zapraszam do mnie: ${address.city}, ulica ${address.street}, ${address.number}`
    );
  };

  return (
    <ContactContainer>
      <div>
        <TittleStyle>Tel</TittleStyle>
        <DetailsContact>{phone}</DetailsContact>
      </div>
      <div>
        <TittleStyle>Adres</TittleStyle>
        <DetailsContact>
          ul. {address.street} {address.number}
        </DetailsContact>
        <DetailsContact>{address.city}</DetailsContact>
      </div>
      <div>
        <TittleStyle>Email</TittleStyle>
        <DetailsContact>{email}</DetailsContact>
      </div>
      <button onClick={handleOnClick}>Wyślij</button>
    </ContactContainer>
  );
};
