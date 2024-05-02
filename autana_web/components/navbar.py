import reflex as rx


def navbar() -> rx.Component:
    return rx.hstack(
        rx.hstack(
            rx.image(src="/logo.jpg", width="2em"),
            rx.heading("Autana Muebles", font_size="2em", color_scheme='red'),
        ),
        rx.spacer(),
        rx.menu.root(
            rx.menu.trigger(
                rx.button("Menu"),
            ),
            rx.menu.content(
                rx.link("Nosotros", href="/"),
                rx.menu.separator(),
                rx.menu.item("Galeria",shortcut="·#galeria"),
                rx.menu.item("Contactanos"),
            ),
        ),
        position="sticky",
        top="0px",
        background_color="black",
        padding="1em",
        height="4em",
        width="100%",
        z_index="999",
    )