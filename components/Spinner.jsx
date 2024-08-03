const Spinner = ({ size = 40 }) => {
    return (
      <div
        className="inline-block animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-violet-800"
        style={{ width: size, height: size }}
      />
    );
  };
  
  export default Spinner;