export const MyFavouriteDishes = ({ dishes }) => {
  //   const dishes = [
  //     { id: 1, dish: "burger" },
  //     { id: 2, dish: "pizza" },
  //     { id: 3, dish: "spaghetti" },
  //   ];
  return (
    <>
      <h2>My Favourite Dishes:</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>{dish.dish}</li>
        ))}
      </ul>
    </>
  );
};
