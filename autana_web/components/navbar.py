import reflex as rx


def navbar() -> rx.Component:
    return rx.hstack(
            rx.image(src="/logo.jpg", width="3em", justify="center"),
            rx.text("Autana Muebles", 
                    font_size="2em", 
                   ),              
            rx.spacer(),
            rx.menu.root(
                rx.menu.trigger(
                    rx.button("Menu"),
                ),
                rx.menu.content(
                    rx.menu.item("Contactanos"),
                    rx.menu.separator(),
                    rx.menu.item("Instagram"),
                    rx.menu.item("Nosotros"),
                    width="10rem",
                ),
            ),
            top="0px",
            height="3em",
            color_scheme='black',
            back_ground='blue',
            position="sticky",
            padding="3em",
            width="100%",
            z_index="999",
            )
