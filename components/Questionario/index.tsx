import QuestaoModel from '../../model/questao';
import Botao from '../Botao';
import Questao from '../Questao';
import styles from './Questionario.module.css';

interface QuestionarioProps {
  questao: QuestaoModel;
  ultima: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irProxPasso: () => void;
}

export default function Questionario(props: QuestionarioProps) {
  function respostaFornecida(indice: number) {
    if (props.questao.naoRespondida) {
      props.questaoRespondida(props.questao.responderCom(indice));
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao ? (
        <Questao
          valor={props.questao}
          tempoPraResponder={6}
          respotaFornecida={respostaFornecida}
          tempoEsgotado={props.irProxPasso}
        />
      ) : (
        false
      )}

      <Botao
        onClick={props.irProxPasso}
        texto={props.ultima ? 'Finalizar' : 'Próximo'}
      />
    </div>
  );
}
