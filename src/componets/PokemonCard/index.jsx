import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemonCard({name, image, types}) {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name+" | "+ types[1].type.name;
    }
    return types[0].type.name;
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
         {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         {typeHandler()}
        </Typography>
      </CardContent>
    </Card>
  );
}
