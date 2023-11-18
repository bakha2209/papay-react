import { Box, Stack } from "@mui/joy";
import { Container } from "@mui/material";
import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export function Events() {
  const events_list = [
    {
      title: "Secar sizni kutmoqda",
      desc: "Yangicha uslubda yangicha ta'm",
      author: "Malak Food",
      date: "2023/12/03",
      location: "Toshkent, Nurafshon ko'cha",
      img: "/event/event_image2.jpg",
    },
    {
      title: "Italian Food is on",
      desc: "Italyancha taomlardan bahramand bo'ling",
      author: "Italian Food",
      date: "2023/12/23",
      location: "Toshkent, Mirzo Ulugbek ko'cha",
      img: "/event/event_image3.jpg",
    },
    {
      title: "Time to dessert",
      desc: "Ajoyib shirinliklar mavsumi",
      author: "Yummy Desserts",
      date: "2023/12/18",
      location: "Toshkent, Ming Orik ko'cha",
      img: "/event/event_image4.jpg",
    },
    {
      title: "Delicious African Foods",
      desc: "Afrikacha taomlarga nima deysiz?",
      author: "Awesome",
      date: "2023/12/31",
      location: "Toshkent, Paxta ko'cha",
      img: "/event/event_image5.jpg",
    },
  ];
  return (
    <div className="events_frame">
      <Container sx={{ overflow: "hidden" }}>
        <Stack className={"events_main"}>
          <Box className={"events_text"}>
            <span className="category_title">Hodisalar</span>
          </Box>

          <Swiper
            slidesPerView={3}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="events_info swiper-wrapper"
          >
            {events_list.map((value, number) => {
              return (
                <SwiperSlide className="events_info_frame">
                  <div className="events_img">
                    <img src={value.img} className="events_img" />
                  </div>
                  <Box className={"events_desc"}>
                    <Box className={"events_bott"}>
                      <Box className={"bott_left"}>
                        <div className="event_title_speaker">
                          <strong>{value.title}</strong>
                          <div className="event_organizator">
                            <img
                              src="/icons/speaker.png"
                              style={{ width: "20px", marginRight: "10px", height: "24px" }}
                            />
                            <p className="spec_text_author">{value.author}</p>
                          </div>
                        </div>

                        <p className="text_desc" style={{marginTop: "10px"}}>
                          {" "}
                          {value.desc}{" "}
                        </p>

                        <div className="bott_info" style={{marginTop: "10px"}}>
                          <div className="bott_info_main">
                            <img src="/icons/calendar.png" style={{marginRight: "10px", width:"24px", height:"24px"}} />
                            {value.date}
                          </div>
                          <div className="bott_info_main">
                            <img src="/icons/map-marked.png" style={{marginRight: "10px", width:"24px", height:"24px"}} />
                            {value.location}
                          </div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
