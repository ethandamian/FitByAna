import FitByAnaLogo from "@/icons/FitByAnaLogo"
import BarsIcon from "@/icons/BarsIcon"

export default function Nav() {
    return (
        <nav className=" bg-white flex justify-between h-[60px] items-center px-8 py-[14px] shadow-md sticky top-0 pt-safe">
            <FitByAnaLogo className="h-[45px] w-[45px]" />
            <BarsIcon className="h-[32px] w-[32px] stroke-textColor" />

        </nav>
    )
}