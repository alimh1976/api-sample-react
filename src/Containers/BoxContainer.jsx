import React, { Component } from 'react';
import Box from "./../Components/Box";
import "../css/style.css";


class BoxContainer extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: true,
        };

        this.loadData = this.loadData.bind(this);
        this.eachBox = this.eachBox.bind(this);
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
        this.addItem = this.addItem.bind(this)

    }

    componentDidMount() {
        this.loadData()

    }

    loadData() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, isLoading: false });

            });
    };

    eachBox(item, i) {
        return (
            <Box
                key={i}
                index={i}
                myBox={item}
                id={item.id}
                name={item.name}
                email={item.email}
                onChange={this.update}
                onRemove={this.remove}
            />
        )
    }


    update(newname, newemail, i) {
        let newData = this.state.data;
        newData[i].name = newname;
        newData[i].email = newemail;

        this.setState({
            data: newData
        })

    }
    remove(i) {
        var newData = this.state.data;
        newData.splice(i, 1);

        this.setState({
            data: newData
        })
    }
    addItem() {
        let newData = this.state.data;
        let newItem = {
            id: this.state.data.length + 1,
            name: "new item",
            email: "new email"
        }
        newData.push(newItem);

        this.setState({
            data: newData
        })

    }
    render() {

        if (this.state.isLoading) {
            return (
                <div>
                    <i className="fa fa-spin fa-spinner"></i>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {
                                this.state.data.map((item, index) => this.eachBox(item, index))
                            }
                        </div>
                        <div className="col-12 position-static">
                            <button className="btn btn-lg btn-outline-primary clearfix addButton" onClick={this.addItem}>add Box</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default BoxContainer;