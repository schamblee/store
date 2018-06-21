import React, { Component } from 'react';
import Modal from './modal'

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };
      }
    
      toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
      return (
        <div className="col-4">
          <div className="card">
            <button onClick={this.toggleModal}><img className="card-image" src={this.props.image} alt={this.props.product_name}/></button>
            <div className="card-content">
              <h3>{this.props.product_name}</h3>
              <p>{this.props.product_category}</p>
              <p>${this.props.price}</p>
            </div>
          </div>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal} 
            image={this.props.image}
            product_name={this.props.product_name} 
            product_category={this.props.product_category}
            price={this.props.price}
            description={this.props.description}>
          </Modal>
        </div>
      );
    }
  }