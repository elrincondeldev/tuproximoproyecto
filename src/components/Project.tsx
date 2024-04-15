function Project(props: {
  name: string;
  description: string;
  type: boolean;
  category: string;
  votes: number;
}) {
  return (
    <div className="grid md:grid-cols-[0.2fr_3fr_0.2fr] gap-5">
      <div className="flex items-center justify-center h-20 w-20 bg-[#FFD59A] border-[#A56021] border-[1px] p-3 rounded-md">
        <img src={`/images/${props.category}.svg`} alt="" />
      </div>
      <div className="flex flex-col gap-3 text-left">
        <p className="satoshi-bold text-2xl">{props.name}</p>
        <p>{props.description}</p>
        <div className="flex border-[1px] gap-3 p-2 rounded-md w-[55%] justify-center">
          <img src="/images/robot.svg" alt="" />
          <p>
            {props.type
              ? "Generado por inteligencia artificial"
              : "Generado por un usuario"}
          </p>
        </div>
      </div>
      <button className="flex flex-col items-center justify-center h-20 w-20 bg-[#FFD59A] border-[#A56021] border-[1px] p-3 rounded-md">
        <img src="/images/arrow.svg" alt="" className="h-1/3" />
        <p className="text-xl">{props.votes}</p>
      </button>
    </div>
  );
}

export default Project;
