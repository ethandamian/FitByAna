import FitByAnaLogo from "@/icons/FitByAnaLogo"

export default function Footer() {

    return (
        <footer className="h-[60px] bg-white flex items-center justify-center gap-2 custom-shadow-top">
            <FitByAnaLogo className="w-[45px] h-[45px]" />
            <p className=" text-textColor font-bold text-[12px]">© FIT BY ANA 2024</p>
        </footer>
    )
}