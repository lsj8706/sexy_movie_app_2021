import React from "react";
import "./Detail.css"

class Detail extends React.Component{
    componentDidMount(){
        const {location, history } =this.props;
        if(location.state === undefined){
            history.push("/");
        //movie를 선택하지 않고 주소창에 movie-detail를 쳐서 들어온경우 다시 home으로 redirect시키는 기능
        }
    }

    render(){
        const {location} = this.props;
        if (location.state){
            return (
            <div className="details">
                <h1>{location.state.title}</h1>
                <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                <p>{location.state.summary}</p>
             </div>
            );
        } else{
            return null;
        }
    }
}
export default Detail;