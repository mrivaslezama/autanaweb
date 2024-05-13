import reflex as rx
import datetime


def footer(details=True) -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.vstack(
                rx.video(
                    url="/IMG_5252.MOV",
                    width="100%",
                    height="auto",
                    playing=True,
                    loop=True,
                    muted=True,
                ),        
            align="center",
            justify="center",
            width="100%"
        )
    )
)