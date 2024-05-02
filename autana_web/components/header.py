import reflex as rx

def header() -> rx.Component:
    return rx.container(
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
        ),
    rx.spacer()
    