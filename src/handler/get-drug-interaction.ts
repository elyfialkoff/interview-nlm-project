interface GetDrugInteractionInput {
    rxcui: string; // RxNorm Concept Unique Identifier 
}

interface GetDrugInteractionOutput {
    drugNames: string[];
    // ...
}

export async function getDrugInteraction(input: GetDrugInteractionInput): Promise<GetDrugInteractionOutput> {
    console.log(`Input: ${JSON.stringify(input, null,  2)}`)
    
    return Promise.resolve({
        drugNames: ['name 1', 'name 2']
    })
}

// https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui={rxcui}

// Error Handling
// rxcui needs to be a string
// rxcui not found