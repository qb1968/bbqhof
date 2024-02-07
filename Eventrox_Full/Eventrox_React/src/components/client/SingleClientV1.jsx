import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import SingleGalleryV1 from '../gallery/SingleGalleryV1';
// import Truck from "../../../public/images/clients/gal1.jpg"

const SingleClientV1 = ({ client }) => {
    const { title } = client

    return (
        <>
            <div className="sponsors-outer">
                
              
                    
                      
                          
                       
                    
                
                <div className="row">
                    <img src='/images/clients/gal1.jpg' style={{padding:20,display:"flex",alignItems:"center"}} />
                    {client.clientData.map(thumb =>
                        <div className="client-block col-lg-6 col-md-6 col-sm-12" key={thumb.id}>
                            
                            <figure className="image-box"><Link to={void (0)}><img src={`images/clients/${thumb.clientThumb}`} alt="image"  /></Link></figure>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SingleClientV1;