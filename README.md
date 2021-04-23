# Congresso Remoto

## Requisitos

* Node 12.x
* [Angular CLI 9.1.7](https://github.com/angular/angular-cli)

## Como desenvolver

### Dependências

Primeiro, instale as dependências do projeto com `npm install`.

### Modo de desenvolvimento

Utilize `npm run start-dev` e navegue até http://localhost:4200/ para ver o app em modo de desenvolvimento.

### Build

O comando `npm run build` processa o app e o prepara para deploy. O comando `npm start` irá subir um servidor com esta versão preparada. É útil para testar o app antes do deploy em produção.

### Deploy

O comando `npm run deploy` cria o build e realiza o deploy no Github Pages, com a configuração do domínio [congressoremoto.org.br](https://congressoremoto.org.br).

Para mais informações sobre configuração de deploy ver [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages)
