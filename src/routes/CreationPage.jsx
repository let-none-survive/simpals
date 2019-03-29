import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from 'styled-minimal';
import { connect } from 'react-redux';
import Background from 'components/Background'
import Header from 'components/Header';
import Form from 'containers/Form';
import { addRecord } from '../actions';

const HomeContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;


class CreationPage extends Component {
  submit = values => {
    this.props.createRecord(values)
  };

  render() {
    return (
      <Background>
        <Header />
        <HomeContainer>
          <Form onSubmit={this.submit}/>
        </HomeContainer>
      </Background>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createRecord: values => dispatch(addRecord(values))
});

export default connect(null, mapDispatchToProps)(CreationPage);
