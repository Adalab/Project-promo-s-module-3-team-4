import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateProject from './CreateProject';
import Landing from './Landing';
import objectToExport from '../service/localstorege';

function App() {
  const [dataCardList, setDataCardList] = useState(
    objectToExport.get('dataCardLS', [])
  );

  return (
    <Routes>
      <Route
        path="/CreateProject"
        element={
          <CreateProject
            dataCardList={dataCardList}
            setDataCardList={setDataCardList}
          />
        }
      />
      <Route path="/" element={<Landing dataCardList={dataCardList} />} />
    </Routes>
  );
}

export default App;
