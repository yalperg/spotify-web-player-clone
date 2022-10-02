import { useHistory } from 'react-router';
import { PreviousIcon } from 'assets/icons';

const PreviousBtn = () => {
  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <button onClick={goBackHandler}>
      <PreviousIcon />
    </button>
  );
};

export default PreviousBtn;
