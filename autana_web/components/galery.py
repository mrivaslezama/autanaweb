import reflex as rx

#galeria
def galery() -> rx.Component:
    return rx.flex(
            rx.hstack(
            rx.heading("Nuestros proyectos"),
        rx.hstack(
        rx.card(
            rx.chakra.image(
                   boxSize='300px',
                   objectFit='cover',
                   src='/coock.jpg',
                   alt='cocina de frente',
                )
            ),
        rx.divider(orientation="vertical", size="4"),
        rx.card(
            rx.chakra.image(
                   boxSize='300px',
                   objectFit='cover',
                   src='/cuarto1.jpg',
                   alt='cocina de frente',
                )

                ),
        rx.divider(orientation="vertical", size="4"),
        rx.card(
            rx.chakra.image(
                   boxSize='300px',
                   objectFit='cover',
                   src='/racktv.jpg',
                   alt='cocina de frente',
                )
            ),

        align="center",
        spacing="4",
        width="100%",
        height="10vh",
        )
    )
)