import reflex as rx

#galeria
def galery() -> rx.Component:
    return rx.container(
            rx.vstack(
            rx.heading("Nuestros proyectos"),
        rx.hstack(
        
        
        ),
 
 rx.flex(
    rx.card(
        rx.chakra.image(
           boxSize='300px',
           objectFit='cover',
           src='/racktv.jpg',
           alt='cocina de frente',
           )
    ),
    rx.card(
            rx.chakra.image(
                   boxSize='300px',
                   objectFit='cover',
                   src='/cuarto1.jpg',
                   alt='cocina de frente',
            )
    ),
    rx.card(
    rx.chakra.image(
           boxSize='300px',
           objectFit='cover',
           src='/coock.jpg',
           alt='cocina de frente',
        )
    ),
            rx.card(
            rx.chakra.image(
                   boxSize='300px',
                   objectFit='cover',
                   src='/inclinado.jpg',
                   alt='cocina de frente',
                )
            ),
            rx.card(
            rx.chakra.image(
                   boxSize='300px',
                   objectFit='cover',
                   src='/local.jpg',
                   alt='cocina de frente',
                )
            ),
            rx.card(
            rx.chakra.image(
                   boxSize='300px',
                   objectFit='cover',
                   src='/mesa2.jpg',
                   alt='cocina de frente',
                )
            ),
    spacing="2",
    width="100%",
    flex_wrap="wrap",
    align="center",
    justify="center",
)
)
)