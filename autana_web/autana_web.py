import reflex as rx
from autana_web.components.navbar import navbar
from autana_web.components.content import content
from autana_web.components.header import header
from autana_web.components.galery import galery


def index() -> rx.Component:
    return rx.vstack(
         navbar(),
         header(),
         content(),
         galery(),
    )        


app = rx.App()
app.add_page(index)