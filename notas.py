#crear entorno virtual .venv
python -m venv .venv

#activar source
source .venv/bin/activate

#apagar - .venv
deactivate


#instalar reflex
pip install reflex

#actualizar pip
pip install --upgrade pip

#inicializar proyecto en el directorio
reflex init

#exportar frontend

#build.sh
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
reflex init
reflex export --frontend-only
rm -fr public
unzip frontend.zip -d public
rm -f frontend.zip
deactivate


#components ->componentes visuales que tiene reflex
z_index = "999" siempre en la parte superior

#from autana_web.components.galery import galery
/components/navbar.py

#contenedor componente donde se representan cosas en forma horizontal
rx.hstack(
    rx.text("Anidando componentes"),
    rx.text("mouredev", height='40px'),
    position="sticky"
)

######
#12-05-2024 - 20:55
#
#
# Crea una carpeta que se llama views.... /views/header
#
def header()-> rx.Component:
    return rx.vstack(
        rx.avatar(name="Autana Muebles", size="9")
    )

from autana_web.components.link_button as link_button
def links()-> rx.Component:
    return rx.vstack(
        link_button(),       
    )

import reflex as rx
def link_button(text:str) -> rx.Component:
    return rx.button("")


##





"""
-- Oxford esl --
-- quiz easy --
"""