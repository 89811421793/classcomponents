import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Box } from "@mui/material";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

SwiperCore.use([Navigation]);

interface PortfolioSliderProps {
  currentSlides: { id: string; src: string }[];
  activeIndex: number;
  onSlideChange: (swiper: SwiperType) => void;
  onSlideClick: (index: number) => void;
  onSwiperInitialized: (swiper: SwiperType) => void;
}

export class PortfolioSlider extends Component<PortfolioSliderProps> {
  render() {
    const { currentSlides, activeIndex, onSlideChange, onSlideClick, onSwiperInitialized } = this.props;

    const slideStyle: React.CSSProperties = {
      width: "364px",
      height: "250px",
      position: "relative",
      cursor: "pointer",
      background: "transparent",
      borderRadius: "8px",
      overflow: "hidden",
    };

    const overlayStyle = (index: number): React.CSSProperties => ({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#00000096",
      opacity: activeIndex === index ? 1 : 0,
      transition: "opacity 0.3s ease",
    });

    const indicatorStyle: React.CSSProperties = {
      backgroundColor: "#E0E0E0",
      width: "15px",
      height: "3px",
      borderRadius: "1px",
      marginRight: "4px",
    };

    const activeIndicatorStyle: React.CSSProperties = {
      backgroundColor: "#FF4081",
      width: "15px",
      height: "3px",
      borderRadius: "1px",
      marginRight: "4px",
    };

    return (
      <Box sx={{ marginTop: "60px", position: "relative" }}>
        <Swiper
          spaceBetween={24}
          slidesPerView={3}
          onSwiper={onSwiperInitialized}
          onSlideChange={onSlideChange}
          modules={[Navigation]}
        >
          {currentSlides.map((slide, index) => (
            <SwiperSlide key={slide.id} onClick={() => onSlideClick(index)}>
              <div style={slideStyle}>
                <img
                  src={slide.src}
                  alt={`Slide ${slide.id}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                />
                <div style={overlayStyle(index)} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          sx={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {currentSlides.map((_, index) => (
            <span
              key={`indicator-${index}`}
              style={
                index === activeIndex ? activeIndicatorStyle : indicatorStyle
              }
            />
          ))}
        </Box>
      </Box>
    );
  }
}
