import React from 'react';
import './Autho.css';
import back from '../Image/back.png';

const Autho = () => {
    return (<>
        <div className='d-flex'>
        <div className='img_div'   style={{
              background: `url(${back})`,
            }}>
              <img src={back} alt="back"/>
            </div>
            <div></div>
        </div>
        </>
    );
};

export default Autho;