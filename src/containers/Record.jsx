import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteRecord } from '../actions';

import Button from 'components/Button';

const RecordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 20px;
  width: 100%;
  height: 230px;
  background: #f5f5f5;
  border-radius: 5px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid silver;
  margin-bottom: 20px;

`;


const Tag = styled.button`
  width: auto;
  height: auto;
  background: #fff;
  font-size: 12px;
  padding: 5px 10px 5px 10px;
  border: 1px solid #dadada;
  border-radius: 5px;
  margin: 0 5px 5px 0;
`;

const TagWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 5px 5px 0;
  flex-wrap: wrap;
`;

const Description = styled.div`
  display: flex;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: self-start;
`;

const Header = styled.div``;

const Record = props => {
  const {body, tags, title, id} = props.data;
  const { removeRecord } = props;
  return (
    <RecordWrapper>
      <Header>
        <h3>{title}</h3>
        <Description>{body}</Description>
      </Header>
      <Footer>
        <TagWrapper>
          {tags.map(tag => <Tag key={Math.random()}>{tag}</Tag>)}
        </TagWrapper>
        <Button
          dangerous
          onClick={() => removeRecord(id)}
        >
          Удалить
        </Button>
      </Footer>
    </RecordWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  removeRecord: id => dispatch(deleteRecord(id))
});

export default connect(null, mapDispatchToProps)(Record);
