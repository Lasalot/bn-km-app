const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 'auto'
    }
  
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