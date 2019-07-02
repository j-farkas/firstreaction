function MyStyledComponent(props) {
    return (
     <div>
        <p className="whiteText">only this paragraph will get the style :)</p>
        <style jsx>{`
          .whiteText {
            color: white;
          }
      `}</style>
    </div>
    );
  }
  
  export default MyStyledComponent;