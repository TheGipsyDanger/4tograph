import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { actions } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

export default function Send() {

  const dispatch = useDispatch();
  const example = useSelector(state => {});

  useEffect(() => {
    // componentDidMount
    return () => {
      //component willUnmount
    };
  }, []);

  return (
    <C.Container>
      <C.Text>Send</C.Text>
    </C.Container>
  );
}

Send.navigationOptions = {
  header: null
}

Send.defaultProps = {

}

Send.propTypes = {

}