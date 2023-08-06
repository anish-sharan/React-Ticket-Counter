import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { dummyImage2 } from "../../assets/Constant";
import Colors from "../../assets/Colors";
import { Link } from "react-router-dom";

const ActorImageSection = ({ actors = [], containerStyle }) => {
  return (
    <Container sx={[style.marginTopBottom, containerStyle]}>
      <Grid container columns={{ lg: 15, md: 12, sm: 10 }}>
        {actors.map((eachActor, i) => {
          return (
            <Grid key={i} item lg={3} md={4} sm={5}>
              <Link
                to={`/actor`}
                state={{ data: eachActor }}
                style={{ textDecoration: "none" }}
              >
                <img src={dummyImage2} style={style.image} />
                <Typography
                  color={Colors.darkTextColor}
                  sx={{ marginLeft: "10%" }}
                >
                  {eachActor?.name}
                </Typography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

const style = {
  image: {
    height: "15vh",
    borderRadius: "100%",
  },
  marginTopBottom: {
    marginTop: "20px",
    marginBottom: "20px",
  },
};

ActorImageSection.propTypes = {
  actors: PropTypes.array,
  containerStyle: PropTypes.object,
};

export default ActorImageSection;
