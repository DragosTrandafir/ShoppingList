function ColorPickerRandom({ children }) {
  let colorIndex = Math.trunc(Math.random() * 10);
  return <div className={`color${colorIndex} color1`}>{children}</div>;
}

export default ColorPickerRandom;
