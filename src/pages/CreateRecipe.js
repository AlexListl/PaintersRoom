import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Create() {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [colors, setColors] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [colorsError, setColorsError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setColorsError(false);
    setDescriptionError(false);

    !title ? setTitleError(true) : console.log(title);
    !colors ? setColorsError(true) : console.log(colors);
    !description ? setDescriptionError(true) : console.log(description);
    !category ? setCategoryError(true) : console.log(category);

    if (title && colors && description && category) {
      fetch("http://localhost:8000/recipes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, description, colors, category }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container>
      <Typography
        variant="h5"
        component={"h2"}
        color={"textSecondary"}
        gutterBottom
      >
        Create a Paint Recipe
      </Typography>
      <Typography variant="subtitle2" color={"primary"} gutterBottom>
        Add all colors of the recipe.
      </Typography>

      <form noValidate autoComplete="Off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Recipe Title"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          error={titleError}
        />
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          multiline
          rows={4}
          error={descriptionError}
        />
        <TextField
          onChange={(e) => setColors(e.target.value)}
          label="Colors"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          error={colorsError}
        />

        <FormControl margin="normal" error={categoryError}>
          <FormLabel>Category</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="metal"
              control={<Radio />}
              label="Metallic"
            />
            <FormControlLabel value="cloth" control={<Radio />} label="Cloth" />
            <FormControlLabel
              value="armour"
              control={<Radio />}
              label="Armour"
            />
            <FormControlLabel
              value="effect"
              control={<Radio />}
              label="Effect"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<ArrowForwardIosIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
