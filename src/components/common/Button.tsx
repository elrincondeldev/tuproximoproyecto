function Button(props: {
  buttonName: string;
  imageUrl: string;
  active: boolean;
}) {
  return (
    <button
      className={
        props.active
          ? "flex text-left items-center gap-3 satoshi-bold text-xl p-3 rounded-md w-full bg-[#FFD59A]"
          : "flex text-left items-center gap-3 satoshi-bold text-xl p-3 rounded-md w-full hover:bg-[#fff1de] ease-in-out transition-all"
      }
    >
      <img src={props.imageUrl} alt="category image" className="w-[30px]" />
      {props.buttonName}
    </button>
  );
}

export default Button;
