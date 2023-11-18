import { Favorite } from "@mui/icons-material";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Typography,
  Link,
} from "@mui/joy";
import { Button, Container, Box, Stack } from "@mui/material";
import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";

export function BestRestaurants() {
  return (
    <div className="best_restaurant_frame">
      <img
        src="icons/line_angel.svg"
        style={{
          position: "absolute",
          left: "6%",
          transform: "rotate(90deg)",
        }}
      />
      <Container sx={{ paddingTop: "153px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Zo'r Restaurantlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            <CssVarsProvider>
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio={"1"}>
                    <img src="restaurant/burak_photo.jpg" alt="" />
                  </AspectRatio>
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
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" fontSize="md" mt="2">
                  Texas de Brazil restaurant
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, YunusAbad 4-1
                  </Link>
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link startDecorator={<CallIcon />} textColor="neutral.700">
                    +998 90 7314578
                  </Link>
                </Typography>
                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Stack sx={{ flexDirection: "row" }}>
                    <Typography
                      level="body-sm"
                      sx={{
                        fontWeight: "md",
                        color: "text.secondary",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100{" "}
                      <VisibilityIcon
                        sx={{ fontsize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                    <Box sx={{ width: 2, bgcolor: "divider" }} />
                    <Typography
                      level="body-sm"
                      sx={{
                        fontWeight: "md",
                        color: "text.secondary",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio={"1"}>
                    <img src="restaurant/burak_photo.jpg" alt="" />
                  </AspectRatio>
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
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" fontSize="md" mt="2">
                  Texas de Brazil restaurant
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, YunusAbad 4-1
                  </Link>
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link startDecorator={<CallIcon />} textColor="neutral.700">
                    +998 90 7314578
                  </Link>
                </Typography>
                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Stack sx={{ flexDirection: "row" }}>
                    <Typography
                      level="body-sm"
                      sx={{
                        fontWeight: "md",
                        color: "text.secondary",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100{" "}
                      <VisibilityIcon
                        sx={{ fontsize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                    <Box sx={{ width: 2, bgcolor: "divider" }} />
                    <Typography
                      level="body-sm"
                      sx={{
                        fontWeight: "md",
                        color: "text.secondary",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio={"1"}>
                    <img src="restaurant/burak_photo.jpg" alt="" />
                  </AspectRatio>
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
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" fontSize="md" mt="2">
                  Texas de Brazil restaurant
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, YunusAbad 4-1
                  </Link>
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link startDecorator={<CallIcon />} textColor="neutral.700">
                    +998 90 7314578
                  </Link>
                </Typography>
                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Stack sx={{ flexDirection: "row" }}>
                    <Typography
                      level="body-sm"
                      sx={{
                        fontWeight: "md",
                        color: "text.secondary",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100{" "}
                      <VisibilityIcon
                        sx={{ fontsize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                    <Box sx={{ width: 2, bgcolor: "divider" }} />
                    <Typography
                      level="body-sm"
                      sx={{
                        fontWeight: "md",
                        color: "text.secondary",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio={"1"}>
                    <img src="restaurant/burak_photo.jpg" alt="" />
                  </AspectRatio>
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
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" fontSize="md" mt="2">
                  Texas de Brazil restaurant
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, YunusAbad 4-1
                  </Link>
                </Typography>
                <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                  <Link startDecorator={<CallIcon />} textColor="neutral.700">
                    +998 90 7314578
                  </Link>
                </Typography>
                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Stack sx={{ flexDirection: "row" }}>
                    <Typography
                      level="body-sm"
                      sx={{
                        fontWeight: "md",
                        color: "text.secondary",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100{" "}
                      <VisibilityIcon
                        sx={{ fontsize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                    <Box sx={{ width: 2, bgcolor: "divider" }} />
                    <Typography
                      level="body-sm"
                      sx={{
                        fontWeight: "md",
                        color: "text.secondary",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>50</div>
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                    </Typography>
                  </Stack>
                </CardOverflow>
              </Card>
            </CssVarsProvider>
          </Stack>

          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            style={{ width: "100%", marginTop: "16px" }}
          >
            <Button style={{ background: "#1976d2", color: "#FFFFFF" }}>
              Barchasini Ko'rish
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
