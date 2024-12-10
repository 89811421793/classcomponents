import React from "react";
import { Container, Box } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";

export class QuestionsSection extends React.Component {
  render() {
    return (
      <section>
        <Container
          sx={{
            minHeight: "90vh",
            backgroundColor: "#F7F7F7",
            paddingTop: "100px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "60px",
            }}
          >
            <SectionTitle index={4} title="HAVE ANY QUESTIONS?" />
          </Box>
        </Container>
      </section>
    );
  }
}
