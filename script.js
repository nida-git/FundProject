// Private Equity Fund Prototype

const limitedPartners = [
    {
        name: "Rahul",
        commitment: 1000000,
        invidualPercentage: 0 + "%",
        amntDeducted: 0,
    },
    {
        name: "Rahul",
        commitment: 2000000,
        invidualPercentage: 0 + "%",
        amntDeducted: 0,
    },
    {
        name: "Rahul",
        commitment: 3000000,
        invidualPercentage: 0 + "%",
        amntDeducted: 0,
    },

]

const investments = [
    {
        OrganisationName: "Tata company",
        Requirement: 1000000
    }
]


const totalAmount = limitedPartners.reduce((totalAmount, {commitment})=> totalAmount +commitment , 0)

const investorRequirement = investments.reduce((totalAmount, {Requirement})=> totalAmount +Requirement , 0)

limitedPartners.forEach((obj )=>{
    const num = (obj.commitment/totalAmount) * 100
    const result = num.toFixed(2)
    obj.invidualPercentage = result + "%"
   
    amountToBeTaken = (investorRequirement * parseFloat(obj.invidualPercentage) )/ 100;
    obj.amntDeducted = amountToBeTaken
})

console.log(limitedPartners)
