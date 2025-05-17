function Input(props) {
  const { type, className, value, name, onChange, placeholder, id } = props;

  return (
    <>
      <input
        onChange={onChange}
        type={type}
        className={className}
        value={value}
        name={name}
        placeholder={placeholder}
        id={id}
      />
    </>
  );
}

export default Input;
