export default function initFuncionamento(){
    const funcionamento = document.querySelector('[data-semana]');
const diaSemana = funcionamento.dataset.semana.split(',').map(item => +item);
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;
const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

if(semanaAberto && horarioAberto){
    funcionamento.classList.add('aberto');
    console.log('ok')
}
}