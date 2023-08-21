import React from "react";
import { dummyMovie } from "../assets/Constant";
import { Card, Container, Grid, Typography } from "@mui/material";
import Colors from "../assets/Colors";
import { Link } from "react-router-dom";

export const TrendingSection = () => {
  const container = {
    width: "95%",
    marginTop: "2rem",
    marginBottom: "2rem",
  };

  const title = {
    marginTop: "2rem",
    marginBottom: "2rem",
  };

  const gridItem = {
    textAlign: "center",
    verticalAlign: "center",
  };

  const numberOfLines = {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
  };

  return (
    <Container style={container}>
      <Typography variant="h5" color={Colors.darkTextColor} sx={title}>
        Trending Search
      </Typography>
      <Grid
        container
        columns={{ lg: 16, md: 24, sm: 32, xs: 40 }}
        rowSpacing={1}
        columnSpacing={1}
      >
        {dummyMovie?.map((eachItem, i) => {
          return (
            <Grid key={i} lg={2} md={3} sm={8} xs={20} item style={gridItem}>
              <Link
                to={`/movie/${eachItem?.id}`}
                state={{ data: eachItem }}
                style={{ textDecoration: "none" }}
              >
                <Card variant="outlined">
                  <Typography color={Colors.redText} sx={numberOfLines}>
                    {eachItem?.name}
                  </Typography>
                  <Typography color={Colors.darkTextColor}>
                    {eachItem?.rating}
                  </Typography>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
