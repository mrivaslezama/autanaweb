import reflex as rx


#galeria
def galery() -> rx.Component:
    return rx.box(     
        rx.flex(
           rx.heading("Nuestros proyectos"),
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
                   rx.card(
                   rx.chakra.image(
                          boxSize='300px',
                          objectFit='cover',
                          src='/bar.jpg',
                          alt='cocina de frente',
                       )
                   ),
                   rx.card(
                   rx.chakra.image(
                          boxSize='300px',
                          objectFit='cover',
                          src='/negro.jpg',
                          alt='cocina de frente',
                       )
                   ),
        spacing="2",
        width="100%",
        flex_wrap="wrap",
        align="center",
        justify="center",
        background_color="var(--accent-2)",
        radius="full",
        margin="24px",
        padding="25px",
        flex_grow="1",
        text_align="center",
    )
)
