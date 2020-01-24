import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Button from 'react-bootstrap/button';

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
            })
            .catch(error => {
                setData('');
                setLoading(false);
                setError(error);
            });
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
        if (data) {
            makeMedObj(data.medications, data.doseage);
        }
    }, [loading]);

    const submitChanges = () => {
        console.log('Clicked');
    }

    if (medArr) {
        return (
            <>
                <div>Current Medications</div>
                <BootstrapTable
                    keyField="id"
                    data={medArr}
                    columns={columns}
                    cellEdit={cellEditFactory({
                        mode: 'click',
                        onStartEdit: (row, column, rowIndex, columnIndex) => { console.log("On Start" + row, column, rowIndex, columnIndex); },
                        beforeSaveCell: (oldValue, newValue, row, column) => { console.log("Before Save" + oldValue, newValue, row, column); },
                        afterSaveCell: (oldValue, newValue, row, column) => { console.log(oldValue, newValue, row); }
                    })}
                />
                <Button onClick={submitChanges}>Submit Changes</Button>
            </>
        );
    } else {
        return (
            <>
                <div>Error returning your data.</div>
            </>
        )
    }

}

export default MedsDisplay;