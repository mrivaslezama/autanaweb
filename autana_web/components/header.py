import reflex as rx

def header() -> rx.Component:
    return rx.fragment(
            rx.vstack(
                rx.video(
                    url="/IMG_5252.MOV",
                    width="100%",
                    height="auto",
                    playing=True,
                    loop=True,
                )
            )       
        )
    

    