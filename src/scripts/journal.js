// ***creating an object to store journal entry information into***

const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    },
    {
        date: "07/25/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    }
    
]
// ****declaring an empty array to store future journal entries***
emptyArray = [];
// ****looping through each component of the journalEntries array  and pushing them into the emptyArray****
for (i=0; i < journalEntries.length, i++){
    emptyArray.push(journalEntries[i]);
}
// *********declaring a function for each component of the journal entry - and returning each of them to their own HTML components*********
const concept = (journalConcept) => {
    return `<h1>${journalConcept}</h1>`
    
}
const entry = (journalEntry) => {
    return `<p>${journalEntry}</p>`
    
}
const mood = (journalMood) => {
    return `<p>${journalMood}</p>`
    
}
const date = (journalDate) => {
    return `<p>${journalDate}</p>`
    
}
// *******creating a function to compile all the journalEntries data into one function*******

const futureJournalInput = (concept, entry, mood, date) => {
    const futureConcept = concept(concept);
    const futureEntry = entry(entry);
    const futureMood = mood(mood);
    const futureDate = date(date);
    return `${futureConcept} ${futureEntry} ${futureMood} ${futureDate}`
}
// *********turn into html string to be displayed on the DOM**********
let journalHTML = "";
for (i=0; i < emptyArray.length; i++){
    journalHTML = journalHTML + futureJournalInput(emptyArray[i].concept, emptyArray[i].entry, emptyArray[i].mood, emptyArray[i].date);
    ;
}
// ********creating a final function to return journalHTML*********

completedJournal = () => {
    return journalHTML
}
// **********finding HTML with class of entryLog and displaying returned information from the function completedJournal**********

document.querySelector(".entryLog").innerHTML = completedJournal();








// fetch("http://localhost:3000/journalEntries")
//     .then(response => response.json())
//     .then(myParsedJournal => {
//         myParsedJournal.forEach(journalEntries => {
//             console.log(journalEntries);
           
//                 })
     


