import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Flowbite } from "flowbite-react";
import { v4 as uuidv4 } from "uuid";
import { IRowData } from "./types/app.type";
import Header from "./components/Header";
import Row from "./components/Row";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [rows, setRows] = useState<Array<IRowData>>([]);
  const [total, setTotal] = useState<any>();

  useEffect(() => {
    const totalVal: any = rows
      .filter((row: IRowData) => !row.isDisabled && row.val !== undefined)
      .reduce((accumilator: any, current: IRowData) => {
        const value =
          current.plusMinus === "-"
            ? -Math.abs(Number(current.val))
            : Math.abs(Number(current.val));
        return accumilator + value;
      }, 0);
    setTotal(totalVal);
  }, [rows]);

  const addNewRow = () => {
    const newRow: IRowData = {
      key: uuidv4(),
      plusMinus: "+",
      val: undefined,
      isDisabled: false,
    };
    setRows([...rows, newRow]);
  };

  const updateRow = (key: string, field: string, value: any) => {
    const updatedRows: any = rows.map((row: IRowData) => {
      return row.key === key ? { ...row, [field]: value } : row;
    });
    setRows(updatedRows);
  };

  const deleteRow = (id: string) => {
    setRows(rows.filter((row: IRowData) => row.key !== id));
  };

  return (
    <Flowbite>
      <Header />
      <main className="container h-screen mx-auto my-2">
        <div className="flex flex-row justify-center my-4">
          <Button onClick={() => addNewRow()} color="light">
            Add Row
          </Button>
        </div>
        <Alert color="warning" rounded={false} withBorderAccent={true}>
          <span>
            <span className="font-medium">Result {total}</span>
          </span>
        </Alert>
        <div className="justify-center mt-4 mb-6">
          {rows.length > 0 && (
            <Card>
              {rows.map((row: IRowData, index: number) => {
                return (
                  <Row
                    key={index}
                    deleteRow={deleteRow}
                    updateRow={updateRow}
                    row={row}
                  />
                );
              })}
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </Flowbite>
  );
};

export default App;
