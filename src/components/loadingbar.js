const ProgressBar = (props) => {
    const { completed } = props;



    const fillerStyles = {
      width: `${completed}%`,
    }

    const labelStyles = {
      position: 'relative',
      top: '0.25rem',
      paddingRight: '1rem',
      color: 'black',
      fontWeight: 'bold'
    }

    return (
      <div className="loadingDiv">
        <div className="fillerDiv" style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };

  export default ProgressBar;