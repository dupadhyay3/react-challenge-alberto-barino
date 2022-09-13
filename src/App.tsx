import React, {useEffect, useState} from 'react';
import { Button, DarkThemeToggle, Flowbite, Footer, Navbar, Select, TextInput } from 'flowbite-react';
import { v4 as uuidv4 } from "uuid";
import { IRowData } from './types/app.type';



const App:React.FC = () => {
  const [rows, setRows] = useState<Array<IRowData>>([]);
  const [total, setTotal] = useState<any>();
  
  useEffect(() => {
    console.log('sdsd', rows);
    const totalVal = rows.filter((row: IRowData) => !row.isDisabled);
    // totalVal.reduce((prev: any, next: IRowData) => {
    //     const value = current.plusMinus === "-" ? -Math.abs(current.val) : Math.abs(current.val);
    //   accumilator += value
    // }, 0);
  }, [rows]);

  const addNewRow = () => {
    const newRow: IRowData = {
      key: uuidv4(),
      plusMinus: "+",
      val: undefined,
      isDisabled: false
    };
    setRows([...rows, newRow]);
  };

  const updateRow = (key: string, field: string, value: any) => {
    const updatedRow: any = {...rows.find((row: IRowData) => row.key === key), [field] : value};
    const updatedRows = [...rows.filter((row: IRowData) => row.key !== key), updatedRow];
    setRows(updatedRows);
  }

  const deleteRow = (id: string) => {
    setRows(rows.filter((row: IRowData) => row.key !== id))
  };

  return (
    <Flowbite>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Welcome to the React Challenge
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <DarkThemeToggle />
        </div>
      </Navbar>
      <main className="container mx-auto">
        <div className="flex flex-row">
          <Button onClick={() => addNewRow()}>Add Row</Button>
        </div>
        <div>
          {
            rows.length > 0 && rows.map((row: IRowData, index: number) => {
              return (
                <div className="flex flex-row gap-3 my-4" key={index}>
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
                  <Button color="failure" pill={true} title="delete" onClick={() => deleteRow(row.key)}>
                    ❌
                  </Button>
                  <Button color="" onClick={() => updateRow(row.key, 'isDisabled', !row.isDisabled)}>{row.isDisabled ? 'Enable' : 'Disable'} </Button>
                </div>
              )
            })
          }
        </div>
        <div className="flex flex-row">
          <Button onClick={() => addNewRow()}>Add Row</Button>
        </div>
      </main>
      <Footer>
        <div className="w-full">
          <div className="w-full px-4 py-6 bg-gray-400 dark:bg-gray-600 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="dupadhyay3" year={new Date().getFullYear()} />
          </div>
        </div>
      </Footer>
    </Flowbite>
  );
}

export default App;
