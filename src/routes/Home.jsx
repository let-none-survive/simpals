import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Container } from 'styled-minimal';
import Background from 'components/Background';

import Header from 'components/Header';
import { fetchRecords } from 'actions';
import Record from 'containers/Record';
import { getRecords } from 'reducers/app';
import Loader from '../components/Loader';


const HomeContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const RecordsWrapper = styled.div`
  margin: 100px;
  @media (max-width: 900px) {
    margin: 100px 0 0 0;  
  }
`;

export class Home extends Component {
  static propTypes = {
    fetchRecords: PropTypes.func,
    records: PropTypes.array,
  };

  componentDidMount() {
    document.title = 'Главная страница';
    if (!this.props.records.length) this.props.fetchRecords();
  }

  render() {
    const { records, isLoading } = this.props;
    if (isLoading) return <Loader size={100} block/>;
    return (
      <Background key="Home">
        <HomeContainer>
          <Header/>
          <RecordsWrapper>
            {records.map(record => <Record key={Math.random()} data={record}/>)}
          </RecordsWrapper>
        </HomeContainer>
      </Background>
    );
  }
}

function mapStateToProps(state) {
  return {
    records: getRecords(state),
    isLoading: state.app.isLoading,
  };
}

const mapDispatchToProps = dispatch => ({
  fetchRecords: () => dispatch(fetchRecords()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
