import { useSelector } from 'react-redux';
import Loader from './Loader.styled';
import { GlobalErrorSelector, GlobalLoadingSelector } from 'store/selectors';

export const GlobalLoader = () => {
  const isLoading = useSelector(GlobalLoadingSelector);
  const error = useSelector(GlobalErrorSelector);
  return (
    <>
      {error ? console.log(error) : null}
      {isLoading ? <Loader /> : null}
    </>
  );
};
