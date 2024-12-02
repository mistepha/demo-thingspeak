import { fetchDatasets } from './api/api';
import './App.css';
import { useState, useEffect } from 'react';
import { Select } from './Select';
import { LoadingSpinner } from './LoadingSpinner';
import { DatasetTable } from './DatasetTable';
import { socket } from './api/ws';

const topicWS = 'dataset';

function App() {

    const [dataset, setDataset] = useState(null);
    const [datasets, setDatasets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchDatasets()
            .then(result => {
                setDatasets(result);
                setLoading(false);

                if (result.length > 0) {
                    setDataset(result[0]);
                }

            })
            .catch(error => {
                console.error(error);

                setError(true);
            });
    }, []);

    useEffect(() => {
        socket.on(topicWS, (datasetWS) => {
            setDatasets([...datasets.filter(d => d.id !== datasetWS.id), datasetWS]);

            // replace currently active dataset
            if ((dataset && dataset.id === datasetWS.id) || !dataset) {
                setDataset(datasetWS);
            }
        });

        return () => {
            socket.off(topicWS);
        };
      }, [datasets, dataset]);


    if (error) {
        return (
            <div className="App">
                <div className='App-error'>An Error occured 😞</div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="App">
                <LoadingSpinner></LoadingSpinner>
            </div>
        );
    }

    const datasetSelectOptions = datasets.map(d => ({ value: d.id, label: d.name }));

    // handler to set selected dataset
    const handleDatasetChange = (e) => {
        const dataset = datasets.find(d => d.id === e.target.value) ?? null;

        setDataset(dataset);
    }

    return (
        <div className="App">
            <div className="App-select">
                <span className="App-select-label">Channel</span>
                <Select options={datasetSelectOptions} onChange={handleDatasetChange}></Select>
            </div>
            <DatasetTable dataset={dataset}></DatasetTable>
        </div>
    );
}

export default App;
