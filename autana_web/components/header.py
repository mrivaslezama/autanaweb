import reflex as rx
import datetime


def header(details=True) -> rx.Component:
    return rx.vstack(
        rx.chakra.heading("Fabricantes de muebles en melamina",
                          top="50%",
                          width="100%",
                          text_align="center",                         
                          ),
                rx.chakra.hstack(
                    rx.image(objectFit='cover',
                            src='/proyectos.jpg',
                            alt='3D',
                         )
                    ),
                #insertar fotos a la derecha
                    rx.chakra.hstack(
                    rx.chakra.heading("Con más de 10 años en el mercado", maxW='2xl'),
                    rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/local.jpg',
                            alt='cocina de frente',
                         ),
                         rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/mesa.jpg',
                            alt='cocina diagonal',
                         ),
                    ),
            )