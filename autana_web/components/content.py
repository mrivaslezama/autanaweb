import reflex as rx

#contenido
def content() -> rx.Component:
    return rx.container(
        rx.section(
        rx.vstack(
        rx.chakra.heading("Fabricantes de muebles en melamina", maxW='2xl'),
                rx.chakra.hstack(
                    rx.chakra.heading("Modelamos en 3D", maxW='2xl'),
                    rx.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/proyectos.jpg',
                            alt='3D',
                         )
                    ),
                #insertar fotos a la izquierda
            rx.section(
                rx.chakra.hstack(
                    rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/inclinado.jpg',
                            alt='cocina de frente',
                         ),
                         rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/bar.jpg',
                            alt='cocina diagonal',
                         ),
                    rx.chakra.heading("Muebles a medida y proyectos personalizados.", maxW='2xl'),
                    )
            ),
            rx.section(
                 #insertar fotos a la derecha
                    rx.chakra.hstack(
                    rx.chakra.heading("Remodelación de cocinas", maxW='2xl'),
                    rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/cocinareal.jpg',
                            alt='cocina de frente',
                         ),
                         rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/cocina22.jpg',
                            alt='cocina diagonal',
                         ),
                    ),

                )
                )
            )
        )