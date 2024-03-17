import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";

export default function Commissions() {
  const [commissions, setCommissions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/commissions")
      .then((res) => res.json())
      .then((data) => setCommissions(data));
  }, []);
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {commissions.map((commission) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={commission.requester}
                src="/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary={commission.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="subtitle2"
                    color="text.primary"
                  >
                    {commission.level}
                  </Typography>
                  {" - " + commission.request}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
}
