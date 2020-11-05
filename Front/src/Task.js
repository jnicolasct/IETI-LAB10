import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

export class Task extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {image:''};
    }

    async componentDidMount(){
        let imagen = 'http://localhost:8080/api/files/'+ this.props.fileUrl;
        await this.setState({image:imagen});     
        console.log(imagen);           
    }
    
    render() {
        return (
            <div>
                <Card  variant="outlined">
                    <CardMedia>
                        <td>{this.state.image ? <img src={this.state.image} /> : <div/>}</td>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {this.props.description}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {this.props.status}  - {this.props.dueDate.format('DD-MM-YYYY')} 
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {this.props.RName}
                        </Typography>
                        
                    </CardContent>
                </Card>
            </div>
        );
    }

}