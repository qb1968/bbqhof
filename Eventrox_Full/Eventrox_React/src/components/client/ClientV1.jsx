import React from 'react';
import ClientV1Data from '../../jsonData/client/ClientV1Data.json'
import SingleClientV1 from './SingleClientV1';
import ReactWOW from 'react-wow';


const ClientV1 = () => {
    return (
        <>
            <section className="clients-section" style={{backgroundColor:"#dedede"}}>
                
                <div className="auto-container">
                    <div className="sec-title">
                        
                        <h2>Official Sponsors</h2>
                    </div>
                    {/* <img src={Truck} style={{padding:20,display:"flex",alignItems:"center"}} /> */}
                    {ClientV1Data.map(client =>
                        <SingleClientV1 key={client.id} client={client} />
                    )}
                </div>
            </section>
        </>
    );
};

export default ClientV1;