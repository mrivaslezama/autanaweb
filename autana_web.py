import reflex as rx
from autana_web.components.header import header


def index() -> rx.Component:
    return rx.vstack(

         header(),

    ),

app = rx.App()
app.add_page(index)