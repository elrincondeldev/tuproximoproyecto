function Project(props: {
  name: string;
  description: string;
  type: boolean;
  category: string;
  index: number;
}) {
  return (
    <div className="grid md:grid-cols-[0.2fr_1.5fr] gap-5" key={props.index}>
      <div className="flex items-center justify-center h-[70px] bg-[#FFD59A] border-[#A56021] border-[1px] p-2 rounded-md">
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
    </div>
  );
}

export default Project;
