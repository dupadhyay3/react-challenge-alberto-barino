import { Button, Select, TextInput } from "flowbite-react";
import React from "react";
import { IRow } from "../../types/app.type";

const Row: React.FC<IRow> = ({row, updateRow, deleteRow}) => {
    return (
        <div className="flex flex-row gap-3">
            <Select name="plusMinus" value={row.plusMinus} onChange={(e) => updateRow(row.key, e.target.name, e.target.value)}>
                <option className='w-16'>+</option>
                <option className='w-16'>-</option>
            </Select>
            <TextInput
                type="number"
                name="val"
                value={row.val}
                disabled={row.isDisabled}
                onChange={(e) => updateRow(row.key, e.target.name, e.target.value)}
            />
            <Button color="failure" pill={true} title="delete" onClick={() => deleteRow(row.key)}>❌</Button>
        </div>
    )
}

export default Row;