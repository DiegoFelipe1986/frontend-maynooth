# Usa una imagen de Node.js
FROM node:14 as builder

# Establece el directorio de trabajo en la aplicación
WORKDIR /usr/src/app

# Copia los archivos de tu aplicación al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de tu aplicación
COPY . .

# Construye la aplicación
RUN npm run dev


# Expón el puerto en el que el servidor web se ejecutará (puerto por defecto para Nginx)
EXPOSE 80

# Comando para iniciar el servidor web
CMD ["npm", "start"]
