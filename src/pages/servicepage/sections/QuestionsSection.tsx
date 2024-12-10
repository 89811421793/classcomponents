import React from "react";
import { Container, Box, Typography } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";
import { Icon } from "../../../components/Icon";

interface AccordionState {
  expandedIndexes: { [key: number]: boolean }; // Хранит информацию об открытых аккордеонах
}

export class QuestionsSection extends React.Component<{}, AccordionState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      expandedIndexes: {}, // Изначально все аккордеоны закрыты
    };
  }

  handleToggle = (index: number) => {
    this.setState((prevState) => ({
      expandedIndexes: {
        ...prevState.expandedIndexes,
        [index]: !prevState.expandedIndexes[index], // Переключаем состояние конкретного аккордеона
      },
    }));
  };

  render() {
    const { expandedIndexes } = this.state;

    return (
      <section>
        <Container
          sx={{
            minHeight: "80vh",
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
            <ul style={{ width: "100%" }}>
              {[
                {
                  id: 1,
                  question: "Where Can I Find More Information?",
                  answer:
                    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                },
                {
                  id: 2,
                  question: "What Kinds of Payment Do You Accept?",
                  answer:
                    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat duis enim velit mollit.",
                },
                {
                  id: 3,
                  question: "What Are Your Terms and Conditions?",
                  answer:
                    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat duis enim velit mollit.",
                },
              ].map((item) => (
                <li
                  key={item.id}
                  style={{
                    border:
                      expandedIndexes[item.id] ? "none" : "1px solid #DFE2E5",
                    marginBottom: "25px",
                    width: "100%",
                    backgroundColor:
                      expandedIndexes[item.id] ? "white" : "#F7F7F7",
                  }}
                >
                  <div
                    onClick={() => this.handleToggle(item.id)}
                    style={{
                      padding: "27px 34px 27px 24px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Anton",
                        fontWeight: 400,
                        fontSize: "20px",
                      }}
                    >
                      {item.question}
                    </Typography>
                    <Icon
                      iconId="accarrow"
                      width="9"
                      height="4"
                      className={
                        expandedIndexes[item.id] ? "acc-open" : "acc-notopen"
                      }
                    />
                  </div>
                  {expandedIndexes[item.id] && (
                    <div style={{ backgroundColor: "white", padding: "16px" }}>
                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          fontSize: "14px",
                          lineHeight: "32px",
                          maxWidth: "664px",
                          paddingLeft: "8px",
                          color: "#A9A9AA",
                        }}
                      >
                        {item.answer}
                      </Typography>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Box>
        </Container>
      </section>
    );
  }
}
