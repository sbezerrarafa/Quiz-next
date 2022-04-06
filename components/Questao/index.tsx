import QuestaoModel from '../../model/questao';
import Enunciado from '../Enunciado/Enunciado';
import Resposta from '../Reposta/index';
import Temporizador from '../Temporizador';
import styles from './Questao.module.css';

const letras = [
  { valor: 'A', cor: '#f2c866' },
  { valor: 'B', cor: '#f266ba' },
  { valor: 'C', cor: '#85d4f2' },
  { valor: 'D', cor: '#bce596' },
];

interface QuestaoProps {
  valor: QuestaoModel;
  tempoPraResponder?: number;
  respotaFornecida: (index: number) => void;
  tempoEsgotado: () => void;
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor;

  function redenrizarRespostas() {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
          key={`${questao.id}-${i}`}
          valor={resposta}
          indice={i}
          letra={letras[i].valor}
          corFundoLetra={letras[i].cor}
          respostaFornecida={props.respotaFornecida}
        />
      );
    });
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      <Temporizador
        key={questao.id}
        duracao={props.tempoPraResponder ?? 10}
        tempoEsgotado={props.tempoEsgotado}
      />
      {redenrizarRespostas()}
    </div>
  );
}
