import { Triangle} from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
        <Triangle
          height="80"
          width="80"
          color="#8b8c9c"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
    </div>
  );
};

export default Loader;