import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import API from '../../utils/API';

const MedsDisplay = props => {
    const [data, setData] = useState(null);
    const [medList, setMedList] = useState(null);
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
        let medObj = {};
        let med = '';
        let dose = '';
        for (let i = 0; i < medications.length; i++) {
            med = medications[i]
            dose = doseage[i]
            medObj[med] = dose;
        }
        setMedList(medObj);
    }

    useEffect(() => {
        const { username } = props.username;
        getData(username);
        if (data) {
            makeMedObj(data.medications, data.doseage)
        }
    }, [loading]);

    if (medList) {
        return (
            <>
                <div>Current Medications</div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Medication</th>
                            <th>Doseage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(medList).map(elem => (
                            <tr>
                                <td key={elem[0]}>{elem[0]}</td>
                                <td key={elem[1]}>{elem[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
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