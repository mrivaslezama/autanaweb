import reflex as rx

#contenido
def content():
    return rx.container(
        rx.vstack(
        rx.chakra.heading("Fabricantes de muebles en melamina", maxW='2xl'),
                rx.chakra.hstack(
                    rx.chakra.heading("Modelamos en 3D", maxW='2xl'),
                    rx.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/tekaart.jpg',
                            alt='3D',
                         )
                    ),
                #insertar fotos a la izquierda
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
                    ),
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



def navbar():
    return rx.hstack(
        rx.hstack(
            rx.image(src="/logo.jpg", width="2em"),
            rx.heading("Autana Muebles", font_size="2em"),
        ),
        rx.spacer(),
        rx.menu.root(
            rx.menu.trigger(
                rx.button("Menu"),
            ),
            rx.menu.content(
                rx.menu.item("Dashboard", href="/dashboard"),
                rx.menu.separator(),
                rx.menu.item("Galeria"),
                rx.menu.item("Contactanos"),
            ),
        ),
        position="fixed",
        top="0px",
        background_color="lightgray",
        padding="1em",
        height="4em",
        width="100%",
        z_index="5",
    )



def index():
    return rx.fragment(
        navbar(),
        rx.container(
            content(),
            padding_top="6em",
            max_width="60em",
        )
    )


app = rx.App()
app.add_page(index)