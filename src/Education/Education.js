import React , {Component} from 'react';
class Education extends Component{
render (){
return(
 <div className="row">
 <div className="col-md-3">
    <p >{this.props.date}: </p>
    
</div>
<div className="col-md-5">
<p> {this.props.titre}</p>
    <p style={{fontFamily:"Times New Roma", fontWeight:"bold"}}>{this.props.des} </p>
    <p>Etablisement:</p>
    <p style={{fontFamily:"Times New Roma", fontWeight:"bold"}}>{this.props.institu} </p>
</div>
</div>

)

}

}
export default Education;