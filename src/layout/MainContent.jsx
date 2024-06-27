import { plans, products } from '../data/mainContentData';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GooglePlayButton, AppStoreButton, ButtonsContainer } from "react-mobile-app-button";

import app from '../images/app-mobile.webp'


export default function MainContent() {

    return (
        <main className="px-8 my-[50px] grid gap-8">
            <section className="mb-[121px]" id='about-me' >
                <p className="text-2xl font-bold text-primary mb-5">¡Hola!</p>
                <p className="text-base font-medium mb-5">
                    <span className="font-bold">Soy Ana Carmona</span> y comencé mi viaje en el mundo del ejercicio a los 15 años. Lo que empezó como una visita al gimnasio para mejorar mis hábitos, se transformó en una pasión por mantener un estilo de vida saludable y equilibrado. Descubrí que cuidar mi bienestar físico, mental y emocional era fundamental, y compartir este estilo de vida con otros se volvió mi misión. Este proyecto nació con el objetivo de motivar y ayudar a las personas a mejorar sus hábitos alimenticios y de ejercicio, demostrando que el esfuerzo y la dedicación son recompensados con una mejor salud física y mental.
                </p>
                <p className="font-bold mb-4">¡Únete y sé parte del mundo del fitness!</p>



            </section>


            <section id='plans'>
                <p className="text-center text-primary font-bold text-2xl mb-4">Rutina y Plan de Alimentación</p>
                {plans.map((plan, index) => (
                    <>
                        <Card key={index} className="mb-4 border-gray-200 shadow-lg">
                            <CardHeader>
                                {index === 0 && <Badge className="w-fit bg-[#9747FF] text-[13px] mb-4 ">Más Popular</Badge>}
                                <div>
                                    <img className="mb-[21px]" src={plan.image} alt={plan.title} />
                                    <p className="text-2xl font-bold">{plan.title}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold text-lg mb-4">Incluye: </p>
                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                    {plan.includes.map((include, index) => (
                                        <li key={index} className=" font-medium">{include}</li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full font-bold text-base">Adquirir</Button>
                            </CardFooter>
                        </Card>
                    </>

                ))}
            </section>


            <section>
                <blockquote className="mt-6 border-l-2 pl-6 italic text-secondary">
                    "Tu cuerpo es tu hogar. Hay que cuidarlo cada día. Yo estoy en ese camino, buscando mi mejor versión"
                </blockquote>
            </section>

            <section>
                <p className="text-center text-primary font-bold text-2xl mb-4">Productos</p>
                <Card>
                    <CardHeader>

                        <img className="mb-[21px]" src={app} alt="Applicacion de Seguimiento" />
                        <p className="text-2xl font-bold">App de Seguimiento</p>

                    </CardHeader>
                    <CardContent>
                        <p className="font-bold text-lg mb-4">Incluye:</p>
                        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                            <li>Dietas visuales con ingredientes.</li>
                            <li>Mediciones de Evolución (Peso, Talla, Imc).</li>
                            <li>Calendario de citas.</li>
                            <li>Registro de Alimentos a través de Fotografías. </li>
                            <li>Motivación diaria para el paciente. </li>
                            <li>Actividad Física.</li>
                            <li>Estado de ánimo del paciente.</li>
                            <li>Metas diarias.</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <div className="flex flex-col items-center gap-4 w-full">
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
                        <Card key={index} className="mb-4 border-gray-200 shadow-lg">
                            <CardHeader>
                                <Badge className="w-fit mt-4 bg-[#9747FF] text-[13px] mb-4">Envío Gratis</Badge>
                                <div>
                                    <img className="mb-[21px]" src={product.image} alt={product.title} />
                                    <p className="text-2xl font-bold">{product.title}</p>
                                </div>
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
                                <Button className="w-full font-bold text-base">Adquirir</Button>
                            </CardFooter>
                        </Card>
                    </>

                ))}
            </section>

            <section id='frecuent-questions'></section>

            <section id='social'></section>
        </main>
    )
}