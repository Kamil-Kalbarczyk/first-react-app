import {Typography, List, ListItem} from '@mui/material';

export const MyFavouriteDishes = ({ dishes }) => {
  //   const dishes = [
  //     { id: 1, dish: "burger" },
  //     { id: 2, dish: "pizza" },
  //     { id: 3, dish: "spaghetti" },
  //   ];
  return (
    <>
      <Typography variant='h3'>My Favourite Dishes:</Typography>
      <List>
        {dishes.map((dish) => (
          <ListItem key={dish.id}>{dish.dish}</ListItem>
        ))}
      </List>
    </>
  );
};
