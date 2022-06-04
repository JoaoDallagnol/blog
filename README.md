


<h1 align="center">blog</h1>


<p align="center">
    Projeto blog criado com Node.js, Express, Sequelize, Mysqle varias outras ferramentas!!
<p/>
<br>

<h2>Tutorial de instalação e configuração!</h2>


<h3>Isntalando o MySQL  </h3>
 <p> - Baixar o mysql community server </p>
 <p> - Definir senha do usuario root do servidor</p>
 <p> - Colocar o caminho da pasta bin do mysql nas variaveis de ambiente do computador</p>
 <p> - Baixar o mysql workbench (se ja foi feito os passos anteriores, o workbenche automaticamento ja vai fazer a conexão com o mysql instalado na maquina)</p>
 
 <br>
<h3>Clonando de configurando o projeto</h3>
<p> - Clone o projeto e rode o comando:</p>

```
npm install
```

<p> - Abra o mysql workbench e crie "new schema in the connected server" com o nome "blog"</p>
<p> - Vá ate o arquivo connection.js e mude o 'root' e '1234', para o seu login e senha respectivamente do mysql workbench</p>
<p> - Vá ate os aqruivos "Article.js", "Category.js" e "User.js"</p>
<p> - Retire o comentario da linha do sync em seus respectivos arquivos</p>
<p> - Salve os arquivos</p>
<p> - Rode o serivodor com o comando:</p>

```
nodemon index.js
```

<p> - Derrube o servidor</p>
<p> - Comenente ou exclua as linhas do comando sync em seus respectivos arquivos</p>
<p> - Salve os arquivos</p>
<p> - Rode o servidor e divirtasse</p>


