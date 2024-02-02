export const ContainerStyled = `
  
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding-bottom: 0;
  

  @media (max-width: 768px) {
    margin: 0 ;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
  }
`;

export const CardStyled = `
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
    justify-content: center;
    padding: 0;}
`;

export const MediaImageStyled = `
  width: 400px;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 200px;
    height: 300px;
    margin-left: 0;
    margin-top: 15px;
  }
`;

export const MediaTitleStyled = `
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    justify-content: left;
    margin-left: 0;
    font-size: 18px;
  }
`;

export const MediaRatingStyled = `
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  color: #f1c40f;

  @media (max-width: 768px) {
    justify-content: left;
    font-size: 8px;
  }
`;

export const MediaLinkStyled = `

`;

export const MediaSinopseStyled = `
  font-size: 16px;
  margin-bottom: 10px;

  @media (max-width: 768px) {

    max-width: 300px;
    justify-content: left;
    margin-left: 0;
    font-size: 8px;
  }
`;

export const ElencoStyled = `
mask-image: linear-gradient(270deg, transparent 3%, black 25%, black 80%);
overflow-x: auto;
box-sizing: border-box;
width: 1200px;

h2 {
  margin-bottom: 10px;
}

ul {
  display: flex;
  gap: 10px;
  

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #484848;
    border-radius: 10px;
    box-sizing: border-box;

    img {
      width: 130px;
      height: 200px;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }

    p {
      font-size: 14px;
      text-align: center;
      margin: 0;
      padding: 0;
    }
    h1 {
      font-size: 14px;
      text-align: center;
      margin: 0;
      padding: 0;
    }
  }
}

    @media (max-width: 768px) {

      display: flex;
      flex-direction: column;
      max-width: 300px;
      box-sizing: border-box;
      padding:0;

      h2 {
        margin : 0;
        box-sizing: border-box;

      }
      ul {
        display: flex;
        gap: 5px;
        box-sizing: border-box;
        
        
      
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #484848;
          border-radius: 10px;
          box-sizing: border-box;
      
          img {
            width: 80px;
            height: 100px;
            object-fit: cover;
            border-radius: 10px 10px 0 0;
            box-sizing: border-box;
          }
      
          p {
            font-size: 8px;
            text-align: center;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          h1 {
            font-size: 10px;
            text-align: center;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
 
  }
`;