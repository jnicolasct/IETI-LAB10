import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

export class Task extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {file:''};
    }

    async componentDidMount(){
        let newfile = 'http://localhost:8080/api/files/'+ this.props.fileUrl;
        await this.setState({file:newfile});               
    }
    
    render() {
        return (
            <div>
                <Card  variant="outlined">
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
                        <center>
                            <td>{this.state.file.slice(-3) === "pdf" ? <embed  src={this.state.file} width="500" height="500"/> : <img src={this.state.file} width="500" height="500"/>}</td>
                        </center>
                    </CardContent>
                </Card>
            </div>
        );
    }

}