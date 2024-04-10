function Button(props: {
  buttonName: string;
  imageUrl: string;
  active: boolean;
}) {
  return (
    <button
      className={
        props.active
          ? "flex items-center gap-3 satoshi-bold text-xl p-3 rounded-md w-full bg-[#FFD59A]"
          : "flex items-center gap-3 satoshi-bold text-xl p-3 rounded-md w-full"
      }
    >
      <img src={props.imageUrl} alt="category image" className="w-[30px]" />
      {props.buttonName}
    </button>
  );
}

export default Button;
