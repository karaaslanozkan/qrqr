import React, {useState,useEffect} from 'react'
import {Fab, TextareaAutosize,Button} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'
import axios from 'axios';
function QRscanner() {
    useEffect(()=>{
    
      });
      const [mounturl, setMounturl] = useState("");
      const [isLoading, setIsLoading] = useState(true);
      const [againScan, setAgainScan] = useState(false);
      const [product, setProduct] = useState([]);   
    const [qrscan, setQrscan] = useState('');

    const handleScan = data => {
        if (data) {

            if(!againScan)
           {
            setIsLoading(true)
             var pro = data.split("/");
            axios( "https://jsonplaceholder.typicode.com/users/"+ pro[4] )
            .then((res) => setProduct(res.data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));
            setQrscan("Ürün Fiyatı : "+product.id+" TL");
            setAgainScan(true);
        }
        }
    }


    const handleError = err => {
    console.error(err)
    }

    return (
      <div>
   
            <h1>Kartela Qr Okuyucu</h1>
            <center>
            <div>
                <QrScan
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320}}
                />
            </div>
            </center>
            <br/><br/>
            <br/>
<br/>
<h2>{qrscan}</h2>
<br/>
{isLoading && <p>Yükleniyor</p>}
{againScan && <Button onClick={()=>{setAgainScan(false); setQrscan('');}} variant="contained" style={{background : "white", height : "40px",width : "100%"}}>Tekrar Qr Okutmak için Tıklayınız</Button>}
{!againScan && <p>Lütfen QR Okutunuz.</p>}

      </div>
    );
  }
  
  export default QRscanner;
  