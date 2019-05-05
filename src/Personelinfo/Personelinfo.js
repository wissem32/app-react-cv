import React , {Component} from 'react';
class Personelinfo extends Component{
render (){
return(
 <div>
    <p style={{color:"white"}}>{this.props.titre}</p>
    <p style={{color:"white" , fontFamily:"Times New Roma", fontWeight:"bold"}}>{this.props.des} </p>
</div>

)

}

}
export default Personelinfo;