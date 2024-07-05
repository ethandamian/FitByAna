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

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"





import ChevronDown from "@/icons/ChevronDown";
import ChevronUp from "@/icons/ChevronUp";


export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDropDown, setIsOpenDropDown] = useState(false)
    const [sheetOpen, setSheetOpen] = useState(false)

    const handleLinkClick = () => {
        setSheetOpen(!sheetOpen)
    }

    const handleDropdownClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className=" bg-white flex justify-between h-[60px] items-center px-8 py-[14px] shadow-md sticky top-0 xl:h-[80px] w-full">
            <FitByAnaLogo className="size-[45px] xl:size-[70px]" />

            <div className="hidden lg:block w-full">
                <ul className="flex justify-end gap-4 xl:justify-center">
                    <li>
                        <Link to="#root" className="font-bold text-base text-primary xl:text-lg" smooth>Sobre Mí</Link>
                    </li>
                    <li><Link to="#plans" className="font-bold text-base text-primary xl:text-lg" smooth>Rutina y Plan de Alimentación</Link></li>
                    <li>
                        <DropdownMenu open={isOpenDropDown} onOpenChange={setIsOpenDropDown}>
                            <DropdownMenuTrigger asChild >
                                <div className="flex items-center cursor-pointer">
                                    <span className={`font-bold text-base mr-[14px] lg:text-lg  ${isOpenDropDown ? 'text-secondary' : 'text-primary'}`}>Productos</span>
                                    {isOpenDropDown ? <ChevronUp className={`size-4 ${isOpenDropDown ? 'stroke-secondary' : 'stroke-primary'}`} /> : <ChevronDown className={`size-4 ${isOpenDropDown ? 'stroke-secondary' : 'stroke-primary'}`} />}
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-fit gap-4">
                                <DropdownMenuItem>
                                    <Link to="#app" className="font-semibold text-base text-primary" onClick={handleDropdownClick} smooth>App de Seguimiento</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link to="#bands" className="font-semibold text-base text-primary" onClick={handleDropdownClick} smooth>Bandas Elásticas</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link to="#mat" className="font-semibold text-base text-primary" onClick={handleDropdownClick} smooth>Tapete Para Ejercicio</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link to="#watch" className="font-semibold text-base text-primary" onClick={handleDropdownClick} smooth>Reloj Inteligente</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </li>
                    <li><Link to="#frecuent-questions" className="font-bold text-base text-primary xl:text-lg" smooth>Preguntas Frecuentes</Link></li>
                </ul>
            </div>


            <div className="lg:hidden">
                <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger>
                        <Button variant="ghost" size="icon" className="flex focus:outline-none lg:hidden">

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
                                            {isOpen ? <ChevronUp className={`size-4 ${isOpen ? 'stroke-secondary' : 'stroke-primary'}`} /> : <ChevronDown className={`size-4 ${isOpen ? 'stroke-secondary' : 'stroke-primary'}`} />}
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


            </div>

        </nav>
    )
}