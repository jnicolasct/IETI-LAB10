import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

export class Task extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {image:null};
    }

    async componentDidMount(){
        await axios.get('http://localhost:8080/api/files/'+ this.props.fileUrl)
                .then(function (response) {
                    this.setState({image:response.data}) ;
                    console.log("file uploaded!", response);
            })
            .catch(function (error) {
                console.log("failed file upload", error);
            })
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
                        <td>{this.state.image ? <img src={this.state.image} /> : <div no sirvio/>}</td>
                    </CardContent>
                </Card>
            </div>
        );
    }

}