import salad from '../images/salad-mobile.webp'
import food from '../images/food-mobile.webp'
import excercise from '../images/excercise-mobile.webp'
import bands from '../images/bands-mobile.webp'
import mat from '../images/mat-mobile.webp'
import watch from '../images/watch-mobile.webp'

export const plans = [
    {
        image: salad,
        title: `Rutina de Ejercicio ${String.fromCharCode(43)} Plan de Alimentación`,
        sufix: "la",
        includes: [
            "Rutina de entrenamiento personalizada en casa o gym.",
            "Videos e Imágenes explicando la ejecución de cada ejercicio.",
            "Gráfica de grupos musculares trabajados.",
            "Plan de alimentación personalizado.",
            "Diferentes opciones de comidas.",
            "Cuadro de Equivalentes.",
            "Lista de marcas recomendadas.",
            "Seguimiento a través de WhatsApp.",
            "Acceso a grupo de WhatsApp."
        ],
        alimentationTypes: [
            "Disminución de Grasa Corporal (Déficit Calórico).",
            "Aumento de Masa Muscular. (Superhávit Calórico)",
            "Mantenimiento (Mantener el peso adecuado)."
        ]
    },
    {
        image: food,
        title: "Plan de Alimentación",
        sufix: "el",
        includes: [
            "Plan de alimentación personalizado.",
            "Diferentes opciones de comidas.",
            "Cuadro de Equivalentes.",
            "Lista de marcas recomendadas.",
            "Seguimiento a través de WhatsApp.",
            "Acceso a grupo de WhatsApp."
        ],
        alimentationTypes: [
            "Disminución de Grasa Corporal (Déficit Calórico).",
            "Aumento de Masa Muscular. (Superhávit Calórico)",
            "Mantenimiento (Mantener el peso adecuado)."
        ]
    },
    {
        image: excercise,
        title: "Rutina de Ejercicio",
        sufix: "la",
        includes: [
            "Rutina de entrenamiento personalizada en casa o gimnasio.",
            "Videos e Imágenes explicando la ejecución de cada ejercicio.",
            "Gráfica de grupos musculares trabajados.",
            "Acceso a grupo de WhatsApp."
        ],
        alimentationTypes: []
    }
]

export const products = [
    {
        id: "bands",
        sufix: "las",
        image: bands,
        title: "Bandas Elásticas",
        description: "Al adquirir tus bandas de resistencia nos serán de gran ayuda ya que son un excelente complemento para poder llevar tu rutina de entrenamiento para casa o gym más completa. Con ellas podemos trabajar más tus ejercicios de glúteos, cuádriceps y pierna.",
        subtitle: "Incluye 3 bandas elásticas:",
        bulletPoints: [
            "Ideales para los músculos de las  piernas.",
            "Generarán esa fuerza y resistencia del cuerpo.",
            "Incrementan la flexibilidad.",
            "Ideal para la activación de glúteos en tu rutina de tren inferior.",
            "Ayudan a tener una mejor coordinación."
        ]
    },
    {
        id: "mat",
        sufix: "el",
        image: mat,
        title: "Tapete para ejercicio",
        description: "Al obtener tu tapete de ejercicio nos brindará más soporte al momento de realizar nuestra rutina de entrenamiento para piernas, abdomen y glúteos, tendremos más resistencia. Ayudará a que evitemos lastimarnos obteniendo más higiene al realizar ejercicio.",
        subtitle: "Beneficios:",
        bulletPoints: [
            "Fortalece tu balance, conexión mente-cuerpo.",
            "Te brindará sujeción, y estabilidad.",
            "Material ligero, suave y resistente.",
            "Fácil de transportar."
        ]
    },
    {
        id: "watch",
        sufix: "el",
        image: watch,
        title: "Reloj Inteligente Y68",
        description: "Tu reloj inteligente nos ayudará a que llevemos un control exacto de tus calorías. Para poder cumplir con tus requerimientos diarios en cuanto a tu Plan. Llevaremos el conteo de tus pasos y podrás ver que tan activo estás durante el día.También podremos monitorear tu calidad del sueño ya que el descanso es muy importante para este estilo de vida.",
        subtitle: "Beneficios:",
        bulletPoints: [
            "Monitoreo de la actividad física.",
            "Monitorear la calidad del sueño.",
            "Conteo de calorías diarias.",
            "Contador de pasos diarios.",
            "Progresos en la rutina de ejercicios."
        ]
    }
]