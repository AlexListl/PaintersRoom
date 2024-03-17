import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function CreateShowcase() {
  const history = useHistory();

  const [img, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState(10);
  //   const [imgError, setImgError] = useState(false);
  const [titleError, setTitleError] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      console.error("Invalid file format. Please upload an image.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setImgError(false);
    setTitleError(false);

    // !img ? setImgError(true) : console.log(img);
    !title ? setTitleError(true) : console.log(title);

    if (img && title && level) {
      fetch("http://localhost:8000/images", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ img, title, level }),
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
        Create a Showcase
      </Typography>
      <Typography variant="subtitle2" color={"primary"} gutterBottom>
        Add image, title and level of the showcase
      </Typography>

      <form noValidate autoComplete="Off" onSubmit={handleSubmit}>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput
            as="input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </Button>
        {img && (
          <Box>
            <Typography variant="h6" color={"primary"} gutterBottom>
              Preview:
            </Typography>
            <img src={img} alt="Uploaded" width="200" />
          </Box>
        )}
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Showcase Title"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          error={titleError}
        />

        <Box sx={{ minWidth: 120 }} margin="normal">
          <FormControl fullWidth>
            <InputLabel>Level</InputLabel>
            <Select
              required
              value={level}
              label="Level"
              onChange={(e) => setLevel(e.target.value)}
            >
              <MenuItem value={10}>Bronze</MenuItem>
              <MenuItem value={20}>Silver</MenuItem>
              <MenuItem value={30}>Gold</MenuItem>
            </Select>
          </FormControl>
        </Box>
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
