import reflex as rx
import datetime


def header(details=True) -> rx.Component:
    return rx.vstack(
        rx.chakra.heading("Fabricantes de muebles en melamina",
                          top="50%",
                          width="100%",
                          text_align="center",                         
                          ),
                
                rx.spacer(),    

                #insertar fotos a la derecha
                    rx.chakra.hstack(
                    rx.chakra.heading("Muebles a medida y proyectos personalizados", maxW='2xl'),
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
                         )
                    ),
                    rx.chakra.hstack(
                    rx.image(objectFit='cover',
                            src='/proyectos.jpg',
                            alt='3D',
                         )
                    ),
                    rx.spacer(),
                    #insertar fotos a la izquierda
                    rx.chakra.hstack(
                    rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/inclinado.jpg',
                            alt='mueble_inclinado',
                         ),
                         rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/cuarto1.jpg',
                            alt='cocina diagonal',
                         ),
                    rx.chakra.heading("Aprovecha cada espacio disponible", maxW='2xl')
            ),
                #insertar fotos a la derecha
                    rx.chakra.hstack(
                    rx.chakra.heading("+10 años de experiencia", maxW='2xl'),
                    rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/negro.jpg',
                            alt='closet_negro',
                         ),
                         rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/bar.jpg',
                            alt='mini_bar',
                         )
                    ),
                    rx.spacer(),
                    #insertar fotos a la izquierda
                    rx.chakra.hstack(
                    rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/coock.jpg',
                            alt='mueble_inclinado',
                         ),
                         rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/mesa2.jpg',
                            alt='cocina diagonal',
                         ),
                    rx.chakra.heading("Empleamos colores modernos y materiales de la mayor calidad", maxW='2xl')
            )

    )