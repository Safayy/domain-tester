import React, { useState } from 'react';
import SearchBar from './SearchBar.js';
import ResultBox from './ResultBox.js';
import './App.css';

function App() {
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = (query) => {
      let apiKey = "" //TODO hide in .env
      let apiquery = `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${String(apiKey)}&domainName=${query}&credits=DA`;
      console.log(apiquery);

      fetch(apiquery)
        .then(response => response.json())
        .then(data => {
            const domainInfo = data.DomainInfo;
            const resultStatus = domainInfo.domainAvailability === 'AVAILABLE' ? 'available' : 'unavailable';
            setSearchResult({
                resultStatus,
                isAvailable: domainInfo.domainAvailability === 'AVAILABLE',
                domainName: domainInfo.domainName
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setSearchResult({ error: 'An error occurred while fetching data.' });
        });
      setSearchResult(query);
  };

  return (
    <div className="App">
      <h1>Domain Tester</h1>
      <p>Check if a domain is taken</p>
      <SearchBar onSearch={handleSearch} />
      {searchResult && <ResultBox domainName={searchResult.domainName} isAvailable={searchResult.isAvailable} />}
    </div>
  );
}

// From https://emad-uddin.medium.com/domain-name-validation-using-regex-in-javascript-0a9c2ba342b9
// domainValidation(url){
//   const urlRegex = /^(((http|https):\/\/|)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?)$/;
//   if (urlRegex.test(url)) {
//        return true;
//    } else {
//        return false;
//    }
// };

export default App;