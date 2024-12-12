import { Component, createRef } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Container, Box } from "@mui/material";
import { PortfolioTabs } from "../../../components/PortfolioTabs";
import { Icon } from "../../../components/Icon";
import s1 from "../../../assets/images/slide1.jpg";
import s2 from "../../../assets/images/slide2.jpg";
import s3 from "../../../assets/images/slide3.jpg";
import s4 from "../../../assets/images/about_img2.png";
import SwiperCore from "swiper";
import { PortfolioSlider } from "../../../components/PortfolioSlider";


interface PortfolioSectionProps {}

interface PortfolioSectionState {
  activeIndex: number;
  swiper: SwiperCore | null;
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

  handleSlideChange = (swiper: SwiperCore) => {
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

    return (
      <section
        style={{
          minHeight: "60vh",
          position: "relative",
          backgroundColor: "#F7F7F7",
          paddingTop: "100px",
        }}
      >
        <Container sx={{ minHeight: "50vh", position: "relative" }}>
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

          <PortfolioSlider
            currentSlides={currentSlides}
            activeIndex={activeIndex}
            onSlideChange={this.handleSlideChange}
            onSlideClick={this.handleSlideClick}
            onSwiperInitialized={(swiper) => this.setState({ swiper }, this.initializeSwiper)}
          />
        </Container>
      </section>
    );
  }
}
