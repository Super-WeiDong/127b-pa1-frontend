import React, { Component } from 'react'
import StateService from '../services/StateService';


export default class CreateStateComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:'',
            abbreviation :'',
            area:'',
            population:'',
        }
        this.changeNameHandler =this.changeNameHandler.bind(this);
        this.changeAbbreviationHandler =this.changeAbbreviationHandler.bind(this);
        this.changeAreaHandler =this.changeAreaHandler.bind(this);
        this.changePopulationHandler =this.changePopulationHandler.bind(this);
        this.saveState = this.saveState.bind(this);
    }

    saveState = (e) =>{
        e.preventDefault();
        if(this.state.name === ''){
            alert('name can not be empty')
        }else if(this.state.abbreviation === ''){
            alert('abbreviation can not be empty')
        }else if(this.state.area === ''){
            alert('area can not be empty')
        }else if(this.state.population === ''){
            alert('population can not be empty')
        }else if(this.state.population%1 !== 0||Number(this.state.population)<0){
            alert('population has to be a positive integer.')
        }else if(Number(this.state.area)<0){
            alert('area has to be a positive integer.')
        }else{
            let state = {name:this.state.name,abbreviation:this.state.abbreviation,area:this.state.area,population:this.state.population};
            console.log('worker =>' + JSON.stringify(state));
            StateService.createState(state).then(res =>{
                alert(res.data);
            })
        }
    }
    
    changeNameHandler(event){
        this.setState({name:event.target.value})
    }
    changeAbbreviationHandler(event){
        this.setState({abbreviation:event.target.value})
    }
    changeAreaHandler(event){
        this.setState({area:event.target.value})
    }
    changePopulationHandler(event){
        this.setState({population:event.target.value})
    }
    cancel(){
        this.props.history.push('/state');
    }
  render() {
    return (
      <div>
          <div className='container'>
              <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add State</h3>
                    <div className='card-body'>
                        <form action="">
                            <div className='form-group'>
                                <label>name</label>
                                <input type='text' placeholder='type in a name' name="name" className='form-control'
                                value={this.state.name} onChange={this.changeNameHandler} />
                            </div>
                            <div className='form-group'>
                                <label>abbreviation</label>
                                <input type='text' placeholder='abbreviation' name="abbreviation" className='form-control'
                                value={this.state.abbreviation} onChange={this.changeAbbreviationHandler} />
                            </div>
                            <div className='form-group'>
                                <label>area</label>
                                <input type='number' placeholder='type in a number' name="area" className='form-control'
                                value={this.state.area} onChange={this.changeAreaHandler} />
                            </div>
                            <div className='form-group'>
                                <label>population</label>
                                <input type='number' placeholder='type in a number' name="type in a number" className='form-control'
                                value={this.state.population} onChange={this.changePopulationHandler} />
                            </div>
                            <p>   </p>
                            <button className='btn btn-success' onClick={this.saveState}>Save</button>
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