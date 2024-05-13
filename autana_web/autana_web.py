import reflex as rx
from autana_web.components.navbar import navbar
from autana_web.components.content import content
from autana_web.components.header import header
from autana_web.components.galery import galery
from autana_web.components.footer import footer


def index() -> rx.Component:
    return rx.vstack(
         navbar(),
    rx.vstack(
         header(),
         content(),
         galery(),
         spacing="4"
    ),
        footer()
)

app = rx.App()
app.add_page(index)