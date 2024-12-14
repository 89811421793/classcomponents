import React from "react";
import {
  Container as MuiContainer,
  Box,
  styled,
  Typography,
} from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";
import designAboutImage from "../../../assets/images/design_about.jpg";

export type AboutMeSectionProps = {};

export class AboutMeSection extends React.Component<AboutMeSectionProps> {
  render() {
    return (
      <section style={{ minHeight: "100vh" }}>
        <Container>
          <LeftBlock>
            <img
              src={designAboutImage}
              alt="About Me"
              width={485}
              height={667}
            />
          </LeftBlock>
          <RightBlock>
            <SectionTitle index={1} title={"About Me"} />
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Anton",
                fontWeight: "400",
                fontSize: "32px",
                lineHeight: "48px",
                marginTop: "70px",
                maxWidth: "578px",
              }}
            >
              I'm Professional Designer and Front-End Web Developer That Solve
              Your Problems
            </Typography>
            <StyledArticle>
              <StyledTypography variant="body2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </StyledTypography>
              <StyledTypography variant="body2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </StyledTypography>
            </StyledArticle>
            <BottomRow>
              <Box
                sx={{
                  display: "flex",
                  marginRight: "60px",
                  alignItems: "center",
                }}
              >
                <StyledNumber variant="body1">8</StyledNumber>
                <StyledText variant="body1">Year of experience</StyledText>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <StyledNumber variant="body1">25</StyledNumber>
                <StyledText variant="body1">Satisfied Customers</StyledText>
              </Box>
            </BottomRow>
          </RightBlock>
        </Container>
      </section>
    );
  }
}

const Container = styled(MuiContainer)({
  minHeight: "70vh",
  display: "flex",
  marginTop: "80px",
});

const LeftBlock = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid crimson",
  width: "50%",
  position: "relative",
});

const RightBlock = styled(Box)({
  border: "1px solid crimson",
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
});

const StyledArticle = styled("article")({
  marginTop: "20px",
  maxWidth: "558px",
  marginBottom: "35px",
  fontWeight: "500",
  fontSize: "14px",
  color: "text.secondary",
});

const StyledTypography = styled(Typography)({
  fontFamily: "Montserrat",
  lineHeight: "32px",
  marginBottom: "20px",
  "&:last-child": {
    marginBottom: 0,
  },
});

const BottomRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "16px",
});

const StyledNumber = styled(Typography)(({ theme }) => ({
  color: theme.palette.accent.main,
  fontFamily: "Anton",
  fontWeight: "400",
  fontSize: "64px",
  marginRight: "12px",
}));

const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "20px",
}));