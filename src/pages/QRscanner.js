import React, {useState,useEffect} from 'react'
import {Fab, TextareaAutosize,} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'
import axios from 'axios';
function QRscanner() {
    useEffect(()=>{
    
      });
      const [mounturl, setMounturl] = useState("");
      const [isLoading, setIsLoading] = useState(true);
      const [product, setProduct] = useState([]);   
    const [qrscan, setQrscan] = useState('');

    const handleScan = data => {
        if (data) {
            var pro = data.split("/");
            axios( "https://jsonplaceholder.typicode.com/users/"+ pro[4] )
            .then((res) => setProduct(res.data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));
            setQrscan("Ürün Fiyatı : "+product.name);
        }
    }


    const handleError = err => {
    console.error(err)
    }

    return (
      <div>
   
            <span>QR Scanner</span>
            <center>
            <div>
                <QrScan
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320}}
                />
            </div>
            </center>

{isLoading && <div>Yükleniyor..</div>}
<br/><br/>

<h1>Ürünün fiyatı : {qrscan} TL</h1>
      </div>
    );
  }
  
  export default QRscanner;
  