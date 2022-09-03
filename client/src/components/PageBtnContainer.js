import { useAppContext } from '../context/appContext';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';

const PageBtnContainer = () => {
  const { numOfPages, page } = useAppContext();

  const nextPage = () => console.log('next page');

  const prevPage = () => console.log('previous page');

  return (
    <Wrapper>
      <button className='prev-btn' onClick={PrevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='btn-container'>buttons</div>
      <button className='next-btn' onClick={nextPage}>
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
