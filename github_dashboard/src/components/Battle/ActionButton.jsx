function ActionButton({ title, showButton, fun, as }) {
  const Component = as || "button";
  return showButton && <Component onClick={fun}>{title}</Component>;
}

export default ActionButton;
