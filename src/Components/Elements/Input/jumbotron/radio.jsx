import Input from "../input";

function RadioBtn(props) {
  const { onChange } = props;

  return (
    <>
      <form action="">
        <Input
          className="radio__1"
          type="radio"
          name="radio__1"
          value="1"
          id="radio__1"
          onChange={onChange}
        />

        <Input
          className="radio__1"
          type="radio"
          name="radio__1"
          value="2"
          id="radio__2"
          onChange={onChange}
        />

        <Input
          className="radio__1"
          type="radio"
          name="radio__1"
          value="3"
          id="radio__3"
          onChange={onChange}
        />

        <Input
          className="radio__1"
          type="radio"
          name="radio__1"
          value="4"
          id="radio__4"
          onChange={onChange}
        />

        <Input
          className="radio__1"
          type="radio"
          name="radio__1"
          value="5"
          id="radio__5"
          onChange={onChange}
        />
      </form>
    </>
  );
}

export default RadioBtn;
