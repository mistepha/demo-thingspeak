import './DatasetTable.css';
import { DateTime } from 'luxon';

export function DatasetTable({ dataset }) {
    const className = 'DatasetTable-item header';

    const tableHeader = (
        <div className="DatasetTable-header">
            <div className={ className + ' first' }>Created At</div>
            <div className={ className }></div>
            <div className={ className }>Value1</div>
            <div className={ className }></div>
            <div className={ className }>Value2</div>
            <div className={ className }></div>
            <div className={ className }>Value3</div>
            <div className={ className }></div>
            <div className={ className }>Value4</div>
            <div className={ className }></div>
            <div className={ className }>Value5</div>
            <div className={ className }></div>
            <div className={ className }>Value6</div>
            <div className={ className }></div>
            <div className={ className }>Value7</div>
            <div className={ className }></div>
            <div className={ className + ' last' }>Value8</div>
        </div>
    )

    if (!dataset) {
    }


    const valueOrDash = (value) => {
        return value ? value : '-';
    }

    const tableRows = dataset
        ? dataset.items.map((item, index) => {
            const date = DateTime.fromSeconds(item.createdAt);
            const background = index % 2 === 0 ? 'dark' : 'light';
            const className = `DatasetTable-item ${background}`;
            const classNameFirst = `${className} first`;
            const classNameLast = `${className} last`;
        
            return (
                <div key={ item.id } className="DatasetTable-row">
                    <div className={ classNameFirst }>{ date.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS) }</div>
                    <div className={ className }></div>
                    <div className={ className }>{ valueOrDash(item.value1) }</div>
                    <div className={ className }></div>
                    <div className={ className }>{ valueOrDash(item.value2) }</div>
                    <div className={ className }></div>
                    <div className={ className }>{ valueOrDash(item.value3) }</div>
                    <div className={ className }></div>
                    <div className={ className }>{ valueOrDash(item.value4) }</div>
                    <div className={ className }></div>
                    <div className={ className }>{ valueOrDash(item.value5) }</div>
                    <div className={ className }></div>
                    <div className={ className }>{ valueOrDash(item.value6) }</div>
                    <div className={ className }></div>
                    <div className={ className }>{ valueOrDash(item.value7) }</div>
                    <div className={ className }></div>
                    <div className={ classNameLast }>{ valueOrDash(item.value8) }</div>
                </div>
            )
        })
        : <div className="DatasetTable-item no-data dark">No data</div>

    return (
        <div className="DatasetTable">
            {tableHeader}
            {tableRows}
        </div>
    );
}
  