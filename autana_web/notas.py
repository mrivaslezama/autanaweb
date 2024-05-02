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





"""
-- Oxford esl --
-- quiz easy --
"""