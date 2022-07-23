import React, { Component } from 'react'
import background from'../assets/img/background.jpg';
import model from '../assets/img/model.jpg';
// import g1 from '../assets/img/g1.jpg';
// import g2 from '../assets/img/g2.jpg';
// import g3 from '../assets/img/g3.jpg';
// import g4 from '../assets/img/g4.jpg';
// import g5 from '../assets/img/g5.jpg';
// import g6 from '../assets/img/g6.jpg';
// import g7 from '../assets/img/g7.jpg';
// import g8 from '../assets/img/g8.jpg';
// import g9 from '../assets/img/g9.jpg';
import v1 from '../assets/img/v1.png';
import v2 from '../assets/img/v2.png';
import v3 from '../assets/img/v3.png';
import v4 from '../assets/img/v4.png';
import v5 from '../assets/img/v5.png';
import v6 from '../assets/img/v6.png';
import v7 from '../assets/img/v7.png';
import v8 from '../assets/img/v8.png';
import v9 from '../assets/img/v9.png';


export class ChangeGlass extends Component {
state = {
    glassImg: v1,
}
changGlass = (img) => {
    this.setState({
        glassImg: img,
    })
}

  render() {
    return (
        <div>
      <img style={{position: 'relative',}} src={background} alt="" />
<img style={{position: 'absolute',top:'351px',right:'700px'}} src={model} alt=""/>
<img style={{position:'absolute',width:'250px',top:'490px',right:'813px'}} src={this.state.glassImg} alt=""/>
      <div>
        {/* <button onClick={() => this.changGlass(g1)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={g1} /></button>
        <button onClick={() => this.changGlass(g2)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={g2} /></button>
        <button onClick={() => this.changGlass(g3)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={g3} /></button>
        <button onClick={() => this.changGlass(g4)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={g4} /></button>
        <button onClick={() => this.changGlass(g5)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={g5} /></button>
        <button onClick={() => this.changGlass(g6)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={g6} /></button>
        <button onClick={() => this.changGlass(g7)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={g7} /></button>
        <button onClick={() => this.changGlass(g8)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={g8} /></button>
        <button onClick={() => this.changGlass(g9)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={g9} /></button> */}
        <button onClick={() => this.changGlass(v1)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={v1} /></button>
        <button onClick={() => this.changGlass(v2)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={v2} /></button>
        <button onClick={() => this.changGlass(v3)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={v3} /></button>
        <button onClick={() => this.changGlass(v4)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={v4} /></button>
        <button onClick={() => this.changGlass(v5)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={v5} /></button>
        <button onClick={() => this.changGlass(v6)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={v6} /></button>
        <button onClick={() => this.changGlass(v7)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={v7} /></button>
        <button onClick={() => this.changGlass(v8)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={v8} /></button>
        <button onClick={() => this.changGlass(v9)}><img style={{width:'100px',height:'50px', margin:'20px',}} src={v9} /></button>
      </div>
      </div>
    );
  }
}

export default ChangeGlass