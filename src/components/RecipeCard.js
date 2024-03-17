import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { teal } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function getRandomImage() {
  // Assuming you have an array of image filenames in your images folder
  const images = [
    "IMG_1215.JPG",
    "Best.jpeg",
    "Stern.JPEG",
    "Close Up.JPEG",
    "Flamer.JPEG",
    "Plasma.JPEG",
    "Sword.JPEG",
    "Terminator.JPEG",
    "Jump.JPEG",

    // Add more image filenames here
  ];

  // Generate a random index to pick a random image from the array
  const randomIndex = Math.floor(Math.random() * images.length);

  // Return the path to the randomly selected image
  return `/images/${images[randomIndex]}`;
}

const RecipeCard = ({ recipe, handleRecipeDelete }) => {
  const randomImage = getRandomImage();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe">
            AL
          </Avatar>
        }
        action={
          <IconButton
            aria-label="delete"
            onClick={() => handleRecipeDelete(recipe.id)}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        }
        title={recipe.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="300"
        image={randomImage}
        alt="Deathwing Sergeant"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" noWrap>
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{ mr: "auto" }}>
          <FavoriteIcon />
        </IconButton>
        <Button size="small">See Recipe</Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
