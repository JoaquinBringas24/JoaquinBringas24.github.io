from flask import Flask
from flask import render_template

app = Flask(__name__, 
            template_folder='C:/Users/joaco/OneDrive/Escritorio/Proyectos/flask/cv/',
            static_folder='C:/Users/joaco/OneDrive/Escritorio/Proyectos/flask/cv/')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)