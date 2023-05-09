# Plano de Testes de Software

### Cenário primário
* O usuário deve realizar logIn na plataforma
* O usuário deve conseguir se cadastrar na plataforma como prestador de serviços ou cliente
* O cliente deve conseguir realizar uma pesquisa por serviço
* O cliente deve conseguir agendar um serviço
* O cliente deve conseguir cancelar um serviço
* O prestador deve conseguir acessar seus atendimentos
* O prestador deve conseguir cancelar seus atendimentos
### Cenários Alternativos
* O cliente deve conseguir reagendar um serviço
* O cliente pesquisa por um serviço indisponível
### Cenários de exceção
* O usuário realiza um logIn inválido na plataforma
* O cliente não consegue agendar um serviço por falta de horários disponíveis na data escolhida

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

# Registro de Testes de Software


| Caso de teste         |    Cadastrar cliente  | 
|  :-----------:   |   ------------   | 
|  Pré-Condição   |  Acesso ao botão de "cadastre-se" | 
| Procedimento       | 1 - O ator seleciona campo do formulário,  2 - Faz input das informações, 2.1- Para os campos Cep e telefone, só input do tipo número são válidos, e para email, deverá conter @, 3 - Caso qualquer um dos campos não seja preenchido, campo deverá ficar vermelho e mostrar alerta de informação obrigatória, 4 - Ao preencher todos os campos obrigatórios e clicar em cadastrar, vai para a página de cadastro do Cliente ou Prestador  |
| Resultado Esperado  | Caso o usuário escolha na área do "Você deseja se cadastrar como:" a opção de "Cliente" (e todos os campos estiverem corretamente preenchidos) - Ir para o cadastro do Cliente/  Caso o usuário escolha a opção de Prestador (e todos os campos estiverem corretamente preenchidos) - Ir para o cadastro do Prestador |
| Dados de entrada      | Cliente ou prestador - boolean, Nome - string, E-mail - string , Telefone - int, Cep - int, Senha - string, Confirme senha - string|
| Prioridade      | Alta   |
| Ambiente    | MacOS Monterey, Google Chrome versão 102.0 | 
| Tecnica    |  Manual | 
| Iteração    |  1 iteração | 
<td>
 <td>

![image](https://user-images.githubusercontent.com/101751308/176052702-67915afe-0d54-49c1-be6b-c268bbb55bdc.png)






| Caso de teste         |    Cadastrar cliente  | 
|  :-----------:   |   ------------   | 
|  Pré-Condição   |  Acesso ao formulário de cadastro | 
| Procedimento       | 1 - O ator seleciona campo do formulário,  2 - Faz input das informações, 2.1 -Caso qualquer um dos campos não seja preenchido, campo deverá ficar vermelho e mostrar alerta de informação obrigatória, 3 - Ao preencher todos os campos obrigatórios e clicar em cadastrar, retorna mensagem  |
| Resultado Esperado  | Finalizar "cadastro parceiro cliente" e seguir para a página de Login |
| Dados de entrada      | Logradouro - String, Número - Number, Complemento- String, Cidade - String, Bairro- String|
| Prioridade      | Média   |
| Ambiente    | MacOS Monterey, Google Chrome versão 102.0 | 
| Tecnica    |  Manual | 
| Iteração    |  1 iteração | 
<td>
 <td>
<img width="1097" alt="Caso de erro - Campo obrigatório para posseguir" src="https://user-images.githubusercontent.com/22478906/175795627-0b1edf8b-9fcf-4e06-af16-8ce9774bf218.png">

 
    

| Caso de teste         |   Busca  | 
|  :-----------:   |   ------------   | 
|  Pré-Condição   |  Clique no botão buscar na home - Leva a página de resultado de busca com prestadores ou busca dentro da página de resultados| 
| Procedimento       | 1 - Ator digita o que procura e clica buscar 2 - Avalia todos os prestadores ou busca pelo tipo de serviço 3 - Busca pelo nome     |
| Resultado Esperado  | Listagem de acordo com parâmetros  |
| Dados de entrada      | Formulário de busca - string  |
| Prioridade      | Alta   |
| Ambiente    | MacOS Monterey, Google Chrome versão 102.0 | 
| Tecnica    |  Manual | 
| Iteração    |  1 iteração | 
 <td> 
  <img width="1511" alt="Busca por serviço tipo encanador" src="https://user-images.githubusercontent.com/22478906/175796197-1eab1d45-4f5b-4cb3-90ad-4777b9a638df.png">
  <td>
<img width="1510" alt="Busca por serviço tipo eletricista" src="https://user-images.githubusercontent.com/22478906/175796202-0b7c33a3-12bd-4088-a543-c5b855cda354.png">
   <td>
<img width="1512" alt="Serviço sem prestador" src="https://user-images.githubusercontent.com/22478906/175796206-6c9a3573-0fbe-47f8-a9dc-872de9b278a2.png">


| Caso de teste         |   Agendamento | 
|  :-----------:   |   ------------   | 
|  Pré-Condição   |  Categoria,data e horário selecionado  | 
| Procedimento       | 1 - Clique na categoria de atendimento 2 - Seleção de data, 3 - Seleção de horário   |
| Resultado Esperado  | Redirecionamento para agendamento realizado com sucesso |
| Dados de entrada      | Categoria, data, horário  |
| Prioridade      | Média   |
| Ambiente    | MacOS Monterey, Google Chrome versão 102.0 | 
| Tecnica    |  Manual | 
| Iteração    |  1 iteração | 
    
<img width="1436" alt="Horários disponíveis" src="https://user-images.githubusercontent.com/22478906/175801925-5f30d92d-0430-4d07-85e7-81c0c2a4a370.png">
    
<img width="1043" alt="Serviço agendado" src="https://user-images.githubusercontent.com/22478906/175801940-b037c4e2-3634-4fbf-b868-03a2a34e12ce.png">
<tr>

 
 
| Caso de teste         |  Cadastro prestador - Primeira Página | 
|  :-----------:   |   ------------   | 
|  Pré-Condição   |  Ter selecionado a opção "Prestador" na primeira tela de cadastro geral, e preenchido | 
| Procedimento       | 1 - O ator seleciona campo do formulário,  2 - Faz input das informações, 3 - Caso qualquer um dos campos não seja preenchido, campo deverá ficar vermelho e mostrar alerta de informação obrigatória, 4 - Ao preencher todos os campos obrigatórios e clicar em cadastrar, segue-se para o cadastro do Prestador|
| Resultado Esperado  |  Caso não preencha os campos corretamente - Alerta com "Mensagem de erro ao tentar prosseguir sem campos obrigatórios". Se os campos estiverem corretamente preenchidos - Seguir com o cadastro do prestador   |
| Dados de entrada      | Profissão :  string, Descrição: string, Serviços: string  |
| Prioridade      | Alta  |
| Ambiente    | MacOS Monterey, Google Chrome versão 102.0 | 
| Tecnica    |  Manual | 
| Iteração    |  1 iteração | 
 
![image](https://user-images.githubusercontent.com/101751308/176048460-b31e7389-bb0c-418b-983a-379eaf8025a1.png)


 
 


| Caso de teste         |  Cadastro prestador - Horários | 
|  :-----------:   |   ------------   | 
|  Pré-Condição   |  Ter selecionado a opção prestador na primeira tela de cadastro geral, e preenchido | 
| Procedimento       | 1 - Ter realizado o cadastro dos serviços, 2 - Digitar horario de entrada, 2.1 - Digitar horario de saida, 2.2- Digitar horario de inicio da pausa, 2.3 - Digitar horario de fim de pausa, 3 - Selecionar dias da semana |
| Resultado Esperado  | Caso não preencha os campos corretamente - Alerta com "Mensagem de erro ao tentar prosseguir sem campos obrigatórios". Se os campos estiverem corretamente preenchidos - Seguir para página de dados do estabelecimento  |
| Dados de entrada      | Horário de inicio: string, Horario de saída: string, Inicio da pausa: string, Fim da pausa: string, Dias da semana: string   |
| Prioridade      | Alta  |
| Ambiente    | MacOS Monterey, Google Chrome versão 102.0 | 
| Tecnica    |  Manual | 
| Iteração    |  1 iteração | 

 <img width="1493" alt="Campos corretos" src="https://user-images.githubusercontent.com/22478906/175802743-e2824c02-9b5c-4bd9-b13d-43822083e74b.png">

 Exemplo de cenario que deveria retornar erro
 <img width="1492" alt="Cenario a corrijir - imput de hora com letras" src="https://user-images.githubusercontent.com/22478906/175802751-49bf1654-c452-4cfc-8a95-80ffba181f2d.png">

 Feedback de informação obrigatória
 <img width="1492" alt="Alerta para campos obrigatórios" src="https://user-images.githubusercontent.com/22478906/175802780-7af62976-5f5d-4f83-af4d-00cb239d02f1.png">

 
 

| Caso de teste         |  Cadastro prestador - Finalização Cadastro do Prestador | 
|  :-----------:   |   ------------   | 
|  Pré-Condição   |  Ter selecionado a opção "Prestador" na primeira tela de cadastro geral, e preenchido | 
| Procedimento       | 1 - O ator seleciona campo do formulário,  2 - Faz input das informações, 3 - Caso qualquer um dos campos não seja preenchido, campo deverá ficar vermelho e mostrar alerta de informação obrigatória, 4 - Ao preencher todos os campos obrigatórios e clicar em cadastrar|
| Resultado Esperado  |  Caso não preencha os campos corretamente - Alerta com "Mensagem de erro ao tentar prosseguir sem campos obrigatórios". Se os campos estiverem corretamente preenchidos o cadastro do prestador é concluido - Na tela, prossegue-se: Alerta de "Usuário cadastrado com sucesso!" e segue-se para página do Login   |
| Prioridade      | Alta  |
| Ambiente    | MacOS Monterey, Google Chrome versão 102.0 | 
| Tecnica    |  Manual | 
| Iteração    |  1 iteração | 
 
![image](https://user-images.githubusercontent.com/101751308/176049482-8e9d3e57-f524-4f02-9687-666e5f05ba1a.png)
 
 ![image](https://user-images.githubusercontent.com/101751308/176049420-4b8b479e-2088-4327-94e9-e121cfa516d0.png)

 
 
 
 
## Avaliação
 
 **Pontos fortes**
 - Navegacao simples e intuitiva
 - Identidade visual consisa durante a jornada
 
 
**Pontos Fracos:** 
 - Falta de banco de dados, fazendo com que muitas funcionalidades não estejam integradas corretamente. - Falta de alertas para o caso de cancelamento de serviços agendados "Tem certeza que deseja prosseguir com o cancelamento do agendamento? sim/não" e mensagens de sucesso como "cancelamento realizado"
 - Implementacao de marcaras nos formularios para auxiliar no preenchimento correto
 - Ausencia de validacao de CEP
 - Permissão de selecao de datas passadas no calendario de agendamento
 - Carregamento dos horarios independente da data (deveriam aparecer somente após seleção de data)
 - Ausência de mensagem de "não há horarios disponíveis para esta data"
 - Ausencia de contador de caracteres em campos obrigatorios
 - Não permitir mesmo horario para campos horario de entrada/saida/inicio pausa e fim da pausa
 - Adicionar opcao de não ter horario de pausa
 
 
 **Melhorias:**
 - Correção de links e fluxos
 - Alteracao nos formularios de tel e cep para nao permitir imput de letras
 
 


> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
