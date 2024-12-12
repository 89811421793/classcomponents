import React from "react";

type ContactFormProps = {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
  sectionBackgroundColor?: string;
};

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
  constructor(props: ContactFormProps) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<
      ContactFormState,
      keyof ContactFormState
    >);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  getLabelColor = () => {
    const sectionBackgroundColor = this.props.sectionBackgroundColor;
    if (sectionBackgroundColor === "#111214" || sectionBackgroundColor === "black") {
      return "#FFF";
    } else {
      return "#111214";
    }
  };

  getInputBackgroundColor = () => {
    const sectionBackgroundColor = this.props.sectionBackgroundColor;
    if (sectionBackgroundColor === "#F7F7F7" || sectionBackgroundColor === "white") {
      return "#CACDD11A";
    } else {
      return "#CACDD11A";
    }
  };

  getInputTextColor = () => {
    const sectionBackgroundColor = this.props.sectionBackgroundColor;
    if (sectionBackgroundColor === "#F7F7F7" || sectionBackgroundColor === "white") {
      return "#A9A9AA99";
    } else {
      return "#FFF";
    }
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "30px",
          rowGap: "50px",
          maxWidth: "654px",
          width: "100%",
        }}
      >
        <label
          style={{
            fontFamily: "Montserrat",
            fontWeight: "500",
            fontSize: "14px",
            color: this.getLabelColor(),
          }}
        >
          Your name*
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            style={{
              padding: "20px 16px",
              width: "100%",
              boxSizing: "border-box",
              backgroundColor: this.getInputBackgroundColor(),
              color: this.getInputTextColor(),
              border: "none",
              marginTop: "10px",
              fontFamily: "Montserrat",
              fontSize: "12px",
            }}
            placeholder="Enter your name here"
          />
        </label>
        <label
          style={{
            fontFamily: "Montserrat",
            fontWeight: "500",
            fontSize: "14px",
            color: this.getLabelColor(),
          }}
        >
          Email address*
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            style={{
              padding: "20px 16px",
              width: "100%",
              boxSizing: "border-box",
              backgroundColor: this.getInputBackgroundColor(),
              color: this.getInputTextColor(),
              border: "none",
              marginTop: "10px",
              fontFamily: "Montserrat",
              fontSize: "12px",
            }}
            placeholder="Enter your email address"
          />
        </label>
        <label
          style={{
            fontFamily: "Montserrat",
            fontWeight: "500",
            fontSize: "14px",
            color: this.getLabelColor(),
            gridColumn: "1 / span 2",
          }}
        >
          Message
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            style={{
              padding: "20px 16px",
              width: "100%",
              height: "124px",
              resize: "none",
              boxSizing: "border-box",
              backgroundColor: this.getInputBackgroundColor(),
              color: this.getInputTextColor(),
              border: "none",
              marginTop: "10px",
              fontFamily: "Montserrat",
              fontSize: "12px",
            }}
            placeholder="Write your message here"
          />
        </label>
        <button
          type="submit"
          style={{
            alignSelf: "flex-start",
            padding: "16px 24px",
            backgroundColor: "#FE390C",
            color: "#FFF",
            maxWidth: "fit-content",
            borderRadius: "3px",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: 600,
            fontFamily: "Montserrat",
          }}
        >
          Send Message
        </button>
      </form>
    );
  }
}

export default ContactForm;