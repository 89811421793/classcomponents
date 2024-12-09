import { Component, createRef } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Container, Box } from "@mui/material";
import { Icon } from "../../../components/Icon";
import s1 from "../../../assets/images/testimonial.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

SwiperCore.use([Navigation]);

interface TestimonialProps {}

interface TestimonialState {
  activeIndex: number;
  swiper: SwiperType | null;
}

export class Testimonial extends Component<TestimonialProps, TestimonialState> {
  private swiperPrevRef = createRef<HTMLDivElement>();
  private swiperNextRef = createRef<HTMLDivElement>();

  // Переносим slides как свойство класса
  private slides = [
    { id: "slide1", src: s1, type: "image" },
    { id: "slide2", text: "Slide 2", type: "text" },
    { id: "slide3", text: "Slide 3", type: "text" },
  ];

  constructor(props: TestimonialProps) {
    super(props);
    this.state = {
      activeIndex: 0,
      swiper: null,
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
        this.state.activeIndex < this.slides.length - 1
          ? this.state.activeIndex + 1
          : this.slides.length - 1;
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

  render() {
    const { activeIndex } = this.state;

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
      opacity: activeIndex === this.slides.length - 1 ? 0.5 : 1,
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
      width: "380px",
      height: "482px",
      position: "relative",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F7F7F7", // Фон для текстовых слайдов
    };

    const activeSlideStyle: React.CSSProperties = {
      ...slideStyle,
    };

    return (
      <section
        style={{
          minHeight: "70vh",
          position: "relative",
          backgroundColor: "#F7F7F7",
          paddingTop: "100px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
            padding: 0,
          }}
        >
          {/* Left Side: Swiper */}
          <Box
            sx={{
              flex: 1,
              maxWidth: "370px",
              marginLeft: "0",
            }}
          >
            <Swiper
              slidesPerView={1}
              onSwiper={(swiper) => {
                this.setState({ swiper }, this.initializeSwiper);
              }}
              onSlideChange={this.handleSlideChange}
              modules={[Navigation]}
            >
              {this.slides.map((slide, index) => (
                <SwiperSlide
                  key={slide.id}
                  onClick={() => this.handleSlideClick(index)}
                >
                  <div
                    style={
                      activeIndex === index ? activeSlideStyle : slideStyle
                    }
                  >
                    {slide.type === "image" ? (
                      <img
                        src={slide.src}
                        alt={`Slide ${slide.id}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <span style={{ fontSize: "24px", color: "#FE390C" }}>
                        {slide.text}
                      </span>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          {/* Right Side: Title and Navigation */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              paddingLeft: "0",
              maxWidth: "655px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <SectionTitle index={4} title={"Testimonial"} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Anton",
                  fontSize: "24px",
                  fontWeight: 400,
                }}
              >
                <span
                  style={{
                    color: "#FE390C",
                    fontFamily: "Anton",
                    fontSize: "24px",
                    fontWeight: 400,
                  }}
                >
                  {(activeIndex + 1).toString().padStart(2, "0")}
                </span>
                <span
                  style={{
                    color: "#A9A9AA",
                    fontFamily: "Anton",
                    fontSize: "24px",
                    fontWeight: 400,
                  }}
                >
                  {`/${this.slides.length.toString().padStart(2, "0")}`}
                </span>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginTop: "40px",
                minHeight: "250px",
              }}
            >
              <Icon iconId="quote" width="21" height="13" />
              <article
                style={{
                  maxWidth: "430px",
                  color: "#111214",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "32px",
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </article>
              <div style={{ marginTop: "20px", textAlign: "left" }}>
                <div
                  style={{
                    color: "#FE390C",
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: 700,
                    marginBottom: "15px",
                  }}
                >
                  Esther Howard
                </div>
                <div
                  style={{
                    color: "#A9A9AA",
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  CEO of Adebe
                </div>
              </div>
            </Box>
            <Box sx={{ flex: 1 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                {this.slides.map((_, index) => (
                  <span
                    key={`indicator-${index}`}
                    style={
                      index === activeIndex
                        ? activeIndicatorStyle
                        : indicatorStyle
                    }
                  />
                ))}
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
          </Box>
        </Container>
      </section>
    );
  }
}
