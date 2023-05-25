import express  from 'express';
import { getDrug } from './handler/get-drug';
import { getDrugInteraction } from './handler/get-drug-interaction';
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/drugs/:drugName", async ( req, res ) => {
    res.send(await getDrug({drugName: req.params.drugName}));
} );

app.get( "/interactions/rxcui/:rxcui/", async ( req, res ) => {
    res.send(await getDrugInteraction({rxcui: req.params.rxcui}));
} );

// start the Express server
app.listen(port, () => {
    console.log( `server started at http://localhost:${ port }` );
});