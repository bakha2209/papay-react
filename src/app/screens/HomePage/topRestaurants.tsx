import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { CssVarsProvider } from "@mui/joy/styles";
import { CardOverflow, IconButton } from "@mui/joy";
import { Favorite } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export function TopRestaurants() {
  return (
    <div className="top_restaurant_frame">
      <Container>
        <Stack className="top_restaurants_total">
          <Box className="category_title">Top Restaurantlar</Box>
          <Stack className="top_restaurant_cards">
            <CssVarsProvider>
              <Card
                sx={{
                  minHeight: 430,
                  width: 325,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardCover>
                  <img src="/restaurant/burak_photo.jpg" loading="lazy" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                    Texas de Brazil
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    Tashkent, YunusAbad 4-1
                  </Typography>
                </CardContent>
                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Stack sx={{ flexDirection: "row" }}>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100 <VisibilityIcon sx={{ fontsize: 20, ml: "5px" }} />
                    </Typography>
                    <Box sx={{ width: 2, bgcolor: "divider" }} />
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, ml: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>
              <Card
                sx={{
                  minHeight: 430,
                  width: 325,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardCover>
                  <img src="/restaurant/burak_photo.jpg" loading="lazy" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                    Texas de Brazil
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    Tashkent, YunusAbad 4-1
                  </Typography>
                </CardContent>
                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Stack sx={{ flexDirection: "row" }}>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100 <VisibilityIcon sx={{ fontsize: 20, ml: "5px" }} />
                    </Typography>
                    <Box sx={{ width: 2, bgcolor: "divider" }} />
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, ml: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>
              <Card
                sx={{
                  minHeight: 430,
                  width: 325,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardCover>
                  <img src="/restaurant/burak_photo.jpg" loading="lazy" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                    Texas de Brazil
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    Tashkent, YunusAbad 4-1
                  </Typography>
                </CardContent>
                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Stack sx={{ flexDirection: "row" }}>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100 <VisibilityIcon sx={{ fontsize: 20, ml: "5px" }} />
                    </Typography>
                    <Box sx={{ width: 2, bgcolor: "divider" }} />
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, ml: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>
              <Card
                sx={{
                  minHeight: 430,
                  width: 325,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardCover>
                  <img src="/restaurant/burak_photo.jpg" loading="lazy" />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                    Texas de Brazil
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                  >
                    Tashkent, YunusAbad 4-1
                  </Typography>
                </CardContent>
                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Stack sx={{ flexDirection: "row" }}>
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100 <VisibilityIcon sx={{ fontsize: 20, ml: "5px" }} />
                    </Typography>
                    <Box sx={{ width: 2, bgcolor: "divider" }} />
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "neutral.300",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, ml: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
