import React from 'react';
import {APP_LABELS} from '../../constants/AppLabels';

const Index = () =>{
  return (
      <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
            <a href={window.location.href} className="navbar-brand">{APP_LABELS.APP_HEADER_NAME}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
  );
};

export default Index;