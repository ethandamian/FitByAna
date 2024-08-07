import { plans, products } from '../data/mainContentData';
import { Link } from 'react-dom'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";

import InstagramIcon from "@/icons/InstagramIcon"

import app from '../images/app-mobile.webp'


export default function MainContent() {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=5215587705973&text=Hola Ana! 😀 quisiera adquirir "

    return (
        <main className="px-8 my-[50px] grid gap-14">
            <section className="flex flex-col justify-center gap-8 items-center lg:flex-row" id='about-me' >
                <div className='max-w-[470px] '>

                    <p className="text-2xl font-bold text-primary mb-5">¡Hola!</p>
                    <p className="text-base font-medium mb-5 text-pretty">
                        <span className="font-bold">Soy Ana Carmona</span> y comencé en el mundo del ejercicio a los 15 años. Lo que empezó como una visita al gimnasio se convirtió en una pasión por un estilo de vida saludable. Descubrí que cuidar mi bienestar físico, mental y emocional era fundamental, y compartir esto con otros se volvió mi misión. Este proyecto busca motivar y ayudar a mejorar los hábitos alimenticios y de ejercicio, demostrando que el esfuerzo vale la pena para nuestra salud.

                    </p>
                    <p className="font-bold mb-4">¡Únete y sé parte del mundo del fitness!</p>
                </div>
                <div className="relative w-full max-w-lg flex items-center justify-center px-16 z-[-10]">


                    <div class="absolute top-0 -left-4 size-48 xs:size-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div class="absolute top-0 -right-4 size-48 xs:size-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div class="absolute -bottom-8 left-20 size-48 xs:size-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <img src="https://placehold.co/300" alt="Foto de Ana" className="rounded-sm rotate-3" />
                </div>



            </section>


            <section id='plans' className="flex flex-col items-center">
                <p className="text-center text-primary font-bold text-2xl mb-4 lg:text-[25px]">Rutina y Plan de Alimentación</p>
                {plans.map((plan, index) => (
                    <>
                        <Card key={index} className="mb-4 border-gray-200 shadow-lg max-w-3xl max-h-3xl">
                            <CardHeader>
                                {index === 0 && <Badge className="w-fit bg-[#9747FF] text-sm mb-4 lg:text-base">Más Popular</Badge>}
                                <div>
                                    <img className="mb-[21px]" src={plan.image} alt={plan.title} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold mb-4">{plan.title}</p>
                                <div>
                                    <p className="font-bold text-lg mb-4">Incluye: </p>
                                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                        {plan.includes.map((include, index) => (
                                            <li key={index} className=" font-medium">{include}</li>
                                        ))}
                                    </ul>
                                </div>
                                {plan.alimentationTypes.length > 0 &&

                                    <div>
                                        <p className="font-bold text-lg mb-4">Objetivos de Alimentación:</p>
                                        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                            {plan.alimentationTypes.map((types, index) => (
                                                <li key={index} className=" font-medium">{types}</li>
                                            ))}
                                        </ul>
                                    </div>

                                }

                                <p className="text-[#828182] font-medium">En caso de presentar alguna Patología (Ej. Diabetes) o lesión se recomienda acudir previamente con un especialista.*</p>
                            </CardContent>
                            <CardFooter>
                                <a href={whatsappUrl + plan.sufix + `%20${plan.title}`} target="_blank" rel="noopener noreferrer" className="w-full ">

                                    <Button className=" w-full font-bold text-base">Adquirir</Button>
                                </a>
                            </CardFooter>
                        </Card>
                    </>

                ))}
            </section>


            <section className="flex flex-col items-center">
                <blockquote className="mt-6 border-l-2 pl-6 italic text-secondary  text-base lg:text-lg">
                    "Tu cuerpo es tu hogar. Hay que cuidarlo cada día. Yo estoy en ese camino, buscando mi mejor versión"
                </blockquote>
            </section>

            <section className="flex flex-col items-center">
                <p className="text-center text-primary font-bold text-2xl mb-4">Productos</p>
                <Card className="mb-4 border-gray-200 shadow-lg max-w-3xl max-h-3xl" id="app">
                    <CardHeader>

                        <img className="mb-[21px] max-h-[470.656px] max-w-full" src={app} alt="Applicacion de Seguimiento" />
                        <p className="text-2xl font-bold">App de Seguimiento</p>

                    </CardHeader>
                    <CardContent>
                        <p className="font-bold text-lg mb-4">Incluye:</p>
                        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                            <li className="font-medium">Dietas visuales con ingredientes.</li>
                            <li className="font-medium">Mediciones de Evolución (Peso, Talla, Imc).</li>
                            <li className="font-medium">Calendario de citas.</li>
                            <li className="font-medium">Registro de Alimentos a través de Fotografías. </li>
                            <li className="font-medium">Motivación diaria para el paciente. </li>
                            <li className="font-medium">Actividad Física.</li>
                            <li className="font-medium">Estado de ánimo del paciente.</li>
                            <li className="font-medium">Metas diarias.</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <div className="flex flex-col items-center gap-4 w-full smd:flex-row smd:justify-center">
                            <GooglePlayButton
                                url="https://play.google.com/store/apps/details?id=nutrimind.net.paginapaciente"
                                theme={"light"}
                                title="Disponible en"
                                height={60}
                                width={200}
                            />
                            <AppStoreButton
                                url="https://apps.apple.com/mx/app/seguimiento-nnutrimind/id1290972525?platform=iphone"
                                theme={"light"}
                                title="Disponible en"
                                height={60}
                                width={200}
                            />

                        </div>
                    </CardFooter>
                </Card>

                {products.map((product, index) => (
                    <>
                        <Card key={index} className="mb-4 border-gray-200 shadow-lg max-w-3xl max-h-3xl" id={product.id}>
                            <CardHeader>
                                <Badge className="w-fit mt-4 bg-[#9747FF] text-[13px] mb-4 lg:text-base">Envío Gratis</Badge>
                                <div className="flex justify-center">
                                    <img className="mb-[21px]" src={product.image} alt={product.title} />
                                </div>
                                <p className="text-2xl font-bold">{product.title}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg mb-4">{product.description}</p>
                                <p className="font-bold text-lg mb-4">{product.subtitle}</p>
                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                    {product.bulletPoints.map((include, index) => (
                                        <li key={index} className=" font-medium">{include}</li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <a href={whatsappUrl + product.sufix + `%20${product.title}`} target="_blank" rel="noopener noreferrer" className="w-full ">

                                    <Button className=" w-full font-bold text-base">Adquirir</Button>
                                </a>
                            </CardFooter>
                        </Card>
                    </>

                ))}
            </section>

            <section id='frecuent-questions' className="flex flex-col items-center">
                <p className="text-center text-primary font-bold text-2xl mb-4">Preguntas frecuentes</p>
                <Accordion type="single" collapsible className="w-full max-w-[1000px]">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-medim lg:text-lg">¿Qué es Fit By Ana?</AccordionTrigger>
                        <AccordionContent className="font-medium lg:text-base">
                            Fit by Ana es un proyecto en donde damos asesorías nutricionales y rutinas de ejercicio personalizadas, acorde a los objetivos de cada persona, motivándolos cada día a dar lo mejor de sí mismos, dándoles seguimiento y compartiendo diferentes maneras de seguir un plan.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-medium lg:text-lg">¿Cómo es el proceso de Compra?</AccordionTrigger>
                        <AccordionContent className="lg:text-base">
                            <div className="mb-4">
                                <p className="font-bold">Para Rutinas de Ejercicio y Planes de Alimentación</p>
                                <p className="font-medium">Escoges el servicio y al dar click en el botón de “Adquirir”, te llevará a WhatsApp. Se te proporcionará el método de pago, al realizarlo envías un comprobante y se te dará un cuestionario, link para descargar la app, y unos pdfs. Al completar el cuestionario se realiza tu plan de alimentación o tu rutina de ejercicio.</p>
                            </div>
                            <div>
                                <p className="font-bold">Para los productos:</p>
                                <p className="font-medium">
                                    Escoges el producto y al dar click en el botón de “Adquirir”, te llevará a WhatsApp. Se te proporcionará el método de pago, al realizarlo envías un comprobante y se te dará un cuestionario, al llenarlo se enviará tu producto hasta tu casa con envío gratis.
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-medium lg:text-lg">¿El pago es mensual?</AccordionTrigger>
                        <AccordionContent className="font-medium lg:text-base">
                            Sí, se paga mes a mes. El plan de alimentación y la rutina de ejercicio está planeada para un mes. Con base a tu progreso se hace una renovación para tu siguiente mes. El objetivo es darle continuidad a tu proceso, pero puedes dejarlo cuando gustes.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="font-medium lg:text-lg">¿Cuánto tarda en llegar el plan?</AccordionTrigger>
                        <AccordionContent className="font-medium lg:text-base">
                            En un lapso de 24 hrs luego de realizar tu pago o depósito.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="font-medium items-start lg:text-lg">¿Todo es personalizado?</AccordionTrigger>
                        <AccordionContent className="font-medium lg:text-base">
                            Sí, tanto las rutinas como los planes de alimentación son totalmente personalizados, nos adaptamos completamente a ti :)
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            <section id='social' className='flex justify-center'>


                <a href="https://www.instagram.com/anafitnut?igsh=bmp4b3RvNmYxZmZk" target="_blank" rel="noopener noreferrer">
                    <Button aschild>
                        <InstagramIcon className="size-6 mr-4 lg_size-8" />
                        <p className="font-semibold lg:text-base">Sígueme en Instagram</p>
                    </Button>

                </a>
            </section >
        </main >
    )
}