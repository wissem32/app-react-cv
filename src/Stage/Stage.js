import React , {Component} from 'react';
class Stage extends Component{
render (){
return(
 <div className="row">
 <div className="col-md-3">
    <p >{this.props.date}: </p>
    
</div>
<div className="col-md-5">

    <p>{this.props.etablisement} </p>
</div>
</div>

)

}

}
export default Stage;