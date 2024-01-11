import './Info.css';
import React from "react";
import {Link} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
function Instructions() {
  return (
    <div>
        <Header/>

    <div className="App">
      <h1 className="Title">What to Do With Unused Medicines? </h1>
      <p className='Para'>Still confused with how to dispose your unused medicines? Don't worry here some methodes suggested by Food and Drug Administration .</p>
      <h2 className="Head2">Flusing Medicines</h2>
      <div className='Flush'>
      <p className='Para'>Depending on the drug we can flush them. Some drugs are advised to immediatly flushed down the sink or toilet when they are no longer in use.In order to do that U.S Food and Drug Administration has recommended list of medicines for disposal by flusing.</p>
      <table class="table table-warning table-striped">
  <thead>
    <tr className='table-success'>
      <th scope="col"></th>
      <th scope="col">Drug Name</th>
      <th scope="col">Products On Flush List</th>

    </tr>
    <tr className='table-success'>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col">Drugs That Contain Opioids</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Any drug that contains the word “buprenorphine”</td>
      <td>BELBUCA, BUAVAIL, BUTRANS, SUBOXONE, SUBUTEX, ZUBSOLV
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Any drug that contains the word “fentanyl”</td>
      <td>ABSTRAL, ACTIQ, DURAGESIC, FENTORA,ONSOLIS</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Any drug that contains the word “hydrocodone” or “benzhydrocodone”</td>
      <td>APADAZ, HYSINGLA ER, NORCO, REPREXAIN, VICODIN, VICODIN ES, VICODIN HP, VICOPROFEN, ZOHYDRO ER</td>
    </tr>

    <tr>
    <th scope="row">4</th>
    <td>Any drug that contains the word “hydromorphone”</td>
    <td>EXALGO</td>
    </tr>
    <tr>
    <th scope="row">5</th>
    <td>Any drug that contains the word “meperidine”</td>
    <td>DEMEROL</td>
    </tr>
    <tr>
    <th scope="row">6</th>
    <td>Any drug that contains the word “methadone”</td>
    <td>DOLOPHINE, METHADOSE</td>
    </tr>
    <tr>
    <th scope="row">7</th>
    <td>Any drug that contains the word “morphine”</td>
    <td>ARYMO ER, AVINZA, EMBEDA, KADIAN, MORPHABOND ER, MS CONTIN</td>
    </tr>
    <tr>
    <th scope="row">8</th>
    <td>
    Any drug that contains the word “oxycodone”
    </td>
    <td>CODOXY, COMBUNOX, OXADYDO (formerly OXECTA), OXYCET, OXYCONTIN, PERCOCET, PERCODAN, ROXICET, ROXICODONE, ROXILOX, ROXYBOND, TARGINIQ ER, TROXYCA ER, TYLOX, XARTEMIS XR, XTAMPZA ER</td>
    </tr>
    <tr>
    <th scope="row">9</th>
    <td>Any drug that contains the word “oxymorphone”</td>
    <td>OPANA, OPANA ER</td>

    </tr>
    <tr>
    <th scope="row">10</th>
    <td>Any drug that contains the word “tapentadol”</td>
    <td>NUCYNTA, NUCYNTA ER</td>
    </tr>
    <tr className='table-success'>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col">Drugs That Contain Opioids</th>
    </tr>
    <tr>
    <th scope="row">1</th>
    <td>Any drug that contains the term “sodium oxybate” or “sodium oxybates”</td>
    <td>XYREM, XYWAV</td>
    </tr>
    <tr>
    <th scope="row">2</th>
    <td>Diazepam rectal gel</td>
    <td>DIASTAT, DIASTAT ACUDIAL</td>

    </tr>
    <tr>
    <th scope="row">3</th>
    <td>Methylphenidate transdermal system</td>
    <td>	
DAYTRANA</td>

    </tr>


  </tbody>
</table>
<div className='row'>
<i className="bi bi-exclamation-triangle-fill " style={{fontSize:"20px"}}>  Do not flush your medicines if it is not in the flush list</i>
</div>


      </div>
      <div className='Flush2'>
      <h2 className="Head2">Not On Flush List</h2>
      <p className='Para'>If there are no specific disposal instructions in the medication guide and no drug take back programs are available then follow these simple steps :</p>
      <ol className='Para'>
        <li>Mix medicines (liquid or pills; do not crush tablets or capsules) with an unappealing substance such as dirt, cat litter, or used coffee grounds</li>
        <li>Place the mixture in a container such as a sealed plastic bag</li>
        <li>Throw away the container in your trash at home</li>
        <li>Delete all personal information on the prescription label of empty medicine bottles or medicine packaging, then trash or recycle the empty bottle or packaging</li>
      </ol>
      </div>
      <p style={{fontSize:"20px", paddingLeft:"5%", paddingTop:"3%" }}>For more such information visit page: <a href='https://www.fda.gov/'>https://www.fda.gov/</a></p>
    </div>
    <Footer/>
    </div>
  );
}

export default Instructions;