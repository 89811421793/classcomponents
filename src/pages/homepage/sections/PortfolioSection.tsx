import { Component, createRef } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Container, Box } from "@mui/material";
import { PortfolioTabs } from "../../../components/PortfolioTabs";
import { Icon } from "../../../components/Icon";
import s1 from "../../../assets/images/slide1.jpg";
import s2 from "../../../assets/images/slide2.jpg";
import s3 from "../../../assets/images/slide3.jpg";
import s4 from "../../../assets/images/about_img2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

SwiperCore.use([Navigation]);

interface PortfolioSectionProps {}

interface PortfolioSectionState {
  activeIndex: number;
  swiper: SwiperType | null;
  currentSlides: { id: string; src: string }[];
}

export class PortfolioSection extends Component<
  PortfolioSectionProps,
  PortfolioSectionState
> {
  private swiperPrevRef = createRef<HTMLDivElement>();
  private swiperNextRef = createRef<HTMLDivElement>();

  constructor(props: PortfolioSectionProps) {
    super(props);
    this.state = {
      activeIndex: 0,
      swiper: null,
      currentSlides: [
        { id: "slide1", src: s1 },
        { id: "slide2", src: s2 },
        { id: "slide3", src: s3 },
        { id: "slide4", src: s4 },
      ],
    };
  }

  componentDidMount() {
    this.initializeSwiper();
  }

  initializeSwiper() {
    const { swiper } = this.state;

    if (swiper) {
      this.swiperPrevRef.current?.addEventListener(
        "click",
        this.handlePrevClick
      );
      this.swiperNextRef.current?.addEventListener(
        "click",
        this.handleNextClick
      );
    }
  }

  handlePrevClick = () => {
    const { swiper } = this.state;
    if (swiper) {
      const newIndex =
        this.state.activeIndex > 0 ? this.state.activeIndex - 1 : 0;
      swiper.slideTo(newIndex);
      this.setState({ activeIndex: newIndex });
    }
  };

  handleNextClick = () => {
    const { swiper } = this.state;
    if (swiper) {
      const newIndex =
        this.state.activeIndex < this.state.currentSlides.length - 1
          ? this.state.activeIndex + 1
          : this.state.currentSlides.length - 1;
      swiper.slideTo(newIndex);
      this.setState({ activeIndex: newIndex });
    }
  };

  handleSlideChange = (swiper: SwiperType) => {
    this.setState({ activeIndex: swiper.activeIndex });
  };

  handleSlideClick = (index: number) => {
    const { swiper } = this.state;
    if (swiper) {
      swiper.slideTo(index);
      this.setState({ activeIndex: index });
    }
  };

  updateSlides = (selectedTab: string) => {
    let slides;
    switch (selectedTab) {
      case "uiux":
        slides = [{ id: "slide1", src: s1 }];
        break;
      case "product":
        slides = [{ id: "slide2", src: s2 }];
        break;
      case "branding":
        slides = [{ id: "slide3", src: s3 }];
        break;
      case "web":
        slides = [{ id: "slide4", src: s4 }];
        break;
      default:
        slides = [
          { id: "slide1", src: s1 },
          { id: "slide2", src: s2 },
          { id: "slide3", src: s3 },
          { id: "slide4", src: s4 },
        ];
        break;
    }
    this.setState({ currentSlides: slides, activeIndex: 0 });
  };

  render() {
    const { activeIndex, currentSlides } = this.state;

    const navigationButtonStyle: React.CSSProperties = {
      cursor: "pointer",
      padding: "10px",
      backgroundColor: "#FE390C",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      border: "none",
      borderRadius: "1px",
      outline: "none",
      opacity: activeIndex === 0 ? 0.5 : 1,
    };

    const rightButtonStyle: React.CSSProperties = {
      ...navigationButtonStyle,
      transform: "rotate(180deg)",
      opacity: activeIndex === currentSlides.length - 1 ? 0.5 : 1,
    };

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

    return (
      <section
        style={{
          minHeight: "90vh",
          position: "relative",
          backgroundColor: "#F7F7F7",
          paddingTop: "100px",
        }}
      >
        <Container sx={{ minHeight: "70vh", position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "40px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "90px" }}>
              <SectionTitle index={3} title={"Portfolio"} />
              <PortfolioTabs updateSlides={this.updateSlides} />
            </Box>
            <Box sx={{ display: "flex", gap: "24px" }}>
              <div ref={this.swiperPrevRef} style={navigationButtonStyle}>
                <Icon iconId="arrowhite" width="13" height="11" />
              </div>
              <div ref={this.swiperNextRef} style={rightButtonStyle}>
                <Icon iconId="arrowhite" width="13" height="11" />
              </div>
            </Box>
          </Box>

          <Box sx={{ marginTop: "60px", position: "relative" }}>
            <Swiper
              spaceBetween={24}
              slidesPerView={3}
              onSwiper={(swiper) => {
                this.setState({ swiper }, this.initializeSwiper);
              }}
              onSlideChange={this.handleSlideChange}
              modules={[Navigation]}
            >
              {currentSlides.map((slide, index) => (
                <SwiperSlide
                  key={slide.id}
                  onClick={() => this.handleSlideClick(index)}
                >
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
          </Box>
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
        </Container>
      </section>
    );
  }
}
