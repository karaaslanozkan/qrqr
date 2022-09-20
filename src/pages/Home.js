import {Grid, Button, Typography} from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiQrcode, mdiQrcodeScan } from '@mdi/js';
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>

            <Typography style={{margin:30}} variant="h2">
            Kartela Qr İşlemleri
            </Typography>

            <Grid container>
              
                <Grid item xs={12}>
                    <Link to="/qr_scanner">
                    <Button variant="contained" size="large" color="primary">
                        <Icon 
                        style={{padding:10}}
                        path={mdiQrcodeScan}
                        title="QR Scanner"
                        size={10}
                        color="white"
                        />
                    </Button>
                    </Link>
                </Grid>
            </Grid>
        
        </div>
    );
  }
  
  export default Home;
  