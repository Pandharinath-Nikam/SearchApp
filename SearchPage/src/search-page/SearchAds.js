import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const SearchAds = ({ data }) => {
  return (
    <>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(data) &&
          data.map((ele, i) => {
            return (
              <>
                <Card
                  sx={{
                    maxWidth: 325,
                    height: "100vh",
                    margin: 1,
                    padding: 1,
                    boxShadow: "2px 10px 4px 4px solid black",
                  }}
                >
                  <h3>companyId:- {ele.companyId}</h3>
                  <h3>Name:- {ele.name}</h3>
                  <CardMedia
                    component="img"
                    height="50%"
                    image={ele.imageUrl}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginBottom: 2 }}
                    >
                      <b>HeadLine :-</b>
                      {ele.headline}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginBottom: 2 }}
                    >
                      <b>primaryText :-</b>
                      {ele.primaryText}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginBottom: 2 }}
                    >
                      <b>Description :-</b> {ele.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginBottom: 2 }}
                    >
                      <b>CTA :-</b>
                      <Button variant="contained" color="primary">
                        {ele.CTA}
                      </Button>
                    </Typography>
                  </CardContent>
                </Card>
              </>
            );
          })}
      </section>
    </>
  );
};

export default SearchAds;
