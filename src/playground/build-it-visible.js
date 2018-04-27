
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)

        this.state={
            visibility:false,
            content:''
        }

    }
    handleToggleVisibility(){

       if(this.state.visibility){

        this.setState((prevState)=>{
            return{
                visibility:!prevState.visibility,
                content:''
                
            }

        });
    
    }
    else{
        this.setState((prevState)=>{
            return{
                visibility:!prevState.visibility,
                content:'Some Data to show'
                
            }

        });



    }




       }

           


    render(){
        return(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility?'Hide Details':'Show Details'}</button>
            <p>{this.state.content}</p>
        
        
        </div>
    );
    }
}
ReactDOM.render(<VisibilityToggle />,document.getElementById('app'))


// const buttonDetails =()=>{
//     return 'show Details';
// }
// let visibility=false;

// const buttonChange=()=>{
//    if(visibility==true) {
//        visibility=false
//        app.content='';
      
//     }

       
//    else {
      
//        visibility=true;
//        app.content='Some data to show'}
       
//     render();
   
// }
// const app = {
//     title:'Visiility Toggle',
//     showButton: 'Show Details',
//     showDetails:'Here is something you need to read',
//     content:''

// }
// const render =()=>{
//     const template =(
//         <div>
//         <h1>{app.title}</h1>
//         <button onClick={buttonChange} id='button'>{visibility?'Hide Details':'Show Details'}</button>
//         <p>{app.content}</p>
//         </div>
//     );
//     ReactDOM.render(template,approot);
// }


// const approot = document.getElementById('app');

// render();