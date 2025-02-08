FROM python:3.9-slim

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar e instalar las dependencias
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto
EXPOSE 8000

# se opto por usar gunicorn en vez de cherrypy
CMD ["gunicorn", "DjangoMicroservice.wsgi:application", "--bind", "0.0.0.0:8000"]
