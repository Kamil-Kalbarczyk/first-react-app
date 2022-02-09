export const Wrapper = (props) => {
  const styleWrapper = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return <div style={styleWrapper}>{props.children}</div>;
};
