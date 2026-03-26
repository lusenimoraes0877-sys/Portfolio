const projetos = [
{
titulo: "Projeto Calculadora",
descricao: "Uma calculadora feita com JavaScript"
},
{
titulo: "Lista de Tarefas",
descricao: "Aplicativo simples de tarefas"
},
{
titulo: "Site de Receitas",
descricao: "Site com receitas culinárias"
}
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {

const div = document.createElement("div");
div.classList.add("projeto");

div.innerHTML = `
<h3>${projeto.titulo}</h3>
<p>${projeto.descricao}</p>
`;

container.appendChild(div);

});
