export default function FormWrapper({ title, children }) {
  return (
    <div className="form-wrapper">
      <h2
      //   style={{
      //     textAlign: "center",
      //     margin: "0",
      //     marginBottom: "2rem",
      //     color: "black",
      //   }}
      >
        {title}
      </h2>
      <div className="form-inner-wrapper">{children}</div>
    </div>
  );
}
