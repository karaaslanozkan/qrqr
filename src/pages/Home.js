import {Typography} from '@material-ui/core';
import QrScanner from './QRscanner.js'


function Home() {

    return (
        <div>

            <Typography style={{margin:30}} variant="h2">
            React QR Code
            </Typography>
          <QrScanner/>
        
        </div>
    );
  }
  
  export default Home;
  