
export const containerStyles = `
display: column;
margin: 0 auto;
max-width: 1200px;
width: 100%;
box-sizing: border-box
align-items: center;
padding-bottom: 0;

@media (max-width: 768px) {
    margin: 0 auto;
    max-width: 390px;
    width: 100%; 
    box-sizing: border-box
    justify-content: center;
}
`;

export const moviesContainerStyles = `
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 1rem;
justify-content: center;

@media (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  padding: 20px;
}
`;

export const titleStyles = `
@media (max-width: 768px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: left;
    margin-left: 2rem;
  
    font-size: 1rem;
    
  }
`;
