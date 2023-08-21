import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import Colors from "../../assets/Colors";
import CustomDivider from "../CustomDivider";
import { HiOutlineLocationMarker } from "react-icons/hi";

const TheatreInfoModal = ({
  open,
  handleClose,
  mallName,
  mallAddress,
  mallFacilities,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles.container}>
        <Typography sx={{ fontWeight: "bold" }}>{mallName}</Typography>
        <CustomDivider />
        <Typography>
          <HiOutlineLocationMarker size={20} />
          {mallAddress}
        </Typography>
        <CustomDivider />

        <Typography>
          <span style={{ fontWeight: "bold" }}>Available Facility:</span>{" "}
          {mallFacilities}
        </Typography>
      </Box>
    </Modal>
  );
};

const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    bgcolor: Colors.white,
    boxShadow: 24,
    p: 4,
    height: "40%",
    borderRadius: "5px",
    textAlign: "center",
  },
};
TheatreInfoModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  mallName: PropTypes.string,
  mallAddress: PropTypes.string,
  mallFacilities: PropTypes.string,
};

export default TheatreInfoModal;
