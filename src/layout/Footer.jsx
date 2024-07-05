import FitByAnaLogo from "@/icons/FitByAnaLogo"

export default function Footer() {

    return (
        <footer className="h-[60px] bg-white flex items-center justify-center gap-2 custom-shadow-top w-full">
            <FitByAnaLogo className="w-[45px] h-[45px] lg:size-[50px]" />
            <p className=" text-textColor font-bold text-[12px] lg:text-base">© FIT BY ANA 2024</p>
        </footer>
    )
}