# NestJs + Clean Architecture

- A beleza da Clean Architecture não é apenas ter uma infraestrutura plug-and-play , mas também ter uma apresentação plug-and-play . Realmente não importa se o seu usuário vai acessar o aplicativo via HTTP, CLI, telnet ou mesmo sinais de fumaça.

- O NestJs é um framework Node.js que permite criar aplicativos escaláveis de forma eficiente. Ele usa o conceito de injeção de dependência para resolver as dependências de forma eficiente e transparente.

### Presentation => application => domain

## Application

### Use Cases

- Use cases são a ponte entre a camada de domínio e a camada de aplicativos. Eles são responsáveis ​​por executar a lógica de negócios e, portanto, são a única camada que pode a acessar diretamente.

## Domain

- O domínio é a parte mais importante da arquitetura limpa. É onde a lógica de negócios é implementada. É a única camada que não deve depender de nenhuma outra camada.

### Entities

- As entidades são objetos de valor que representam objetos do mundo real. Eles são a única camada que pode conter lógica de negócios.

## Infrastructure[infra]

### Injection Dependencies

- A injeção de dependência parece legal porque é legal. Com a Clean Architecture, você não precisará de dependências direcionadas ao seu código como costumava fazer. Agora, toda a infraestrutura é regulada por interfaces , assim como explicado no primeiro artigo desta série .

- Como estamos seguindo interfaces, podemos ter várias implementações para a infraestrutura. É tarefa do Controller fornecer um UseCase (Domain Layer) com uma implementação de infraestrutura que, adivinha, implemente uma interface que o UseCase saiba usar.

## Presentation

- A camada de apresentação tem 2 objetivos fundamentais: lidar com I/O e injetar infraestrutura.

### A camada de Apresentação[Presentation] tem 3 camadas

- Os controladores são responsáveis ​​por manipular as entradas
- Os apresentadores são responsáveis ​​por lidar com as saídas;
- Middlewares existem no meio, eles podem ajudar tanto na entrada quanto na saída.

#### ENTRADA

- A primeira tarefa ao receber uma entrada do usuário nos Controladores é transformar os dados recebidos em Objetos de Valor. Lembre-se, dificilmente usaremos tipos nativos em nossa aplicação, tudo deve ser objetos .

#### Tratamento de erros com Middlware

- O middleware de tratamento de erros é responsável por capturar os erros lançados por qualquer outro middleware ou controlador e transformá-los em uma resposta HTTP adequada.
[artigo](https://ntorga.com/the-presentation-layer-clean-architecture-and-domain-driven-design-on-php/)

## Shared

- Se vocês observarem, as camadas/diretórios "Shared" e "Infra" não estão representados no fluxo acima, mas foi proposital, uma vez que a camada "Shared" tá fora da arquitetura, e poderá ser vista por todas as camadas da aplicação, não faz parte do cronograma original mas eu costumo (e recomendo) usar para resolver algumas situações padrões, como criação de enums que serão visíveis por todo o projeto, ou dtos que vão existir desde a camada "Presentation" até a camada "Use cases" e poderá ser visto por ambos.

- Por ser uma camada de fora da aplicação, devemos ter cuidado com o que colocamos nela, para não acabar sujando-a, por exemplo: se você tiver classes de exceções customizadas, deve pensar que poderá coloca-las aqui, e você não estará totalmente errado, desde que essa classe não inclua acoplamentos com o framework, ou ainda com a estrutura de comunicação, você pode coloca-la aqui.
