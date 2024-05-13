import reflex as rx

#contenido
def content() -> rx.Component:
    return rx.container(
        rx.flex(
        rx.vstack(
            
                #insertar fotos a la izquierda
            rx.flex(
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
            rx.flex(
                 #insertar fotos a la derecha
                    rx.chakra.hstack(
                    rx.chakra.heading("Cocinas", maxW='2xl'),
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
                rx.divider(),
                spacing="4",
                direction="column",
                align="center",
                )
                )
            )
        )