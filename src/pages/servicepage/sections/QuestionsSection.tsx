import React from "react";
import {
  Container,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";
import { Icon } from "../../../components/Icon";

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
          <hr
            style={{
              border: "1px solid #DFE2E5",
              marginBottom: "30px",
              maxWidth: "752px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "752px",
              margin: "0 auto",
            }}
          >
            <Accordion
              sx={{
                border: "1px solid #DFE2E5",
                marginBottom: "25px",
                width: "100%",
              }}
            >
              <AccordionSummary
                sx={{
                  padding: "27px 34px 27px 24px",
                  justifyContent: "space-between",
                }}
                expandIcon={
                  <Icon
                    iconId="accarrow"
                    width="9"
                    height="5"
                    className="acc-notopen"
                  />
                }
              >
                <Typography>Where Can I Find More Information?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                border: "1px solid #DFE2E5",
                marginBottom: "25px",
                width: "100%",
              }}
            >
              <AccordionSummary
                sx={{
                  padding: "27px 34px 27px 24px",
                  justifyContent: "space-between",
                }}
                expandIcon={
                  <Icon
                    iconId="accarrow"
                    width="9"
                    height="5"
                    className="acc-notopen"
                  />
                }
              >
                <Typography>What Kinds of Payment Do You Accept?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                border: "1px solid #DFE2E5",
                marginBottom: "25px",
                width: "100%",
              }}
            >
              <AccordionSummary
                sx={{
                  padding: "27px 34px 27px 24px",
                  justifyContent: "space-between",
                }}
                expandIcon={
                  <Icon
                    iconId="accarrow"
                    width="9"
                    height="5"
                    className="acc-notopen"
                  />
                }
              >
                <Typography>What Are Your Terms and Conditions?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </section>
    );
  }
}
