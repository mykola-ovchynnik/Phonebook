import { useSelector } from 'react-redux';
import Loader from './Loader.styled';
import { GlobalLoadingSelector } from 'store/selectors';

export const GlobalLoader = () => {
  const isLoading = useSelector(GlobalLoadingSelector);

  return isLoading ? <Loader /> : null;
};
