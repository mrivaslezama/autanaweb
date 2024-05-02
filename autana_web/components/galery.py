import reflex as rx

#galeria
def galery() -> rx.Component:
    return rx.section(
        rx.card("Section 1"),
        rx.divider(),
        rx.card("Section 2"),
        spacing="4",
        direction="column",
        align="center",
    )