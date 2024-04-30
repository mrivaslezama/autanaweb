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




"""
-- Oxford esl --
-- quiz easy --
"""