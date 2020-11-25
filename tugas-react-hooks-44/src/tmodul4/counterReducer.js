import React, { useReducer } from 'react';
import { PlusCircleOutlined, MinusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button } from "antd";

import "antd/dist/antd.css";

import '../App.css';

const stateAwal = {
  nilai: 0
}

const reducer = (state, aksi) => {
    if (aksi.hitung === 'tambahSatu') {
        return {state, nilai: state.nilai + 1};
    }
    else if (aksi.hitung === 'kurangSatu') {
        return {state, nilai: state.nilai - 1};
    }
    else if (aksi.hitung === 'reset') {
        return {state, nilai: aksi.resetNilai};
    }
    else {
        return {state};
    }
}

const CounterReducer = () =>{
  const [state, dispatch] = useReducer(reducer, stateAwal)
  return (
    <div>
      <div>
        <h2 id='nilai'>{`Nilai = ${state.nilai}`}</h2>
        <Button size='large' icon={<PlusCircleOutlined />} id='tombol-tambah' onClick = {() => dispatch({hitung:'tambahSatu'})} />
        <Button size='large' icon={<MinusCircleOutlined />} id='tombol-kurang' onClick={() => dispatch({hitung:'kurangSatu'})} />
        <Button size='large' icon={<DeleteOutlined />} id='tombol-reset' onClick={() => dispatch({hitung:'reset', resetNilai:0})} /> 
      </div>
    </div>
  )
}

export default CounterReducer;