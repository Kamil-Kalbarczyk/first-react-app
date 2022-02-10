export const MyName = (props) => {
  console.log(props);

  if (props.surname) {
    return (
      <>
        <h1>Moje imię to {props.name}</h1>
        <h2>A moje nazwisko to {props.surname}</h2>
      </>
    );
  } else {
    return <h1>Moje imię to {props.name}!</h1>;
  }
};
