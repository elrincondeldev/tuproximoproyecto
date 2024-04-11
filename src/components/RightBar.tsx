import Newsletter from "./Newsletter";

function RightBar() {
  return (
    <div className="bg-white border-[1px] border-[#E1E3E8] rounded-md p-5">
      <p className="text-left satoshi-bold text-2xl">Newsletter</p>
      <Newsletter />
    </div>
  );
}

export default RightBar;
