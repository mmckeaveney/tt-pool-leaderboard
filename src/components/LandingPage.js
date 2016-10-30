import React from 'react';
import {MA_LONG} from 'constants/staticFiles';

export const LandingPage = () => (
    <div className="row">
        <div className="col-xs-6 col-sm-6">
            <div className="card">
                <img className="card-img-top" src={MA_LONG} alt="Image not found"/>
                <div className="card-block">
                    <h4 className="card-title">Table Tennis</h4>
                    <p className="card-text">Current Champion - Ralph McTeggart</p>
                    <a href="#" className="btn btn-primary">Record a match</a>
                </div>
            </div>
        </div>
        <div className="col-xs-6 col-sm-6">
            <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-block">
                    <h4 className="card-title">Pool</h4>
                    <p className="card-text">Current Champion - Paul Gilleece</p>
                    <a href="#" className="btn btn-primary">Record a match</a>
                </div>
            </div>
        </div>
    </div>
);

export default LandingPage;
