# Use a imagem base do Node.js (escolha a versão LTS mais recente)
FROM node:lts-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos de package.json e package-lock.json (ou yarn.lock) primeiro
# para aproveitar o cache de camadas do Docker
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install --production

# Copie o restante dos arquivos da sua aplicação para o container
COPY . .

# Exponha a porta em que sua aplicação escuta (verifique a configuração da sua aplicação)
EXPOSE 8080

# Comando para iniciar sua aplicação
CMD [ "node", "start" ]
