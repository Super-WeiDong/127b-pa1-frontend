import React, { Component } from 'react'
import ForestService from '../services/ForestService';

export default class CreateForestComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name :'',
            area:'',
            acid_level:'',
            mbr_xmin:'',
            mbr_xmax:'',
            mbr_ymin:'',
            mbr_ymax:'',
            state:''
        }
        this.changeNameHandler =this.changeNameHandler.bind(this);
        this.changeAreaHandler =this.changeAreaHandler.bind(this);
        this.changeAcidHandler =this.changeAcidHandler.bind(this);
        this.changeXminHandler =this.changeXminHandler.bind(this);
        this.changeXmaxHandler =this.changeXmaxHandler.bind(this);
        this.changeYminHandler =this.changeYminHandler.bind(this);
        this.changeYmaxHandler =this.changeYmaxHandler.bind(this);
        this.changeStateHandler =this.changeStateHandler.bind(this);
        this.saveForest = this.saveForest.bind(this);
    }

    saveForest = (e) =>{
        if(this.state.name === ''){
            alert('name can not be empty')
        }else if(this.state.area === ''){
            alert('area can not be empty')
        }else if(this.state.acid_level === ''){
            alert('acid_level can not be empty')
        }else if(this.state.mbr_xmin === ''){
            alert('mbr_xmin can not be empty')
        }else if(this.state.mbr_xmax === ''){
            alert('mbr_xmax can not be empty')
        }else if(this.state.mbr_ymin === ''){
            alert('mbr_ymin can not be empty')
        }else if(this.state.mbr_ymax === ''){
            alert('mbr_ymax can not be empty')
        }else if(this.state.state === ''){
            alert('state can not be empty')
        }else if(Number(this.state.mbr_xmin)>=Number(this.state.mbr_xmax)) {
			alert('xmax must be great than xmin')
		}else if(Number(this.state.mbr_ymin)>=Number(this.state.mbr_ymax)) {
			alert('ymax must be great than ymin')
		}else if(Number(this.state.acid_level)<0||Number(this.state.acid_level)>1) {
			alert('acid_level must be a number between 0 to 1.0')
		}else if(Number(this.state.area)<=0){
            alert('area has to be a positive integer') 
        }else{
            let forest = {name:this.state.name,area:this.state.area,acid_level:this.state.acid_level,mbr_xmin:this.state.mbr_xmin,mbr_xmax:this.state.mbr_xmax,mbr_ymin:this.state.mbr_ymin,mbr_ymax:this.state.mbr_ymax,state:this.state.state};
            console.log('forest =>' + JSON.stringify(forest));
            ForestService.createForest(forest).then(res =>{
                alert(res.data);
            })
        }
        e.preventDefault();
    }
    
    changeNameHandler(event){
        this.setState({name:event.target.value})
    }
    changeAreaHandler(event){
        this.setState({area:event.target.value})
    }
    changeAcidHandler(event){
        this.setState({acid_level:event.target.value})
    }
    changeXminHandler(event){
        this.setState({mbr_xmin:event.target.value})
    }
    changeXmaxHandler(event){
        this.setState({mbr_xmax:event.target.value})
    }
    changeYminHandler(event){
        this.setState({mbr_ymin:event.target.value})
    }
    changeYmaxHandler(event){
        this.setState({mbr_ymax:event.target.value})
    }
    changeStateHandler(event){
        this.setState({state:event.target.value})
    }
    cancel(){
        this.props.history.push('/forest');
    }
  render() {
    return (
      <div>
          <div className='container'>
              <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add Forest</h3>
                    <div className='card-body'>
                        <form action="">
                            <div className='form-group'>
                                <label>name</label>
                                <input type='text' placeholder='name' name="name" className='form-control'
                                value={this.state.name} onChange={this.changeNameHandler} />
                            </div>
                            <div className='form-group'>
                                <label>area</label>
                                <input type='number' placeholder='type in a positive number' name="area" className='form-control'
                                value={this.state.area} onChange={this.changeAreaHandler} />
                            </div>
                            <div className='form-group'>
                                <label>acid_level</label>
                                <input type='number' placeholder='type in a number between 0 to 1.0' name="acid_level" className='form-control'
                                value={this.state.acid_level} onChange={this.changeAcidHandler} />
                            </div>
                            <div className='form-group'>
                                <label>mbr_xmin</label>
                                <input type='number' placeholder='type in a number' name="mbr_xmin" className='form-control'
                                value={this.state.mbr_xmin} onChange={this.changeXminHandler} />
                            </div>
                            <div className='form-group'>
                                <label>mbr_xmax</label>
                                <input type='number' placeholder='type in a number' name="mbr_xmax" className='form-control'
                                value={this.state.mbr_xmax} onChange={this.changeXmaxHandler} />
                            </div>
                            <div className='form-group'>
                                <label>mbr_ymin</label>
                                <input type='number' placeholder='type in a number' name="mbr_ymin" className='form-control'
                                value={this.state.mbr_ymin} onChange={this.changeYminHandler} />
                            </div>
                            <div className='form-group'>
                                <label>mbr_ymax</label>
                                <input type='number' placeholder='type in a number' name="mbr_ymax" className='form-control'
                                value={this.state.mbr_ymax} onChange={this.changeYmaxHandler} />
                            </div>
                            <div className='form-group'>
                                <label>state</label>
                                <input type='text' placeholder='abbreviation of state e.g. MA' name="state" className='form-control'
                                value={this.state.state} onChange={this.changeStateHandler}/>
                            </div>
                            <p>   </p>
                            <button className='btn btn-success' onClick={this.saveForest}>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:'10px'}}>Cancel</button>
                            <button className='btn btn-primary' onClick={this.cancel.bind(this)} style={{marginLeft:'10px'}}>Back to table</button>
                        </form>
                    </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}
