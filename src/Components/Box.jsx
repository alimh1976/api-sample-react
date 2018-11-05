import React, { Component } from 'react';
import "../css/style.css";
class Box extends Component {


constructor(){
    super();
    this.state={
        editing:false
    }
    this.DisplayMode=this.DisplayMode.bind(this)
    this.EditMode=this.EditMode.bind(this)
    this.changeMode=this.changeMode.bind(this)
    this.saveData=this.saveData.bind(this)
    this.removeItem=this.removeItem.bind(this)
}


changeMode(){
    this.setState({
        editing:!this.state.editing
    })
}
saveData(){
    this.props.onChange(
        this.refs.userName.value,
        this.refs.userEmail.value,
        this.props.index
    );
    this.changeMode()
}
removeItem(){
    if(!window.confirm("are you sure ?")){
        return false
       
    }
    this.props.onRemove(this.props.index)
}
DisplayMode(){
    return(
        <div className="bg-dark text-white MyBoxes">
                id : {this.props.id}
                <br/>
                name : {this.props.name}
                <br/>
                email : {this.props.email}
                <br/>
                <button type="button" className="btn m-2 btn-success fa fa-edit" onClick={this.changeMode}>edit</button>
                <button type="button"  className="btn m-2 btn-danger fa fa-times" onClick={this.removeItem}>remove</button>
        </div>
    )
}

EditMode(){
    return(
        <div className="MyBoxes">
            your id : {this.props.id}
            your name : <input type="text" ref="userName" className="form-control"/>
            your email : <input type="text" ref="userEmail" className="form-control" />
            <button type="button"  className="btn m-2 btn-primary fa fa-save"  onClick={this.saveData}>save</button>
            <button type="button"  className="btn m-2 btn-danger fa fa-cancel" onClick={this.changeMode}>cancel</button>
        </div>
    )
}






    render() {
       return this.state.editing ? this.EditMode() : this.DisplayMode();    
    }
}

export default Box;