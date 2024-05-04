import reflex as rx


def navbar() -> rx.Component:
    return rx.hstack(
            rx.image(src="/logo.jpg", width="3em", justify="center"),
            rx.text("Autana Muebles", 
                    font_size="2em", 

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
                rx.menu.item("item 1"),
                rx.menu.separator(),
                rx.menu.item("Item 2"),
                rx.menu.item("Item 3"),
                width="10rem",
            ),
        ),
        top="0px",
        height="4em",
        color_scheme='black',
        position="fixed",
        padding="4em",
        width="100%",
        z_index="999",
        )
