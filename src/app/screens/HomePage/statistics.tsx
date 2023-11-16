import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Marginer from "../../components/marginal";

export function Statistics() {
  return (
    <div className="static_frame">
      <Container>
        <Stack className="stat_stack">
          <div className="personage_img left"></div>
          <Stack className="static_box">
            <Box className="static_num">12</Box>
            <Box className="static_text">Restaurants</Box>
          </Stack>
          <Marginer direction="vertical" height="64" width="2" bg="#E3C080"/>
          <Stack className="static_box">
            <Box className="static_num">8</Box>
            <Box className="static_text">Years Experience</Box>
          </Stack>
          <Marginer direction="vertical" height="64" width="2" bg="#E3C080"/>
          <Stack className="static_box">
            <Box className="static_num">50+</Box>
            <Box className="static_text">Menu ovqatlar</Box>
          </Stack>
          <Marginer direction="vertical" height="64" width="2" bg="#E3C080"/>
          <Stack className="static_box">
            <Box className="static_num">200+</Box>
            <Box className="static_text">Foydalanuvchilar</Box>
          </Stack>
          <div className="personage_img right"></div>
        </Stack>
      </Container>
    </div>
  );
}
