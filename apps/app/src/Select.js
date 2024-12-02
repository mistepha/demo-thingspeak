import './Select.css';

export function Select({ options, onChange }) {

    return (
        <div className="Select">
            <select onChange={onChange}>
                { options.map(p => <option key={ p.value } value={ p.value }>{ p.label }</option>) }
            </select>
            <span className="Select-focus"></span>
        </div>
    );
}
  