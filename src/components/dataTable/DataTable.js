import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { List } from "material-ui";

const useStylesInput = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
      flexDirection: "row"
    }
  }
}));

const useStylesButton = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const DataTable = () => {
  const nodeRef = React.useRef(null);
  const inputClasses = useStylesInput();
  const Btnclasses = useStylesButton();

  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "word",
      headerName: "word",
      width: 150,
      editable: true
    },
    {
      field: "wordMeaning",
      headerName: "wordMeaning",
      width: 180,
      editable: true
    }
  ]);
  const [word, setWord] = useState("");
  const [wordMeaning, setWordMeaning] = useState("");
  const [uuid, setUuid] = useState(1);

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleWordMeaningChange = (e) => {
    setWordMeaning(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = rows.concat({
      id: rows.length + 1,
      word,
      wordMeaning
    });

    setRows(result);
    setWord("");
    setWordMeaning("");
  };

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          ref={nodeRef}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <form
          onSubmit={handleSubmit}
          className={inputClasses.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="英単語"
            value={word}
            onChange={handleWordChange}
          />
          <TextField
            id="standard-basic"
            label="英単語の意味"
            value={wordMeaning}
            onChange={handleWordMeaningChange}
          />
          <div className={Btnclasses.root}>
            <Button type="submit" variant="contained" color="primary">
              Primary
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DataTable;
