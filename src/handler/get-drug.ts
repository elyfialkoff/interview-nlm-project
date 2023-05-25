interface GetDrugInput {
    drugName: string;
}

interface GetDrugOutput {
    drugName: string;
    activeIngredients: string[];
    dosageForms: string;
    rxcui: string;
    // ...
}

export async function getDrug(input: GetDrugInput): Promise<GetDrugOutput> {
    console.log(`Input: ${JSON.stringify(input, null,  2)}`)
    
    return Promise.resolve({
        drugName: 'name',
        activeIngredients: ['1', '2'],
        dosageForms: 'forms',
        rxcui: 'id'
    })
}

// https://rxnav.nlm.nih.gov/REST/drugs.json?name={drug name}

// Error Handling
// drugName must be string
// drugName not found