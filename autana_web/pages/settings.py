"""The settings page."""
from ..components import container
from autana_web.templates import ThemeState, template

import reflex as rx


@template(route="/settings", title="Settings")
def settings() -> rx.Component:
    """The settings page.

    Returns:
        The UI for the settings page.
    """
    return rx.vstack(
        rx.heading("Settings", size="8"),
        rx.hstack(
            rx.text("Dark mode: "),
            rx.color_mode.switch(),
        ),
        rx.hstack(
            rx.text("Primary color: "),
            rx.select(
                [
                    "tomato",
                    "red",
                    "ruby",
                    "crimson",
                    "pink",
                    "plum",
                    "purple",
                    "violet",
                    "iris",
                    "indigo",
                    "blue",
                    "cyan",
                    "teal",
                    "jade",
                    "green",
                    "grass",
                    "brown",
                    "orange",
                    "sky",
                    "mint",
                    "lime",
                    "yellow",
                    "amber",
                    "gold",
                    "bronze",
                    "gray",
                ],
                value=ThemeState.accent_color,
                on_change=ThemeState.set_accent_color,
            ),
        ),
        rx.hstack(
            rx.text("Secondary color: "),
            rx.select(
                [
                    "gray",
                    "mauve",
                    "slate",
                    "sage",
                    "olive",
                    "sand",
                ],
                value=ThemeState.gray_color,
                on_change=ThemeState.set_gray_color,
            ),
        ),
        rx.text(
            "You can edit this page in ",
            rx.code("{your_app}/pages/settings.py"),
            size="1",
        ),
        #probando codigo
        rx.chakra.box(
            rx.chakra.vstack(
                rx.chakra.heading("PySocial", size="md"),
                        rx.chakra.box(
                        rx.chakra.heading("Followers", size="sm"),
                        
                        p=4,
                        border_radius="md",
                        border="1px solid #eaeaea",
                    ),
                    align_items="left",
                    gap=4,
                ),
                py=4,
                ),
        
        rx.chakra.box(
            rx.chakra.vstack(
                rx.chakra.heading("PySocial", size="md"),
                
                    rx.chakra.hstack(
                     
                    rx.chakra.heading("Probando que mas hacer", maxW='2xl'),
                    rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/cocinareal.jpg',
                            alt='cocina de frente',
                         ),
                         rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/cocina22.jpg',
                            alt='cocina diagonal',
                         ),
                    ),
                    
                        rx.chakra.box(
                        rx.chakra.heading("Followers", size="sm"),
                        rx.card("This is a card", color=rx.color("grass", 8)),

                        rx.select(
                        ["Option 1", "Option 2", "Option 3"],
                        color_scheme="blue",
                        size="3",
                        placeholder="Select an option",
                    ),
                        
                        p=4,
                        border_radius="md",
                        border="1px solid #eaeaea",
                    ),
                    align_items="left",
                    gap=4,
                ),
                py=4,
                ),
                rx.chakra.hstack(
                    rx.chakra.heading("Probando que mas hacer", maxW='2xl'),
                    rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/cocinareal.jpg',
                            alt='cocina de frente',
                         ),
                         rx.chakra.image(
                            boxSize='300px',
                            objectFit='cover',
                            src='/cocina22.jpg',
                            alt='cocina diagonal',
                         ),
                    ),
    )