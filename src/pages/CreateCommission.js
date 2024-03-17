import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TextField from "@mui/material/TextField";

import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CreateCommission() {
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
        Create a Commission
      </Typography>
      <Typography variant="subtitle2" color={"primary"} gutterBottom>
        Fill in all the details and get a quote.
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          //   onChange={(e) => setTitle(e.target.value)}
          label="First Name"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          //   error={titleError}
        />
        <TextField
          //   onChange={(e) => setDescription(e.target.value)}
          label="Last Name"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          //   error={descriptionError}
        />
        <TextField
          //   onChange={(e) => setColors(e.target.value)}
          label="Email Address"
          variant="outlined"
          type="email"
          fullWidth
          required
          margin="normal"
          //   error={colorsError}
        />
        <Box sx={{ minWidth: 120 }} margin="normal">
          <FormControl fullWidth>
            <InputLabel>How are you supplying the models?</InputLabel>
            <Select
              required
              //   value={supply}
              label="Level"
              //   onChange={(e) => setSupply(e.target.value)}
            >
              <MenuItem value={10}>Client Supply</MenuItem>
              <MenuItem value={20}>Studio Supply (85% of RRP)</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box m={2}>
          <Typography variant="body1">
            {" "}
            Please Note In your message please send over a list of models
            EXACTLY as laid out in our format below and we will get a quote over
            to you. Please let us know model numbers, type, your chosen painting
            level and basing level, if Siege Studios are supplying models and
            finally if we are building and cleaning them. To add an additional
            service to your model simply include any of the following on that
            line: Freehand, Converting, Magnetising, Sculpting or Transfers. We
            also require in your message further information on each additional
            service. For example: "I would like the land raider to have a
            freehanded Emperor on the side" . This helps us quote you
            accurately, so please be as specific as possible. Please note we do
            not paint characters to bronze level - (silver level minimum)
            Example of how to write your Siege Studios model list: 1 x Primaris
            Captain, Gold Painting, Gold Basing, Siege Supply, Sculpting,
            Building & Cleaning. 10 x Intercessors, Silver Painting, Bronze
            Basing, Converting, Client Supply, Building & cleaning. 1 x Land
            Raider, Silver Painting, No Basing, Freehand, Client Supply,
            Building & Cleaning.
          </Typography>
        </Box>
        <TextField
          //   onChange={(e) => setColors(e.target.value)}
          label="Commission Details"
          variant="outlined"
          fullWidth
          multiline
          rows={10}
          required
          margin="normal"
          //   error={colorsError}
        />
        <TextField
          //   onChange={(e) => setColors(e.target.value)}
          label="Discount Code"
          variant="outlined"
          fullWidth
          margin="normal"
          //   error={colorsError}
        />
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
