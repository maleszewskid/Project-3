import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

const MedsDisplay = props => {
    const [data, setData] = useState(null);
    const [newMeds, setNewMeds] = useState(null);
    const [medArr, setMedArr] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    async function getData(username) {
        API.allPatientData({ username })
            .then(res => {
                setData(res.data);
                setLoading(false);
                setError(false);
                makeMedObj(data.medications, data.doseage);
            })
            .catch(error => {
                setData('');
                setLoading(false);
                setError(error);
            });
    }

    // const sendData = (data) => {
    //     API.updateMedData({ data })
    //         .then(res => console.log(res.data))
    // }

    const makeDataObj = (username, medications) => {
        let dataObj = {};
        let key = '';
        let value = '';
        for (let i = 0; i < medications.length; i++ ) {
            key = medications[i].medications;
            value = medications[i].doseage;
            dataObj[key] = value;
        }
        dataObj.username = username;
        //sendData(dataObj);
    }

    const makeMedObj = (medications, doseage) => {
        let medArr = [];
        let med = '';
        let dose = '';
        let medObj = {};
        for (let i = 0; i < medications.length; i++) {
            med = medications[i]
            dose = doseage[i]
            medObj = {
                'id': i,
                'medications': med,
                'doseage': dose
            };
            medArr.push(medObj);
        }
        setMedArr(medArr);
    }

    const columns = [{
        dataField: 'id',
        text: 'ID'
    }, {
        dataField: 'medications',
        text: 'Medications'
    }, {
        dataField: 'doseage',
        text: 'Doseage'
    }];

    useEffect(() => {
        const { username } = props.username;
        getData(username);
    }, [loading]);

    const cellEdit = {
        mode: 'click',
        onStartEdit: (row, column, rowIndex, columnIndex) => { console.log("On Start" + row, column, rowIndex, columnIndex); },
        beforeSaveCell: (oldValue, newValue, row, column) => { console.log("Before Save" + oldValue, newValue, row, column); },
        afterSaveCell: (oldValue, newValue, row, column) => { console.log(oldValue, newValue, row, column); },
      };

     const handleTableChange = (type, { data, cellEdit: { rowId, dataField, newValue } }) => {
        if (newValue === '') {
            setNewMeds(data);
            setError("Please enter a value.") 
            } else {
                const result = data.map((row) => {
                    if (row.id === rowId) {
                      const newRow = { ...row };
                      newRow[dataField] = newValue;
                      return newRow;
                    }
                    console.log(row)
                    return row;
                });
                setMedArr(result);
                makeDataObj(props.username, medArr);
            }
      }

    if (medArr) {
        return (
            <>
                <div>Current Medications</div>
                <BootstrapTable
                    remote={ { cellEdit: true } }
                    keyField="id"
                    data={medArr}
                    columns={columns}
                    cellEdit={cellEditFactory(cellEdit)}
                    onTableChange={ handleTableChange }
                />
            </>
        );
    } else if (!medArr){
        return (
            <>
                <div>Error returning your data.</div>
            </>
        )
    }

}

export default MedsDisplay;