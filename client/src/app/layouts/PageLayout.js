import { default as React } from 'react';


const PageLayout = ({children}) => {
  return (
    <div className="page">
      <main className="page__main">
        {children}
      </main> 
    </div>
  );
};

export default PageLayout;
