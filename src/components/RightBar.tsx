import Newsletter from "./Newsletter";
import BuyMeACoffee from "./BuyMeACoffee";

function RightBar() {
  return (
    <div>
      <div className="bg-white border-[1px] border-[#E1E3E8] rounded-md p-5">
        <p className="text-left satoshi-bold text-2xl">Newsletter</p>
        <div className="flex flex-col gap-5">
          <Newsletter />
          <a
            href="https://www.buymeacoffee.com/elrincondeldev
"
            target="_blank"
          >
            <BuyMeACoffee />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
