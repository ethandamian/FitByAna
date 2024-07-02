import { useState } from "react";

import FitByAnaLogo from "@/icons/FitByAnaLogo"
import BarsIcon from "@/icons/BarsIcon"

import { HashLink as Link } from 'react-router-hash-link';

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import ChevronDown from "@/icons/ChevronDown";
import ChevronUp from "@/icons/ChevronUp";


export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const [sheetOpen, setSheetOpen] = useState(false)

    const handleLinkClick = () => {
        setSheetOpen(!sheetOpen)
    }

    return (
        <nav className=" bg-white flex justify-between h-[60px] items-center px-8 py-[14px] shadow-md sticky top-0">
            <FitByAnaLogo className="h-[45px] w-[45px]" />


            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger>
                    <Button variant="ghost" size="icon" className="flex">

                        <BarsIcon className="h-[35px] w-[35px] stroke-textColor" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-[350px]">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <ol className="my-6 ml-6 [&>li]:mt-2">
                        <li><Link to="#root" className="font-bold text-base text-primary" onClick={handleLinkClick} smooth>Sobre Mí</Link></li>
                        <li><Link to="#plans" className="font-bold text-base text-primary" onClick={handleLinkClick} smooth>Rutina y Plan de Alimentación</Link></li>
                        <li>
                            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                                <CollapsibleTrigger asChild>
                                    <div className="flex items-center">
                                        <span className={`font-bold text-base mr-[14px] ${isOpen ? 'text-secondary' : 'text-primary'}`}>Productos</span>
                                        {isOpen ? <ChevronUp /> : <ChevronDown />}
                                    </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <ol className="ml-6 [&>li]:mt-2">
                                        <li>
                                            <Link to="#app" className="font-bold text-base text-primary" onClick={handleLinkClick} smooth>App de Seguimiento</Link>

                                        </li>
                                        <li>
                                            <Link to="#bands" className="font-bold text-base text-primary" onClick={handleLinkClick} smooth>Bandas Elásticas</Link>

                                        </li>
                                        <li>
                                            <Link to="#mat" className="font-bold text-base text-primary" onClick={handleLinkClick} smooth>Tapete Para Ejercicio</Link>

                                        </li>
                                        <li>
                                            <Link to="#watch" className="font-bold text-base text-primary" onClick={handleLinkClick} smooth>Reloj Inteligente</Link>

                                        </li>

                                    </ol>
                                </CollapsibleContent>
                            </Collapsible>

                        </li>

                        <li><Link to="#frecuent-questions" className="font-bold text-base text-primary" onClick={handleLinkClick} smooth>Preguntas Frecuentes</Link></li>

                    </ol>
                </SheetContent>
            </Sheet>


        </nav>
    )
}