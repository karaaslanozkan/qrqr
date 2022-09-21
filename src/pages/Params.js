import {useParams} from "react-router-dom";
function Params({setUrl}){
    const {id} = useParams();
    setUrl(id);
    return(
      <>
    </>
    )
   
}
export default Params;