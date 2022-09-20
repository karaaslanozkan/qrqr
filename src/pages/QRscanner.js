import React, {useState} from 'react'
import {Fab, TextareaAutosize} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'
import axios from 'axios';
function QRscanner() {

    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState("No result");
    const [mounturl, setMounturl] = useState("");
    const handleScan = data => {
        
        if (data) {
           var productId=data.split("/");
  

    axios( "https://jsonplaceholder.typicode.com/users/" +productId[3])
    .then((res) => setProduct(res.data))
    .catch((e) => console.log(e))
    .finally(() => setIsLoading(false));
        }
    }
    const handleError = err => {
    console.error(err)
    }

    return (
      <div>
         
            <span>QR Scanner</span>
            
            <center>
            <div style={{marginTop:30}}>
                <QrScan
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320 }}
                />
            </div>
            </center>

            <TextareaAutosize
                style={{fontSize:18, width:320, height:100, marginTop:100}}
                rowsMax={4}
                defaultValue={result}
                value={product.id}
            />

      </div>
    );
  }
  
  export default QRscanner;
  