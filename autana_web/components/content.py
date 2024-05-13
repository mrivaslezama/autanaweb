import reflex as rx

#contenido
def content() -> rx.Component:
    return rx.container(
                #insertar fotos a la izquierda
                rx.chakra.hstack(
                    rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/inclinado.jpg',
                            alt='mueble_inclinado',
                         ),
                         rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/cuarto1.jpg',
                            alt='cocina diagonal',
                         ),
                    rx.chakra.heading("Aprovecha cada espacio disponible", maxW='2xl')
            ),
            rx.spacer(),
            rx.container(
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
                rx.divider()
                )
            )